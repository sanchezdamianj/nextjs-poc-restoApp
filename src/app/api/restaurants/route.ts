import { type NextRequest } from "next/server";

import api from "@/api";

export async function GET(request: NextRequest) {
  const restaurant = await api.list();

  return Response.json(restaurant);
}

