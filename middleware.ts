import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const headers = new Headers(request.headers);
    headers.set("x-current-host", request.nextUrl.protocol +'//' + request.nextUrl.host);
    return NextResponse.next({ headers });
}
