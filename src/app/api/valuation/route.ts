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

type PriceRangeRow = RowDataPacket & {
  min_price: number | null;
  max_price: number | null;
};

export async function POST(req: Request) {
  let connection: mysql.Connection | null = null;

  try {
    const body: RequestBody = await req.json();
    const { cadastral, condition, propertyType, area } = body;

    // ✅ ფართობის დიაპაზონი
    const minArea = area - 5;
    const maxArea = area + 5;

    // ✅ საკადასტრო პრეფიქსი (მაგ: 01.10.10.)
    const cadastralPrefix = cadastral.split(".").slice(0, 3).join(".") + ".";

    // ✅ DB connection
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: 3306,
    });

    let rows: PriceRangeRow[] = [];

    // 🔹 ბინა / სახლი (ერთნაირი ლოგიკა)
    if (propertyType === "ბინა" || propertyType === "სახლი") {
      [rows] = await connection.execute<PriceRangeRow[]>(
        `
        SELECT
          ROUND(avg_price * 1.15) AS min_price,
          ROUND(avg_price * 1.25) AS max_price
        FROM (
          SELECT
            AVG(max_price) AS avg_price
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
        ) final
        `,
        [minArea, maxArea, condition, propertyType, cadastralPrefix]
      );
    }

    const minPrice = rows[0]?.min_price ?? null;
    const maxPrice = rows[0]?.max_price ?? null;

    return NextResponse.json({
      price_range: {
        min: minPrice,
        max: maxPrice,
      },
    });
  } catch (error) {
    console.error("SERVER ERROR:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}
