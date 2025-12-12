import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { cadastral, condition, propertyType, area } = body;

    // if (
    //   !cadastral ||
    //   !condition ||
    //   !propertyType ||
    //   area === null ||
    //   area === undefined ||
    //   Number.isNaN(Number(area))
    // ) {
    //   return NextResponse.json(
    //     { error: "Missing or invalid fields" },
    //     { status: 400 }
    //   );
    // }

    const minArea = Number(area) - 15;
    const maxArea = Number(area) + 15;
    const cadastralPrefix = String(cadastral).slice(0, 8);

    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: 3306,
    });

    const [rows] = (await connection.execute(
      `
      SELECT
        ROUND(
          AVG(
            CAST(
              REPLACE(
                REPLACE(sabazro_girebuleba, ' ', ''),
                ',',
                ''
              ) AS UNSIGNED
            )
          )
        ) AS avg_price
      FROM eval
      WHERE
        CAST(
          REPLACE(
            REPLACE(binis_saerto_farti, ',', '.'),
            ' ',
            ''
          ) AS DECIMAL(10,2)
        ) BETWEEN ? AND ?
        AND mdgomareoba = ?
        AND danishnuleba = ?
        AND sakadastro_kodi LIKE CONCAT(?, '%')
      `,

      [minArea, maxArea, condition, propertyType, cadastralPrefix]
    )) as any[];

    await connection.end();

    return NextResponse.json({
      avg_price: rows[0]?.avg_price ?? null,
    });
  } catch (error: any) {
    console.error("SERVER ERROR:", error);
    return NextResponse.json(
      { error: "Server error", message: error.message },
      { status: 500 }
    );
  }
}
