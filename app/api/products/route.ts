import { NextResponse } from "next/server"
import { getKawaiiProducts } from "reducer/kawaii"

export async function GET(request: Request) {
  const lalo = await getKawaiiProducts()
  // const rta = JSON.stringify(lalo)
  return  NextResponse.json(lalo)
}

// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const id = searchParams.get('id');
//   const res = await fetch(`localhost:3000/api/kawaii/${id}`, {
//     headers: {
//       'Content-Type': 'application/json',
//       'API-Key': process.env.DATA_API_KEY,
//     },
//   });
//   const product = await res.json();

//   return NextResponse.json({ product })
// }