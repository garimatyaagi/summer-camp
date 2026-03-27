import { NextRequest, NextResponse } from "next/server";
import * as fs from "fs";
import * as path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "registrations.json");

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, "[]", "utf-8");
}

function readRegistrations() {
  ensureDataDir();
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
  } catch {
    return [];
  }
}

function saveRegistrations(data: unknown[]) {
  ensureDataDir();
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const required = ["child_name", "child_dob", "gender", "medical", "plan", "weeks", "parent_name", "parent_phone", "parent_email", "emergency_contact", "referral"];
    for (const field of required) {
      if (!body[field] || (typeof body[field] === "string" && !body[field].trim())) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    if (Array.isArray(body.weeks) && body.weeks.length === 0) {
      return NextResponse.json({ error: "Please select at least one week" }, { status: 400 });
    }

    const registration = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      submitted_at: new Date().toISOString(),
      child_name: body.child_name,
      child_dob: body.child_dob,
      blood_group: body.blood_group || "",
      gender: body.gender,
      medical: body.medical,
      plan: body.plan,
      weeks: Array.isArray(body.weeks) ? body.weeks.join(", ") : body.weeks,
      extended_play: body.extended_play || "no",
      sibling: body.sibling || "no",
      parent_name: body.parent_name,
      parent_phone: body.parent_phone,
      parent_email: body.parent_email,
      emergency_contact: body.emergency_contact,
      referral: body.referral,
      notes: body.notes || "",
      photo_consent: body.photo_consent ? "Yes" : "No",
      activity_consent: body.activity_consent ? "Yes" : "No",
      tnc_consent: body.tnc_consent ? "Yes" : "No",
    };

    const registrations = readRegistrations();
    registrations.push(registration);
    saveRegistrations(registrations);

    return NextResponse.json({ success: true, id: registration.id, child_name: registration.child_name });
  } catch (err) {
    console.error("Registration error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
