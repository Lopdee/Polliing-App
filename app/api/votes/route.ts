/**
 * Poll Management API
 * 
 * Handles poll creation and listing.
 * - GET: Fetch all polls (most recent first)
 * - POST: Create a new poll with title and optional description
 * 
 * Why: Provides the main entry point for creating and retrieving polls
 * which users can later vote on.
 */

import { NextResponse } from "next/server"
import { supabaseServer } from "@/lib/supabaseServer"

export async function GET() {
  // Retrieve all polls ordered by creation time (descending = newest first)
  const { data, error } = await supabaseServer
    .from("polls")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    // Database error occurred
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ polls: data })
}

export async function POST(req: Request) {
  // Extract poll title + description from request body
  const { title, description } = await req.json()

  // Validation: title must be at least 3 characters
  if (!title || title.trim().length < 3) {
    return NextResponse.json({ error: "Title too short" }, { status: 400 })
  }

  // Insert new poll into database
  const { data, error } = await supabaseServer
    .from("polls")
    .insert({ title, description: description ?? null })
    .select("*")
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ poll: data }, { status: 201 })
}

