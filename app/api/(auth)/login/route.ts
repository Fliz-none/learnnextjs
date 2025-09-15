import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  //BASE_API_URL in env
  const res = await fetch(`${process.env.BASE_API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.json();
    return NextResponse.json({ error: err.message || "Login failed" }, { status: res.status });
  }

  const data = await res.json();

  const response = NextResponse.json({ user: data.user });
  response.cookies.set("token", data.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24, // 1 ngày
  });

  return response;
}
