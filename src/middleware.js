// Full Kode src\middleware.js
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export default function middleware(req, res, context) {
      const cookiesToken = req.cookies.get("token");

      if (cookiesToken) {
            return NextResponse.next();
      } else {
            return NextResponse.redirect(new URL("/", req.url));
      }
}

export const config = {
      matcher: ["/user/:path*"],
}