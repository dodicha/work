import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { cadastral, condition, livingArea } = body;

    if (!cadastral || !condition || !livingArea) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // 1) პირველი 3 სეგმენტი საკადასტრო კოდიდან
    const segments3 = cadastral.split(".").slice(0, 3).join(".");

    // 2) ფართის დიაპაზონი
    const areaMin = Number(livingArea) - 15;
    const areaMax = Number(livingArea) + 15;

    // 3) ქართული condition-ს ვიგებთ map-ით
    const conditionMap: Record<string, string> = {
      "Needs Renovation": "სარემონტო",
      "Fully Renovated": "გარემონტებული",
      "In Average Condition": "საშუალო დონის რემონტი",
    };

    const dbCondition = conditionMap[condition];

    // 4) SQL query
    const conn = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    const [rows] = await conn.execute<any[]>(
      `
      SELECT ROUND(AVG(sabazro_girebulebа), 2) AS avg_price
      FROM valuation
      WHERE sakadastro_kodi LIKE CONCAT(?, ".%")
        AND mdgomareoba = ?
        AND binis_saerto_farti BETWEEN ? AND ?
      `,
      [segments3, dbCondition, areaMin, areaMax]
    );

    return NextResponse.json({
      segments3,
      areaMin,
      areaMax,
      conditionDB: dbCondition,
      average_price: rows[0].avg_price ?? 0,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
