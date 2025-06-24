import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({message: "Hello from API"})
}

export async function POST(request: Request) {
  const data = await request.json()
  const {name} = data
  return NextResponse.json({message: `hello ${name} this was sent from the API`})
}
