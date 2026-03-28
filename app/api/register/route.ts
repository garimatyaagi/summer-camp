import { NextRequest, NextResponse } from "next/server";
import * as fs from "fs";
import * as path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "registrations.json");

// Google Sheets Apps Script URL — set in Vercel env vars
const GOOGLE_SHEET_URL = process.env.GOOGLE_SHEET_URL || "";

function saveToFile(data: Record<string, string>) {
  try {
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
    if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, "[]", "utf-8");
    const existing = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
    existing.push(data);
    fs.writeFileSync(DATA_FILE, JSON.stringify(existing, null, 2), "utf-8");
  } catch {
    // Filesystem may be read-only on Vercel — Google Sheets is primary
  }
}

async function saveToGoogleSheets(data: Record<string, string>) {
  if (!GOOGLE_SHEET_URL) return;
  try {
    await fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch (err) {
    console.error("Google Sheets error:", err);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const required = ["parent_name", "parent_phone", "child_age", "area"];
    for (const field of required) {
      if (!body[field] || (typeof body[field] === "string" && !body[field].trim())) {
        return NextResponse.json({ error: "Please fill in all fields." }, { status: 400 });
      }
    }

    const lead = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      submitted_at: new Date().toISOString(),
      parent_name: body.parent_name.trim(),
      parent_phone: body.parent_phone.trim(),
      child_age: body.child_age,
      area: body.area.trim(),
    };

    saveToFile(lead);
    await saveToGoogleSheets(lead);

    return NextResponse.json({ success: true, id: lead.id });
  } catch (err) {
    console.error("Registration error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
