import { NextResponse } from "next/server";
import { contacts } from "@/data/contact";

// Remove the icon component from the contact data as it can't be serialized to JSON
const serializedContacts = contacts.map(({ icon, ...rest }) => rest);

export async function GET() {
  return NextResponse.json(serializedContacts, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
