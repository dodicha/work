import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { cadastral } = body;

    console.log("REQUEST:", body);

    const [rows] = await db.query(
      "SELECT * FROM eval WHERE cadastral_code = ? LIMIT 1",
      [cadastral]
    );

    return NextResponse.json({
      success: true,
      data: rows,
    });
  } catch (error) {
    console.error("AWS DB ERROR:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
