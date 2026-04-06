#!/usr/bin/env python3
"""
The Summer Club - Brochure Generator
Single A4 page PDF. All sections fill the full page with no gaps.
"""

from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import Color

OCEAN_BLUE      = Color(43/255,  87/255,  151/255)
KITE_RED        = Color(224/255, 90/255,  58/255)
SUNSHINE_YELLOW = Color(240/255, 199/255, 94/255)
SKY_BLUE        = Color(155/255, 184/255, 215/255)
CLOUD_WHITE     = Color(237/255, 242/255, 247/255)
WHITE           = Color(1, 1, 1)
DARK_TEXT       = Color(30/255,  45/255,  61/255)
GREY_TEXT       = Color(107/255, 125/255, 143/255)
LIGHT_GREY      = Color(0.75, 0.75, 0.75)

W, H = A4  # 595.27 x 841.89

OUTPUT = "/Users/garimatyagi/Coding/summer-camp/public/The_Summer_Club_Brochure.pdf"


def draw_centred(c, text, y, font, size, color):
    c.setFont(font, size)
    c.setFillColor(color)
    tw = c.stringWidth(text, font, size)
    c.drawString((W - tw) / 2, y, text)


def main():
    c = canvas.Canvas(OUTPUT, pagesize=A4)
    c.setTitle("The Summer Club - Brochure")
    c.setAuthor("The Summer Club")

    # ── Section boundaries (no gaps — each section bottom = next section top) ──
    FOOTER_H  = 80     # 0 → 80
    SCHED_H   = 290    # 80 → 370   (schedule + pricing + included)
    WEEKS_H   = 230    # 370 → 600
    INFO_H    = 82     # 600 → 682
    BANNER_H  = 160    # 682 → 842  (≈ H)

    footer_top  = FOOTER_H                          # 80
    sched_top   = footer_top  + SCHED_H             # 370
    weeks_top   = sched_top   + WEEKS_H             # 600
    info_top    = weeks_top   + INFO_H              # 682
    banner_top  = info_top    + BANNER_H            # 842 ≈ H

    # =========================================================================
    # SECTION 1 — BANNER  (Ocean Blue, top of page)
    # =========================================================================
    c.setFillColor(OCEAN_BLUE)
    c.rect(0, info_top, W, BANNER_H, stroke=0, fill=1)

    # Decorative dots
    for (dx, dy, r, col) in [
        (18,  H - 14,        5, KITE_RED),
        (44,  H - 28,        4, SUNSHINE_YELLOW),
        (W-20, H - 16,       5, SUNSHINE_YELLOW),
        (W-48, H - 10,       4, KITE_RED),
        (14,  info_top + 18, 4, SUNSHINE_YELLOW),
        (40,  info_top + 8,  5, KITE_RED),
        (W-16, info_top+20,  6, KITE_RED),
        (W-46, info_top+10,  4, SUNSHINE_YELLOW),
    ]:
        c.setFillColor(col)
        c.circle(dx, dy, r, stroke=0, fill=1)

    # Location tag top-right
    loc = "Bangalore  \u00b7  15 Apr - 30 May 2026"
    c.setFont("Helvetica", 8)
    c.setFillColor(SKY_BLUE)
    c.drawString(W - c.stringWidth(loc, "Helvetica", 8) - 18, H - 14, loc)

    draw_centred(c, "The Summer Club",                        H - 68, "Helvetica-Bold", 34, WHITE)
    draw_centred(c, "A 7-week maker studio for kids aged 5-8", H - 92, "Helvetica", 13, SUNSHINE_YELLOW)
    draw_centred(c, "Vajram Esteva  \u00b7  Mon-Fri  \u00b7  9:00 AM - 12:30 PM",
                 H - 112, "Helvetica", 10, WHITE)

    # =========================================================================
    # SECTION 2 — BLURB + PILLS  (Cloud White)
    # =========================================================================
    c.setFillColor(CLOUD_WHITE)
    c.rect(0, weeks_top, W, INFO_H, stroke=0, fill=1)

    blurb = ("Each week, kids work on a completely different skill and figure it out themselves. "
             "No worksheets. They make real things, and every Friday they show what they made.")
    c.setFont("Helvetica", 9.5)
    c.setFillColor(DARK_TEXT)
    words, line, by = blurb.split(), "", info_top - 22
    for word in words:
        test = (line + " " + word).strip()
        if c.stringWidth(test, "Helvetica", 9.5) <= 495:
            line = test
        else:
            c.drawString(50, by, line)
            by -= 14
            line = word
    if line:
        c.drawString(50, by, line)

    # Info pills
    pill_y = weeks_top + 10
    for (px, pw, label) in [(50, 135, "Ages 5-8"), (200, 160, "7 Weeks \u00b7 Mon-Fri"), (375, 168, "9 AM - 12:30 PM")]:
        c.setStrokeColor(OCEAN_BLUE)
        c.setFillColor(WHITE)
        c.setLineWidth(1)
        c.roundRect(px, pill_y, pw, 30, 5, stroke=1, fill=1)
        c.setFont("Helvetica-Bold", 9)
        c.setFillColor(OCEAN_BLUE)
        tw = c.stringWidth(label, "Helvetica-Bold", 9)
        c.drawString(px + (pw - tw) / 2, pill_y + 10, label)

    # =========================================================================
    # SECTION 3 — 7 WEEKS  (White)
    # =========================================================================
    c.setFillColor(WHITE)
    c.rect(0, sched_top, W, WEEKS_H, stroke=0, fill=1)

    c.setFont("Helvetica-Bold", 14)
    c.setFillColor(OCEAN_BLUE)
    c.drawString(50, weeks_top - 22, "7 Weeks. 7 Things They'll Make.")

    c.setFont("Helvetica", 9)
    c.setFillColor(GREY_TEXT)
    c.drawString(50, weeks_top - 36, "A different theme every week. A real outcome every Friday.")

    weeks = [
        (1, "Stop-Motion Film Studio",   "Write a story, build sets, and shoot a film frame by frame."),
        (2, "Science Lab",               "Paper planes, rockets, parachutes -- built to understand flight."),
        (3, "The Invention Kitchen",     "Write menus, measure ingredients, cook real food from scratch."),
        (4, "Design Your Game",          "Design rules, board, and pieces -- build a game others can play."),
        (5, "Build Break Fix",           "Build a cardboard robot, write its manual, demo on Friday."),
        (6, "The Market",                "Make a product, price it, and run a real pop-up market stall."),
        (7, "The Big Show",              "Write, direct, and perform a short play for parents."),
    ]

    col1_x, col2_x = 50, 308
    start_y = weeks_top - 56
    row_h   = 46

    for i, (num, name, desc) in enumerate(weeks):
        x = col1_x if i < 4 else col2_x
        y = start_y - (i if i < 4 else i - 4) * row_h
        c.setFont("Helvetica-Bold", 8);  c.setFillColor(KITE_RED);    c.drawString(x, y, f"Week {num}")
        c.setFont("Helvetica-Bold", 10); c.setFillColor(OCEAN_BLUE);  c.drawString(x, y - 12, name)
        c.setFont("Helvetica-Oblique", 8); c.setFillColor(GREY_TEXT); c.drawString(x, y - 23, desc)

    # =========================================================================
    # SECTION 4 — SCHEDULE + PRICING + INCLUDED  (Sky Blue background)
    # =========================================================================
    c.setFillColor(SKY_BLUE)
    c.rect(0, footer_top, W, SCHED_H, stroke=0, fill=1)

    # ── "A typical morning" heading ──
    c.setFont("Helvetica-Bold", 11)
    c.setFillColor(OCEAN_BLUE)
    c.drawString(30, sched_top - 20, "A typical morning")

    c.setFont("Helvetica", 8)
    c.setFillColor(WHITE)
    c.drawString(30, sched_top - 34, "Same calm rhythm every day.")

    # Schedule pills: 2 rows x 3
    slots = [("9:00","Welcome"),("9:15","Make"),("10:30","Snack"),
             ("10:45","Move"),("11:00","Express"),("12:15","Wind-down")]
    pill_w, pill_h, gap = 70, 40, 7
    for j, (t, lbl) in enumerate(slots):
        row, col = j // 3, j % 3
        px = 30 + col * (pill_w + gap)
        py = sched_top - 88 - row * (pill_h + 7)
        c.setFillColor(WHITE); c.setStrokeColor(OCEAN_BLUE); c.setLineWidth(0.5)
        c.roundRect(px, py, pill_w, pill_h, 6, stroke=1, fill=1)
        c.setFont("Helvetica-Bold", 8); c.setFillColor(OCEAN_BLUE)
        tw = c.stringWidth(t, "Helvetica-Bold", 8)
        c.drawString(px + (pill_w - tw) / 2, py + pill_h - 14, t)
        c.setFont("Helvetica", 7); c.setFillColor(GREY_TEXT)
        lw2 = c.stringWidth(lbl, "Helvetica", 7)
        c.drawString(px + (pill_w - lw2) / 2, py + 7, lbl)

    # ── "What's included" checklist  (left column, below pills) ──
    inc_y = sched_top - 185
    c.setFont("Helvetica-Bold", 10)
    c.setFillColor(OCEAN_BLUE)
    c.drawString(30, inc_y, "What's included")

    included = [
        "All 7 weeks of the programme",
        "Every material and supply",
        "Daily snacks",
        "Take-home projects each week",
        "Friday showcase for parents",
        "1:8 adult ratio  \u00b7  Gated campus",
        "First-aid on site",
        "Certificate of completion",
    ]
    iy = inc_y - 16
    for item in included:
        c.setFont("Helvetica-Bold", 8); c.setFillColor(KITE_RED); c.drawString(30, iy, "v")
        c.setFont("Helvetica", 8);      c.setFillColor(DARK_TEXT); c.drawString(46, iy, item)
        iy -= 14

    # ── Pricing box  (right column) ──
    bx, bw = 295, 272
    by_box = footer_top + 12
    bh = SCHED_H - 24

    c.setFillColor(OCEAN_BLUE)
    c.roundRect(bx, by_box, bw, bh, 10, stroke=0, fill=1)

    inner_top = by_box + bh - 16
    tag = "Early Bird - First 25 Families"
    c.setFont("Helvetica-Bold", 8); c.setFillColor(SUNSHINE_YELLOW)
    c.drawString(bx + (bw - c.stringWidth(tag,"Helvetica-Bold",8))/2, inner_top, tag)

    price_y = inner_top - 36
    c.setFont("Helvetica-Bold", 28); c.setFillColor(WHITE)
    pw2 = c.stringWidth("Rs.28,000","Helvetica-Bold",28)
    c.drawString(bx + (bw - pw2)/2, price_y, "Rs.28,000")

    strike_y = price_y - 22
    c.setFont("Helvetica", 11); c.setFillColor(LIGHT_GREY)
    sp = "Rs.35,000"; sw2 = c.stringWidth(sp,"Helvetica",11)
    sp_x = bx + (bw - sw2)/2
    c.drawString(sp_x, strike_y, sp)
    c.setStrokeColor(LIGHT_GREY); c.setLineWidth(1)
    c.line(sp_x, strike_y + 4, sp_x + sw2, strike_y + 4)

    s1 = "Full 7-week programme"
    sub1_y = strike_y - 18
    c.setFont("Helvetica", 9); c.setFillColor(WHITE)
    c.drawString(bx + (bw - c.stringWidth(s1,"Helvetica",9))/2, sub1_y, s1)

    s2 = "That's Rs.4,000/week"
    sub2_y = sub1_y - 14
    c.setFont("Helvetica", 9); c.setFillColor(SUNSHINE_YELLOW)
    c.drawString(bx + (bw - c.stringWidth(s2,"Helvetica",9))/2, sub2_y, s2)

    div_y = sub2_y - 12
    c.setStrokeColor(WHITE); c.setLineWidth(0.5)
    c.line(bx + 20, div_y, bx + bw - 20, div_y)

    fine_lines = ["All materials, snacks &", "take-homes included. No add-ons."]
    fine_y = div_y - 14
    c.setFont("Helvetica", 8); c.setFillColor(WHITE)
    for fl in fine_lines:
        c.drawString(bx + (bw - c.stringWidth(fl,"Helvetica",8))/2, fine_y, fl)
        fine_y -= 12

    # =========================================================================
    # SECTION 5 — CTA FOOTER  (Kite Red)
    # =========================================================================
    c.setFillColor(KITE_RED)
    c.rect(0, 0, W, FOOTER_H, stroke=0, fill=1)

    for (dx, dy, r) in [(14,FOOTER_H-12,5),(40,FOOTER_H-5,4),(W-16,FOOTER_H-14,5),(W-42,FOOTER_H-6,4),(14,10,4),(W-16,10,4)]:
        c.setFillColor(SUNSHINE_YELLOW); c.circle(dx, dy, r, stroke=0, fill=1)

    draw_centred(c, "Ready to register?",           62, "Helvetica-Bold", 18, WHITE)
    draw_centred(c, "summerclub.in/register",        44, "Helvetica-Bold", 11, WHITE)
    draw_centred(c, "WhatsApp: +91 76786 76150",     28, "Helvetica",      10, WHITE)
    draw_centred(c, "The Summer Club  \u00b7  Vajram Esteva  \u00b7  Bangalore  \u00b7  15 Apr - 30 May 2026",
                 12, "Helvetica", 7, SKY_BLUE)

    c.showPage()
    c.save()
    print(f"PDF saved to: {OUTPUT}")


if __name__ == "__main__":
    main()
