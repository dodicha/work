import { NextResponse } from "next/server";
import mysql from "mysql2/promise";
import { RowDataPacket } from "mysql2";

export const runtime = "nodejs";

type RequestBody = {
  cadastral: string;
  condition: string;
  propertyType: string;
  area: number;
};

type AvgPriceRow = RowDataPacket & {
  avg_price: number | null;
};

export async function POST(req: Request) {
  let connection: mysql.Connection | null = null;

  try {
    const body: RequestBody = await req.json();
    const { cadastral, condition, propertyType, area } = body;

    // // ✅ ვალიდაცია
    // if (
    //   !cadastral ||
    //   !condition ||
    //   !propertyType ||
    //   typeof area !== "number" ||
    //   Number.isNaN(area)
    // ) {
    //   return NextResponse.json(
    //     { error: "Missing or invalid fields" },
    //     { status: 400 }
    //   );
    // }

    // ✅ გამოთვლები
    const minArea = area - 15;
    const maxArea = area + 15;

    // მაგ: 01.10.10.
    const cadastralPrefix = cadastral.split(".").slice(0, 3).join(".") + ".";

    // ✅ DB connection
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME, // valuation
      port: 3306,
    });

    const [rows] = await connection.execute<AvgPriceRow[]>(
      `
  SELECT
    ROUND(AVG(max_price)) AS avg_price
  FROM (
    SELECT
      sakadastro_kodi,
      MAX(
        CAST(
          REPLACE(
            REPLACE(sabazro_girebuleba, ' ', ''),
            ',',
            ''
          ) AS UNSIGNED
        )
      ) AS max_price
    FROM filtered
    WHERE
      CAST(
        REPLACE(
          REPLACE(binis_saerto_farti, ',', '.'),
          ' ',
          ''
        ) AS DECIMAL(10,2)
      ) BETWEEN ? AND ?
      AND TRIM(mdgomareoba) = ?
      AND TRIM(arsebuli_gamokeneba) = ?
      AND sakadastro_kodi LIKE CONCAT(?, '%')
    GROUP BY sakadastro_kodi
  ) t
  `,
      [minArea, maxArea, condition, propertyType, cadastralPrefix]
    );

    const avgPrice = rows[0]?.avg_price ?? null;

    return NextResponse.json({
      avg_price: avgPrice,
    });
  } catch (error) {
    console.error("SERVER ERROR:", error);

    return NextResponse.json({ error: "Server error" }, { status: 500 });
  } finally {
    // ✅ connection ყოველთვის იხურება
    if (connection) {
      await connection.end();
    }
  }
}
