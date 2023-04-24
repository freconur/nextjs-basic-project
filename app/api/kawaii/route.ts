import { NextResponse } from "next/server";
import { getKawaiiProducts, kawaiiProductById } from "reducer/kawaii";

export async function GET(request: Request) {
  const id = request.url.slice(request.url.lastIndexOf("/") + 1);
  const lalo = await kawaiiProductById(id);
  // const rta = JSON.stringify(lalo)
  return NextResponse.json(lalo);
}