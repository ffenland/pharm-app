import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";

// To handle a GET request to /api
export async function GET(request: NextApiRequest, response: NextApiResponse) {
  // Do whatever you want
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}

// To handle a POST request to /api
export async function POST(request: NextApiRequest, response: NextApiResponse) {
  // Do whatever you want
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}
