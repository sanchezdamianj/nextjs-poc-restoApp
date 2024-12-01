import type { NextRequest } from "next/server";

import { revalidateTag } from "next/cache";

// import { revalidatePath } from "next/cache";
// Revalidate a specific path on the server side
// export async function GET(request: NextRequest) {
//   const path = request.nextUrl.searchParams.get("path") || "/";

//   revalidatePath(path);

//   return Response.json({ success: true });
// }


export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag") || "restaurants";

  revalidateTag(tag);

  return Response.json({ success: true });
}
