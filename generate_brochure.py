#!/usr/bin/env python3
"""
The Summer Club - Brochure Generator
Single A4 page PDF.
"""

from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import Color

# Brand colours
OCEAN_BLUE      = Color(43/255,  87/255,  151/255)
KITE_RED        = Color(224/255, 90/255,  58/255)
SUNSHINE_YELLOW = Color(240/255, 199/255, 94/255)
SKY_BLUE        = Color(155/255, 184/255, 215/255)
CLOUD_WHITE     = Color(237/255, 242/255, 247/255)
WHITE           = Color(1, 1, 1)
DARK_TEXT       = Color(30/255,  45/255,  61/255)
GREY_TEXT       = Color(107/255, 125/255, 143/255)
LIGHT_GREY      = Color(0.75, 0.75, 0.75)

W, H = A4   # 595.27 x 841.89

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
    c.setSubject("7-week maker studio for kids aged 5-8, Bangalore Apr-May 2026")

    # =========================================================================
    # SECTION 1 - BANNER
    # Ocean Blue background, height=130, from y=H-130 to y=H
    # =========================================================================
    banner_h = 130
    banner_y = H - banner_h  # bottom of banner

    c.setFillColor(OCEAN_BLUE)
    c.rect(0, banner_y, W, banner_h, stroke=0, fill=1)

    # Decorative small circles scattered in corners
    deco = [
        (18,  H - 14,      5, KITE_RED),
        (42,  H - 28,      4, SUNSHINE_YELLOW),
        (W - 20, H - 16,   5, SUNSHINE_YELLOW),
        (W - 48, H - 10,   4, KITE_RED),
        (12,  banner_y + 18, 4, SUNSHINE_YELLOW),
        (38,  banner_y + 8,  5, KITE_RED),
        (W - 16, banner_y + 20, 6, KITE_RED),
        (W - 45, banner_y + 10, 4, SUNSHINE_YELLOW),
    ]
    for (dx, dy, r, col) in deco:
        c.setFillColor(col)
        c.circle(dx, dy, r, stroke=0, fill=1)

    # Top-right: location tag
    loc = "Bangalore  \u00b7  15 Apr - 30 May 2026"
    c.setFont("Helvetica", 8)
    c.setFillColor(SKY_BLUE)
    lw = c.stringWidth(loc, "Helvetica", 8)
    c.drawString(W - lw - 18, H - 14, loc)

    # Main heading
    draw_centred(c, "The Summer Club", H - 65, "Helvetica-Bold", 30, WHITE)

    # Subheading
    draw_centred(c, "A 7-week maker studio for kids aged 5-8",
                 H - 85, "Helvetica", 12, SUNSHINE_YELLOW)

    # Location/times
    draw_centred(c, "Vajram Esteva  \u00b7  Mon-Fri  \u00b7  9:00 AM - 12:30 PM",
                 H - 102, "Helvetica", 9, WHITE)

    # =========================================================================
    # SECTION 2 - INFO + BLURB
    # Cloud White background, height=90, y from H-220 to H-130
    # =========================================================================
    info_h = 90
    info_top = banner_y          # H - 130
    info_bot = H - 220

    c.setFillColor(CLOUD_WHITE)
    c.rect(0, info_bot, W, info_h, stroke=0, fill=1)

    # Blurb text
    blurb = ("Each week, kids work on a completely different skill and figure it out themselves. "
             "No worksheets. They make real things, and every Friday they show what they made.")
    c.setFont("Helvetica", 9)
    c.setFillColor(DARK_TEXT)
    # Draw as a single wrapped block; max_width=495, starting x=50
    words = blurb.split()
    line = ""
    by = H - 148
    for word in words:
        test = (line + " " + word).strip()
        if c.stringWidth(test, "Helvetica", 9) <= 495:
            line = test
        else:
            c.drawString(50, by, line)
            by -= 13
            line = word
    if line:
        c.drawString(50, by, line)

    # Three info pills at y = H-210
    pill_y = H - 210
    pills = [
        (50,  130, "Ages 5-8"),
        (195, 155, "7 Weeks \u00b7 Mon-Fri"),
        (365, 165, "9 AM - 12:30 PM"),
    ]
    for (px, pw, label) in pills:
        c.setStrokeColor(OCEAN_BLUE)
        c.setFillColor(WHITE)
        c.setLineWidth(1)
        c.roundRect(px, pill_y, pw, 32, 6, stroke=1, fill=1)
        c.setFont("Helvetica-Bold", 9)
        c.setFillColor(OCEAN_BLUE)
        tw = c.stringWidth(label, "Helvetica-Bold", 9)
        c.drawString(px + (pw - tw) / 2, pill_y + 11, label)

    # =========================================================================
    # SECTION 3 - 7 WEEKS
    # White background, height=240, y from H-460 to H-220
    # =========================================================================
    weeks_top = H - 220
    weeks_bot = H - 460

    c.setFillColor(WHITE)
    c.rect(0, weeks_bot, W, 240, stroke=0, fill=1)

    # Heading
    c.setFont("Helvetica-Bold", 14)
    c.setFillColor(OCEAN_BLUE)
    c.drawString(50, H - 238, "7 Weeks. 7 Things They'll Make.")

    # Subtitle
    c.setFont("Helvetica", 9)
    c.setFillColor(GREY_TEXT)
    c.drawString(50, H - 254, "A different theme every week. A real outcome every Friday.")

    weeks = [
        (1, "Stop-Motion Film Studio",
         "Write a story, build sets, shoot a film frame by frame."),
        (2, "Science Lab",
         "Paper planes, rockets, parachutes -- built to understand flight."),
        (3, "The Invention Kitchen",
         "Write menus, measure ingredients, cook real food from scratch."),
        (4, "Design Your Game",
         "Design rules, board, and pieces -- build a game others can play."),
        (5, "Build Break Fix",
         "Build a cardboard robot, write its manual, demo it on Friday."),
        (6, "The Market",
         "Make a product, price it, and run a real pop-up market stall."),
        (7, "The Big Show",
         "Write, direct, and perform a short play for parents."),
    ]

    col1_x  = 50
    col2_x  = 305
    start_y = H - 275
    row_h   = 48

    for i, (num, name, desc) in enumerate(weeks):
        if i < 4:
            x = col1_x
            y = start_y - i * row_h
        else:
            x = col2_x
            y = start_y - (i - 4) * row_h

        # "Week N"
        c.setFont("Helvetica-Bold", 8)
        c.setFillColor(KITE_RED)
        c.drawString(x, y, f"Week {num}")

        # Week name
        c.setFont("Helvetica-Bold", 10)
        c.setFillColor(OCEAN_BLUE)
        c.drawString(x, y - 11, name)

        # Description
        c.setFont("Helvetica-Oblique", 8)
        c.setFillColor(GREY_TEXT)
        c.drawString(x, y - 22, desc)

    # =========================================================================
    # SECTION 4 - SCHEDULE + PRICING
    # Sky Blue full background, height=145, y from H-605 to H-460
    # =========================================================================
    sched_top = H - 460
    sched_bot = H - 605

    c.setFillColor(SKY_BLUE)
    c.rect(0, sched_bot, W, 145, stroke=0, fill=1)

    # LEFT: "A typical morning"
    c.setFont("Helvetica-Bold", 11)
    c.setFillColor(OCEAN_BLUE)
    c.drawString(30, H - 478, "A typical morning")

    c.setFont("Helvetica", 8)
    c.setFillColor(WHITE)
    c.drawString(30, H - 492, "Same calm rhythm every day.")

    # Schedule pills: 2 rows of 3
    slots = [
        ("9:00",  "Welcome"),
        ("9:15",  "Make"),
        ("10:30", "Snack"),
        ("10:45", "Move"),
        ("11:00", "Express"),
        ("12:15", "Wind-down"),
    ]
    pill_w = 72
    pill_h = 38
    pill_gap = 8
    pill_start_x = 30

    for j, (time_str, label) in enumerate(slots):
        row = j // 3
        col = j % 3
        px = pill_start_x + col * (pill_w + pill_gap)
        py = H - 535 - row * (pill_h + 7)

        c.setFillColor(WHITE)
        c.setStrokeColor(OCEAN_BLUE)
        c.setLineWidth(0.5)
        c.roundRect(px, py, pill_w, pill_h, 6, stroke=1, fill=1)

        c.setFont("Helvetica-Bold", 8)
        c.setFillColor(OCEAN_BLUE)
        tw = c.stringWidth(time_str, "Helvetica-Bold", 8)
        c.drawString(px + (pill_w - tw) / 2, py + pill_h - 14, time_str)

        c.setFont("Helvetica", 7)
        c.setFillColor(GREY_TEXT)
        lw2 = c.stringWidth(label, "Helvetica", 7)
        c.drawString(px + (pill_w - lw2) / 2, py + 7, label)

    # RIGHT: Pricing box
    box_x = 295
    box_y = H - 600
    box_w = 270
    box_h = 130

    c.setFillColor(OCEAN_BLUE)
    c.setStrokeColor(OCEAN_BLUE)
    c.roundRect(box_x, box_y, box_w, box_h, 8, stroke=0, fill=1)

    inner_top = box_y + box_h - 14

    # Early Bird tag
    c.setFont("Helvetica-Bold", 8)
    c.setFillColor(SUNSHINE_YELLOW)
    tag = "Early Bird - First 25 Families"
    tw = c.stringWidth(tag, "Helvetica-Bold", 8)
    c.drawString(box_x + (box_w - tw) / 2, inner_top, tag)

    # Main price
    price_y = inner_top - 32
    c.setFont("Helvetica-Bold", 26)
    c.setFillColor(WHITE)
    pw = c.stringWidth("Rs.28,000", "Helvetica-Bold", 26)
    c.drawString(box_x + (box_w - pw) / 2, price_y, "Rs.28,000")

    # Strikethrough price
    strike_y = price_y - 18
    c.setFont("Helvetica", 10)
    c.setFillColor(LIGHT_GREY)
    sp = "Rs.35,000"
    sw = c.stringWidth(sp, "Helvetica", 10)
    sp_x = box_x + (box_w - sw) / 2
    c.drawString(sp_x, strike_y, sp)
    c.setStrokeColor(LIGHT_GREY)
    c.setLineWidth(1)
    c.line(sp_x, strike_y + 4, sp_x + sw, strike_y + 4)

    # Full 7-week programme
    sub1_y = strike_y - 14
    c.setFont("Helvetica", 9)
    c.setFillColor(WHITE)
    s1 = "Full 7-week programme"
    s1w = c.stringWidth(s1, "Helvetica", 9)
    c.drawString(box_x + (box_w - s1w) / 2, sub1_y, s1)

    # That's Rs.4,000/week
    sub2_y = sub1_y - 13
    c.setFont("Helvetica", 9)
    c.setFillColor(SUNSHINE_YELLOW)
    s2 = "That's Rs.4,000/week"
    s2w = c.stringWidth(s2, "Helvetica", 9)
    c.drawString(box_x + (box_w - s2w) / 2, sub2_y, s2)

    # Thin white divider
    div_y = sub2_y - 10
    c.setStrokeColor(WHITE)
    c.setLineWidth(0.5)
    c.line(box_x + 20, div_y, box_x + box_w - 20, div_y)

    # Fine print
    fine = "All materials, snacks & take-homes included."
    fine_y = div_y - 12
    c.setFont("Helvetica", 8)
    c.setFillColor(WHITE)
    fw = c.stringWidth(fine, "Helvetica", 8)
    c.drawString(box_x + (box_w - fw) / 2, fine_y, fine)

    # =========================================================================
    # SECTION 5 - CTA FOOTER
    # Kite Red background, height=80, y from 0 to 80
    # =========================================================================
    footer_h = 80

    c.setFillColor(KITE_RED)
    c.rect(0, 0, W, footer_h, stroke=0, fill=1)

    # Decorative yellow circles at corners
    dot_decs = [
        (14,  footer_h - 12, 5, SUNSHINE_YELLOW),
        (38,  footer_h - 5,  4, SUNSHINE_YELLOW),
        (W - 16, footer_h - 14, 5, SUNSHINE_YELLOW),
        (W - 42, footer_h - 6,  4, SUNSHINE_YELLOW),
        (14,  10,              4, SUNSHINE_YELLOW),
        (W - 16, 10,           4, SUNSHINE_YELLOW),
    ]
    for (dx, dy, r, col) in dot_decs:
        c.setFillColor(col)
        c.circle(dx, dy, r, stroke=0, fill=1)

    draw_centred(c, "Ready to register?",                          62, "Helvetica-Bold", 18, WHITE)
    draw_centred(c, "summerclub.in/register",                      44, "Helvetica-Bold", 11, WHITE)
    draw_centred(c, "WhatsApp: +91 76786 76150",                   28, "Helvetica",      10, WHITE)
    draw_centred(c, "The Summer Club  \u00b7  Vajram Esteva  \u00b7  Bangalore  \u00b7  15 Apr - 30 May 2026",
                 12, "Helvetica", 7, SKY_BLUE)

    # =========================================================================
    # Single page only
    # =========================================================================
    c.showPage()
    c.save()
    print(f"PDF saved to: {OUTPUT}")


if __name__ == "__main__":
    main()
