import { NextRequest, NextResponse } from "next/server";
import * as fs from "fs";
import * as path from "path";
import * as XLSX from "xlsx";

const DATA_FILE = path.join(process.cwd(), "data", "registrations.json");

// Simple admin key — replace with proper auth in production
const ADMIN_KEY = process.env.ADMIN_KEY || "tinkerhood2026";

function readRegistrations() {
  try {
    if (!fs.existsSync(DATA_FILE)) return [];
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
  } catch {
    return [];
  }
}

export async function GET(req: NextRequest) {
  const key = req.nextUrl.searchParams.get("key");
  if (key !== ADMIN_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const format = req.nextUrl.searchParams.get("format") || "json";
  const registrations = readRegistrations();

  if (format === "excel") {
    const wb = XLSX.utils.book_new();
    const headers = [
      "ID", "Submitted", "Child Name", "DOB", "Blood Group", "Gender",
      "Medical/Allergies", "Plan", "Weeks", "Extended Play", "Sibling Discount",
      "Parent Name", "Phone", "Email", "Emergency Contact",
      "Referral", "Notes", "Photo Consent", "Activity Consent", "T&C Consent"
    ];

    const rows = registrations.map((r: Record<string, string>) => [
      r.id, r.submitted_at, r.child_name, r.child_dob, r.blood_group, r.gender,
      r.medical, r.plan, r.weeks, r.extended_play, r.sibling,
      r.parent_name, r.parent_phone, r.parent_email, r.emergency_contact,
      r.referral, r.notes, r.photo_consent, r.activity_consent, r.tnc_consent
    ]);

    const ws = XLSX.utils.aoa_to_sheet([headers, ...rows]);

    // Auto-width columns
    ws["!cols"] = headers.map((h, i) => ({
      wch: Math.max(h.length, ...rows.map((r: string[]) => (r[i] || "").toString().length)).toString().length > 40 ? 40 : Math.max(h.length + 2, 12)
    }));

    XLSX.utils.book_append_sheet(wb, ws, "Registrations");

    const buf = XLSX.write(wb, { type: "buffer", bookType: "xlsx" });

    return new NextResponse(buf, {
      headers: {
        "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename="tinkerhood-registrations-${new Date().toISOString().slice(0, 10)}.xlsx"`,
      },
    });
  }

  return NextResponse.json({ count: registrations.length, registrations });
}
