import { unstable_cache } from "next/cache";
import { NextResponse } from "next/server";

const x = unstable_cache(() => Promise.resolve());

export async function middleware() {
  x(); // Doesn't actually need to be called, just making sure it doesn't get optimized away
  return NextResponse.next();
}
