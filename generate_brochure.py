#!/usr/bin/env python3
"""
The Summer Club - Brochure Generator
Renders a beautiful A4 brochure via HTML+CSS → Chromium (Playwright) → PDF.
"""

import os
import sys
import tempfile

OUTPUT = "/Users/garimatyagi/Coding/summer-camp/public/The_Summer_Club_Brochure.pdf"

# ─────────────────────────────────────────────────────────────────────────────
# HTML TEMPLATE
# ─────────────────────────────────────────────────────────────────────────────

HTML = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>The Summer Club Brochure</title>
<style>
  @page {
    size: A4;
    margin: 0;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    width: 794px;
    height: 1123px;
    font-family: Arial, Helvetica, sans-serif;
    overflow: hidden;
    background: white;
    position: relative;
  }

  /* ── HEADER ── */
  .header {
    background: #2B5797;
    height: 178px;
    padding: 30px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  /* Decorative circles */
  .header::before {
    content: '';
    position: absolute;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background: #E05A3A;
    opacity: 0.75;
    top: -60px;
    left: -40px;
  }
  .header::after {
    content: '';
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #F0C75E;
    opacity: 0.85;
    bottom: -35px;
    right: 60px;
  }
  .circle-extra-1 {
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #E05A3A;
    opacity: 1.0;
    top: 20px;
    left: 90px;
  }
  .circle-extra-2 {
    position: absolute;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: #F0C75E;
    opacity: 0.7;
    bottom: 10px;
    left: 30px;
  }
  .circle-extra-3 {
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #E05A3A;
    opacity: 0.5;
    top: -20px;
    right: 150px;
  }
  .circle-extra-4 {
    position: absolute;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: #F0C75E;
    opacity: 0.4;
    bottom: -55px;
    right: -30px;
  }

  .badge {
    position: absolute;
    top: 14px;
    right: 20px;
    font-size: 9px;
    color: #9BB8D7;
    font-family: Arial, sans-serif;
    font-weight: 600;
    letter-spacing: 0.3px;
    z-index: 10;
  }

  .header-title {
    font-family: 'Arial Rounded MT Bold', 'Helvetica Rounded', Arial, sans-serif;
    font-size: 38px;
    font-weight: 900;
    color: white;
    letter-spacing: -0.5px;
    margin: 0;
    text-align: center;
    position: relative;
    z-index: 10;
    text-shadow: 0 2px 8px rgba(0,0,0,0.2);
  }

  .header-tagline {
    font-size: 14px;
    color: #F0C75E;
    margin-top: 8px;
    text-align: center;
    font-weight: 600;
    position: relative;
    z-index: 10;
    letter-spacing: 0.2px;
  }

  .header-location {
    font-size: 10px;
    color: rgba(255,255,255,0.85);
    margin-top: 6px;
    text-align: center;
    letter-spacing: 0.5px;
    position: relative;
    z-index: 10;
  }

  /* ── CLOUD WHITE STRIP ── */
  .strip {
    background: #EDF2F7;
    padding: 16px 40px 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .blurb {
    font-size: 10.5px;
    color: #1E2D3D;
    text-align: center;
    max-width: 580px;
    line-height: 1.6;
  }

  .pills-row {
    display: flex;
    gap: 10px;
    margin-top: 12px;
  }

  .pill {
    border: 1.5px solid #2B5797;
    border-radius: 20px;
    padding: 5px 16px;
    font-size: 9px;
    font-weight: 700;
    color: #2B5797;
    background: white;
    font-family: Arial, sans-serif;
    letter-spacing: 0.3px;
  }

  /* ── 7 WEEKS SECTION ── */
  .weeks-section {
    padding: 18px 40px 16px;
    background: white;
  }

  .section-heading {
    font-family: 'Arial Rounded MT Bold', 'Helvetica Rounded', Arial, sans-serif;
    font-size: 16px;
    font-weight: 900;
    color: #2B5797;
    margin-bottom: 3px;
  }

  .section-subtitle {
    font-size: 9.5px;
    color: #6B7D8F;
    margin-bottom: 14px;
  }

  .weeks-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  .week-card {
    background: #F8FAFC;
    border-radius: 8px;
    padding: 10px 12px;
    border-left: 3px solid #E05A3A;
  }

  .week-label {
    font-size: 8px;
    font-weight: 700;
    color: #E05A3A;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-family: Arial, sans-serif;
  }

  .week-name {
    font-size: 10.5px;
    font-weight: 700;
    color: #2B5797;
    margin: 2px 0;
    font-family: 'Arial Rounded MT Bold', 'Helvetica Rounded', Arial, sans-serif;
    line-height: 1.2;
  }

  .week-desc {
    font-size: 8.5px;
    color: #6B7D8F;
    line-height: 1.4;
  }

  /* ── TWO COLUMN SECTION ── */
  .two-col {
    display: flex;
    height: 268px;
  }

  /* LEFT: Schedule */
  .schedule-col {
    background: #9BB8D7;
    padding: 20px 22px;
    flex: 1;
  }

  .schedule-heading {
    font-size: 12px;
    font-weight: 700;
    color: #2B5797;
    font-family: 'Arial Rounded MT Bold', 'Helvetica Rounded', Arial, sans-serif;
  }

  .schedule-subheading {
    font-size: 8.5px;
    color: white;
    margin-bottom: 10px;
    margin-top: 2px;
  }

  .time-pills-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
    margin-bottom: 14px;
  }

  .time-pill {
    background: white;
    border-radius: 6px;
    padding: 5px 4px;
    text-align: center;
    border: 0.5px solid rgba(43,87,151,0.3);
  }

  .time-pill .tp-time {
    font-size: 8px;
    font-weight: 700;
    color: #2B5797;
    display: block;
    font-family: Arial, sans-serif;
  }

  .time-pill .tp-label {
    font-size: 7px;
    color: #6B7D8F;
    display: block;
    line-height: 1.3;
  }

  .included-heading {
    font-size: 10px;
    font-weight: 700;
    color: #2B5797;
    margin-top: 4px;
    margin-bottom: 6px;
    font-family: 'Arial Rounded MT Bold', 'Helvetica Rounded', Arial, sans-serif;
  }

  .included-list {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 12px;
  }

  .included-list li {
    font-size: 8.5px;
    color: #1E2D3D;
    padding: 1.5px 0;
    display: flex;
    align-items: center;
  }

  .included-list li .check {
    color: #E05A3A;
    font-weight: 700;
    margin-right: 6px;
    flex-shrink: 0;
    font-size: 9px;
  }

  /* RIGHT: Pricing */
  .pricing-col {
    background: #2B5797;
    padding: 22px 24px;
    width: 260px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .early-bird-tag {
    background: rgba(240,199,94,0.2);
    border: 1px solid #F0C75E;
    border-radius: 20px;
    padding: 3px 12px;
    font-size: 8px;
    color: #F0C75E;
    font-weight: 700;
    margin-bottom: 12px;
    font-family: Arial, sans-serif;
    letter-spacing: 0.3px;
  }

  .price-main {
    font-size: 38px;
    font-weight: 900;
    color: white;
    line-height: 1;
    font-family: 'Arial Rounded MT Bold', 'Helvetica Rounded', Arial, sans-serif;
  }

  .price-strike {
    font-size: 13px;
    color: rgba(255,255,255,0.4);
    text-decoration: line-through;
    margin-top: 4px;
  }

  .price-label {
    font-size: 9.5px;
    color: rgba(255,255,255,0.8);
    margin-top: 8px;
    text-align: center;
  }

  .price-weekly {
    font-size: 9.5px;
    color: #F0C75E;
    font-weight: 600;
    margin-top: 2px;
  }

  .price-divider {
    height: 1px;
    background: rgba(255,255,255,0.2);
    width: 80%;
    margin: 12px auto;
  }

  .price-fine {
    font-size: 8.5px;
    color: rgba(255,255,255,0.7);
    text-align: center;
    line-height: 1.5;
  }

  /* ── FOOTER ── */
  .footer {
    background: #E05A3A;
    padding: 18px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .footer-heading {
    font-family: 'Arial Rounded MT Bold', 'Helvetica Rounded', Arial, sans-serif;
    font-size: 20px;
    font-weight: 900;
    color: white;
    margin-bottom: 4px;
    text-align: center;
  }

  .footer-url {
    font-size: 12px;
    font-weight: 700;
    color: white;
    margin-bottom: 3px;
    text-align: center;
    font-family: Arial, sans-serif;
  }

  .footer-whatsapp {
    font-size: 10px;
    color: rgba(255,255,255,0.9);
    margin-bottom: 6px;
    text-align: center;
  }

  .footer-small {
    font-size: 8px;
    color: rgba(255,255,255,0.65);
    letter-spacing: 0.3px;
    text-align: center;
  }
</style>
</head>
<body>

  <!-- HEADER -->
  <header class="header">
    <div class="circle-extra-1"></div>
    <div class="circle-extra-2"></div>
    <div class="circle-extra-3"></div>
    <div class="circle-extra-4"></div>
    <div class="badge">Bangalore &nbsp;&middot;&nbsp; 15 Apr &ndash; 30 May 2026</div>
    <h1 class="header-title">The Summer Club</h1>
    <p class="header-tagline">A 7-week maker studio for kids aged 5&ndash;8</p>
    <p class="header-location">Vajram Esteva &nbsp;&middot;&nbsp; Mon&ndash;Fri &nbsp;&middot;&nbsp; 9:00 AM &ndash; 12:30 PM</p>
  </header>

  <!-- CLOUD WHITE STRIP -->
  <div class="strip">
    <p class="blurb">Each week, kids work on a completely different skill and figure it out themselves. No worksheets. They make real things, and every Friday they show what they made.</p>
    <div class="pills-row">
      <span class="pill">Ages 5&ndash;8</span>
      <span class="pill">7 Weeks &middot; Mon&ndash;Fri</span>
      <span class="pill">9 AM &ndash; 12:30 PM</span>
    </div>
  </div>

  <!-- 7 WEEKS SECTION -->
  <section class="weeks-section">
    <h2 class="section-heading">7 Weeks. 7 Things They&rsquo;ll Make.</h2>
    <p class="section-subtitle">A different theme every week. A real outcome every Friday.</p>
    <div class="weeks-grid">

      <div class="week-card">
        <span class="week-label">Week 1</span>
        <div class="week-name">Stop-Motion Film Studio</div>
        <div class="week-desc">Write a story, build sets, shoot a film frame by frame.</div>
      </div>

      <div class="week-card">
        <span class="week-label">Week 2</span>
        <div class="week-name">Science Lab</div>
        <div class="week-desc">Paper planes, rockets, parachutes &mdash; built to understand flight.</div>
      </div>

      <div class="week-card">
        <span class="week-label">Week 3</span>
        <div class="week-name">The Invention Kitchen</div>
        <div class="week-desc">Write menus, measure ingredients, cook real food.</div>
      </div>

      <div class="week-card">
        <span class="week-label">Week 4</span>
        <div class="week-name">Design Your Game</div>
        <div class="week-desc">Design rules, board, and pieces. Build a playable game.</div>
      </div>

      <div class="week-card">
        <span class="week-label">Week 5</span>
        <div class="week-name">Build Break Fix</div>
        <div class="week-desc">Build a cardboard robot, write its manual, demo on Friday.</div>
      </div>

      <div class="week-card">
        <span class="week-label">Week 6</span>
        <div class="week-name">The Market</div>
        <div class="week-desc">Make a product, price it, run a pop-up market stall.</div>
      </div>

      <div style="grid-column: 2 / 3;">
        <div class="week-card">
          <span class="week-label">Week 7</span>
          <div class="week-name">The Big Show</div>
          <div class="week-desc">Write, direct, and perform a short play for parents.</div>
        </div>
      </div>

    </div>
  </section>

  <!-- TWO COLUMN SECTION -->
  <div class="two-col">

    <!-- LEFT: Schedule + Included -->
    <div class="schedule-col">
      <div class="schedule-heading">A typical morning</div>
      <div class="schedule-subheading">What the day looks like</div>

      <div class="time-pills-grid">
        <div class="time-pill">
          <span class="tp-time">9:00</span>
          <span class="tp-label">Welcome</span>
        </div>
        <div class="time-pill">
          <span class="tp-time">9:15</span>
          <span class="tp-label">Make</span>
        </div>
        <div class="time-pill">
          <span class="tp-time">10:30</span>
          <span class="tp-label">Snack</span>
        </div>
        <div class="time-pill">
          <span class="tp-time">10:45</span>
          <span class="tp-label">Move</span>
        </div>
        <div class="time-pill">
          <span class="tp-time">11:00</span>
          <span class="tp-label">Express</span>
        </div>
        <div class="time-pill">
          <span class="tp-time">12:15</span>
          <span class="tp-label">Wind-down</span>
        </div>
      </div>

      <div class="included-heading">What&rsquo;s included</div>
      <ul class="included-list">
        <li><span class="check">&#10003;</span>All 7 weeks of the programme</li>
        <li><span class="check">&#10003;</span>Every material and supply</li>
        <li><span class="check">&#10003;</span>Daily snacks</li>
        <li><span class="check">&#10003;</span>Take-home projects each week</li>
        <li><span class="check">&#10003;</span>Friday showcase for parents</li>
        <li><span class="check">&#10003;</span>1:8 adult ratio &middot; Gated campus</li>
        <li><span class="check">&#10003;</span>First-aid on site</li>
        <li><span class="check">&#10003;</span>Certificate of completion</li>
      </ul>
    </div>

    <!-- RIGHT: Pricing -->
    <div class="pricing-col">
      <div class="early-bird-tag">EARLY BIRD &mdash; First 25 Families</div>
      <div class="price-main">Rs.28,000</div>
      <div class="price-strike">Rs.35,000</div>
      <div class="price-label">Full 7-week programme</div>
      <div class="price-weekly">Rs.4,000 / week</div>
      <div class="price-divider"></div>
      <div class="price-fine">All materials, snacks &amp; take-homes included.<br>No add-ons. No hidden costs.</div>
    </div>

  </div>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="footer-heading">Ready to register?</div>
    <div class="footer-url">summerclub.in/register</div>
    <div class="footer-whatsapp">WhatsApp: +91 76786 76150</div>
    <div class="footer-small">The Summer Club &nbsp;&middot;&nbsp; Vajram Esteva &nbsp;&middot;&nbsp; Bangalore &nbsp;&middot;&nbsp; 15 Apr &ndash; 30 May 2026</div>
  </footer>

</body>
</html>"""


# ─────────────────────────────────────────────────────────────────────────────
# PDF GENERATION
# ─────────────────────────────────────────────────────────────────────────────

def generate_pdf(html_content: str, output_path: str) -> None:
    """Convert HTML string to PDF using Playwright (Chromium)."""
    try:
        from playwright.sync_api import sync_playwright
    except ImportError:
        print("Playwright not found. Installing...")
        os.system(f"{sys.executable} -m pip install playwright")
        os.system(f"{sys.executable} -m playwright install chromium")
        from playwright.sync_api import sync_playwright

    # Write HTML to a temp file so Playwright can load it as file://
    with tempfile.NamedTemporaryFile(
        mode="w", suffix=".html", delete=False, encoding="utf-8"
    ) as f:
        f.write(html_content)
        tmp_html = f.name

    try:
        with sync_playwright() as p:
            browser = p.chromium.launch()
            page = browser.new_page()
            page.goto(f"file://{tmp_html}")
            page.pdf(
                path=output_path,
                format="A4",
                print_background=True,
            )
            browser.close()
    finally:
        os.unlink(tmp_html)

    size_kb = os.path.getsize(output_path) // 1024
    print(f"PDF saved to: {output_path}  ({size_kb} KB)")


def main() -> None:
    os.makedirs(os.path.dirname(OUTPUT), exist_ok=True)
    generate_pdf(HTML, OUTPUT)


if __name__ == "__main__":
    main()
