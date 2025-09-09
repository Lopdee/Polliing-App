~                                                                                                      /**
 * Authentication API Route
 * 
 * Handles user login, signup, and session management using Supabase Auth.
 * - POST: Creates a new user or logs in existing user
 * - GET: Fetches current authenticated user session
 * 
 * Why: Centralized authentication ensures secure access to protected routes
 * and links users to polls/votes for accountability.
 */

import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabaseClient"

export async function POST(req: Request) {
  // Parse incoming request body (email + password)
  const { email, password } = await req.json()

  // Attempt to sign in with Supabase
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    // Return 401 if credentials invalid
    return NextResponse.json({ error: error.message }, { status: 401 })
  }

  // Return the authenticated user and session
  return NextResponse.json({ user: data.user, session: data.session })
}

export async function GET() {
  // Fetch current authenticated user session
  const { data, error } = await supabase.auth.getSession()
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json({ session: data.session })
}

