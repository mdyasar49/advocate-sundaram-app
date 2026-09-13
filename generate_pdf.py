import os
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, HRFlowable, KeepTogether
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

# 1. Register Mukta Malar Tamil Fonts
pdfmetrics.registerFont(TTFont('MuktaMalar', 'MuktaMalar-Regular.ttf'))
pdfmetrics.registerFont(TTFont('MuktaMalar-Bold', 'MuktaMalar-Bold.ttf'))

pdf_filename = "Advocate_Sundaram_Website_Technical_Guide.pdf"

doc = SimpleDocTemplate(
    pdf_filename,
    pagesize=A4,
    rightMargin=36,
    leftMargin=36,
    topMargin=36,
    bottomMargin=36
)

styles = getSampleStyleSheet()

# Custom Paragraph Styles
style_title = ParagraphStyle(
    'DocTitle',
    parent=styles['Heading1'],
    fontName='MuktaMalar-Bold',
    fontSize=20,
    leading=24,
    textColor=colors.HexColor('#d4af37'),
    alignment=1, # Center
    spaceAfter=6
)

style_subtitle = ParagraphStyle(
    'DocSubTitle',
    parent=styles['Normal'],
    fontName='MuktaMalar',
    fontSize=11,
    leading=15,
    textColor=colors.HexColor('#94a3b8'),
    alignment=1, # Center
    spaceAfter=15
)

style_section_heading = ParagraphStyle(
    'SectionHeading',
    parent=styles['Heading2'],
    fontName='MuktaMalar-Bold',
    fontSize=13,
    leading=17,
    textColor=colors.HexColor('#080d1a'),
    spaceBefore=12,
    spaceAfter=8
)

style_body = ParagraphStyle(
    'BodyTextCustom',
    parent=styles['Normal'],
    fontName='MuktaMalar',
    fontSize=9.5,
    leading=14,
    textColor=colors.HexColor('#1e293b')
)

style_body_bold = ParagraphStyle(
    'BodyTextBold',
    parent=styles['Normal'],
    fontName='MuktaMalar-Bold',
    fontSize=9.5,
    leading=14,
    textColor=colors.HexColor('#0f172a')
)

style_analogy_header = ParagraphStyle(
    'AnalogyHeader',
    parent=styles['Normal'],
    fontName='MuktaMalar-Bold',
    fontSize=10.5,
    leading=15,
    textColor=colors.HexColor('#0f172a')
)

style_analogy_text = ParagraphStyle(
    'AnalogyText',
    parent=styles['Normal'],
    fontName='MuktaMalar',
    fontSize=9,
    leading=13.5,
    textColor=colors.HexColor('#334155')
)

elements = []

# Header Banner Table
header_data = [
    [
        Paragraph("<b>ADVOCATE SUNDARAM OFFICIAL WEBSITE</b>", ParagraphStyle('H1', fontName='MuktaMalar-Bold', fontSize=18, textColor=colors.HexColor('#d4af37'), alignment=1)),
    ],
    [
        Paragraph("எளிய தொழில்நுட்ப வழிகாட்டி & கட்டமைப்பு அறிக்கை (Technical Explanation Guide)", ParagraphStyle('H2', fontName='MuktaMalar', fontSize=10.5, textColor=colors.white, alignment=1))
    ]
]
header_table = Table(header_data, colWidths=[520])
header_table.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor('#080d1a')),
    ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('TOPPADDING', (0, 0), (-1, 0), 14),
    ('BOTTOMPADDING', (0, 1), (-1, 1), 14),
    ('BOX', (0, 0), (-1, -1), 1.5, colors.HexColor('#d4af37')),
]))

elements.append(header_table)
elements.append(Spacer(1, 12))

# Dev Site Link Card
link_card_data = [
    [
        Paragraph("<b>🌐 மாதிரி இணையதள நேரலை இணைப்பு (Live Dev Preview URL):</b>", style_body_bold),
        Paragraph("<font color='#2563eb'><u>https://advocate-sundaram.pages.dev</u></font>", style_body_bold)
    ]
]
link_table = Table(link_card_data, colWidths=[240, 280])
link_table.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor('#f0f9ff')),
    ('BOX', (0, 0), (-1, -1), 1, colors.HexColor('#bae6fd')),
    ('PADDING', (0, 0), (-1, -1), 8),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
]))
elements.append(link_table)
elements.append(Spacer(1, 12))

# Section 1: Real-World Legal Analogies
elements.append(Paragraph("<b>1. இணையதள தொழில்நுட்பச் சொற்கள் - எளிய சட்டத்துறை உதாரணங்கள்</b>", style_section_heading))
elements.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#cbd5e1'), spaceBefore=2, spaceAfter=8))

analogies = [
    ("1. Domain Name (டொமைன் பெயர் - எ.கா: advocatesundaram.in)",
     "🏢 <b>அலுவலக முகவரிப் பலகை (Office Door Name Board):</b> நீதிமன்றத்திற்கு வரும் மக்கள் உங்கள் வழக்கறிஞர் அலுவலகத்தைக் கண்டறிய முகவரிப் பலகை எவ்வளவு முக்கியமோ, அதேபோல் இணையத்தில் மக்கள் உங்கள் வெப்சைட்டைக் கண்டறிய பயன்படும் பிரத்யேக முகவரி."),
    
    ("2. Web Hosting Server (ஹோஸ்டிங் சர்வர் - Cloudflare)",
     "🏛️ <b>அலுவலகக் கட்டிடம் அல்லது நிலம் (Office Property):</b> உங்கள் வழக்குக் கோப்புகள், மேஜை, நாற்காலி அனைத்தும் பாதுகாப்பாக இருக்கும் கட்டிடம் போன்றது. நாம் Cloudflare சர்வதேச அதிவேக சர்வரைப் பயன்படுத்துவதால் <b>மாதாந்திர வாடகை கட்டணம் எதுவும் கிடையாது (₹0 Free)</b>."),
    
    ("3. SSL Security Certificate (பாதுகாப்புச் சான்றிதழ் - HTTPS 🔒)",
     "🔐 <b>வாடிக்கையாளர் ரகசியத்தன்மை பூட்டு (Confidentiality Shield):</b> வழக்கறிஞரிடம் வாடிக்கையாளர்கள் பகிரும் தகவல்கள் எப்படி ரகசியமாகப் பாதுகாக்கப்படுமோ, அதேபோல் வெப்சைட்டைப் பார்வையிடுபவர்களின் தகவல்களைப் பாதுகாக்கும் 🔒 பூட்டு பாதுகாப்பு."),
    
    ("4. SEO - Search Engine Optimization (தேடுபொறி அமைப்புகள்)",
     "📋 <b>நீதிமன்றத் தகவல் பலகையில் (Court Directory) உங்கள் பெயர் முதன்மையாகத் தோன்றுவது:</b> 'திருச்சி வழக்கறிஞர்' என மக்கள் கூகுளில் தேடும் போது, உங்கள் பெயர் மற்றும் போன் எண் முதல் பக்கத்தில் தெரிய உதவும் சட்டத் ஆராய்ச்சி அமைப்பு."),
    
    ("5. Bandwidth & Ultra-Fast Speed (பட்டை அகலம் & வேகம்)",
     "🚪 <b>அலுவலகத்தின் அகலமான நுழைவு வாயில் (Office Entrance Capacity):</b> ஒரே நேரத்தில் 500 வாடிக்கையாளர்கள் உங்கள் அலுவலகத்திற்குள் வந்தாலும், கூட்டம் நெரியாமல் அனைவரும் தடையின்றி வந்து செல்லும் அகலமான பாதை போன்றது."),
    
    ("6. Mobile Responsive Design (மொபைல் வடிவமைப்பு)",
     "📄 <b>அனைத்து வடிவிலான காகிதங்களிலும் படிக்க வசதியான சட்ட மனு:</b> லீகல் தாள் அல்லது சிறிய நோட்டீஸாக இருந்தாலும் எழுத்துக்கள் மாறாமல் இருப்பது போல, கணினி அல்லது மொபைல் போனில் பார்த்தாலும் படம் மற்றும் எழுத்துக்கள் அழகாகத் தெரியும்."),
    
    ("7. Dev Preview Site (மாதிரி இணையதளம்)",
     "✍️ <b>நீதிமன்றத்தில் தாக்கல் செய்வதற்கு முன் காட்டும் 'வழக்கு வரைவு நகல்' (Case Draft Copy):</b> மனுவைத் தாக்கல் செய்யும் முன் மனுதாரரிடம் காட்டி திருத்தங்கள் கேட்பது போல, டொமைன் வாங்குவதற்கு முன் இணையதளத்தைச் சரிபார்க்க வழங்கப்பட்டுள்ள மாதிரி நகல்.")
]

for title, desc in analogies:
    box_data = [
        [Paragraph(f"<b>{title}</b>", style_analogy_header)],
        [Paragraph(desc, style_analogy_text)]
    ]
    box_table = Table(box_data, colWidths=[520])
    box_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor('#f8fafc')),
        ('BOX', (0, 0), (-1, -1), 0.8, colors.HexColor('#e2e8f0')),
        ('LINEBELOW', (0, 0), (-1, 0), 0.5, colors.HexColor('#cbd5e1')),
        ('TOPPADDING', (0, 0), (-1, -1), 5),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 5),
        ('LEFTPADDING', (0, 0), (-1, -1), 8),
        ('RIGHTPADDING', (0, 0), (-1, -1), 8),
    ]))
    elements.append(box_table)
    elements.append(Spacer(1, 6))

elements.append(Spacer(1, 6))

# Section 2: Cost Breakdown Table
elements.append(Paragraph("<b>2. சர்வர், பாதுகாப்பு & டொமைன் செலவு விவரங்கள் (Hosting & Domain Cost Breakdown)</b>", style_section_heading))
elements.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#cbd5e1'), spaceBefore=2, spaceAfter=8))

table_header = [Paragraph("<b>சேவை (Service)</b>", style_body_bold), Paragraph("<b>சேவை நிறுவனம் (Provider)</b>", style_body_bold), Paragraph("<b>ஆண்டு கட்டணம் (Cost)</b>", style_body_bold), Paragraph("<b>விளக்கம் (Details)</b>", style_body_bold)]

table_rows = [
    table_header,
    [Paragraph("<b>Global Cloud Hosting</b>", style_body), Paragraph("Cloudflare Pages", style_body), Paragraph("<font color='#16a34a'><b>₹0 (இலவசம்)</b></font>", style_body), Paragraph("வரம்பற்ற பார்வையாளர்கள் & மாதாந்திர வாடகை இல்லை", style_body)],
    [Paragraph("<b>SSL Security (HTTPS 🔒)</b>", style_body), Paragraph("Cloudflare", style_body), Paragraph("<font color='#16a34a'><b>₹0 (இலவசம்)</b></font>", style_body), Paragraph("256-bit பாதுகாப்பு பூட்டு தானாகவே புதுப்பிக்கப்படும்", style_body)],
    [Paragraph("<b>Technical On-Page SEO</b>", style_body), Paragraph("Internal Code", style_body), Paragraph("<font color='#16a34a'><b>சேர்க்கப்பட்டுள்ளது</b></font>", style_body), Paragraph("கூகுள் தேடலில் வழக்கறிஞர் பெயர் தோன்றும் அமைப்பு", style_body)],
    [Paragraph("<b>Domain Name (.in / .com)</b>", style_body), Paragraph("Official Registrar", style_body), Paragraph("<b>~ ₹500 - ₹800 / ஆண்டு</b>", style_body), Paragraph("வருடத்திற்கு ஒருமுறை மட்டும் புதுப்பித்தல் கட்டணம்", style_body)],
]

cost_table = Table(table_rows, colWidths=[120, 100, 110, 190])
cost_table.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#080d1a')),
    ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
    ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#cbd5e1')),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('PADDING', (0, 0), (-1, -1), 6),
    ('BACKGROUND', (0, 1), (-1, 1), colors.white),
    ('BACKGROUND', (0, 2), (-1, 2), colors.HexColor('#f8fafc')),
    ('BACKGROUND', (0, 3), (-1, 3), colors.white),
    ('BACKGROUND', (0, 4), (-1, 4), colors.HexColor('#f8fafc')),
]))

# Override header text colors inside table_header Paragraphs
for i in range(4):
    table_rows[0][i].style.textColor = colors.HexColor('#d4af37')

elements.append(cost_table)
elements.append(Spacer(1, 10))

# Summary Box
summary_data = [
    [
        Paragraph("<b>💡 சுருக்கம்: மாதாந்திர வாடகை அல்லது மறைமுகக் கட்டணம் எதுவும் கிடையாது. டொமைன் புதுப்பித்தல் மட்டுமே வருடத்திற்கு ஒருமுறை (~ ₹500 - ₹800) ஆகும்.</b>", style_body_bold)
    ]
]
summary_table = Table(summary_data, colWidths=[520])
summary_table.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor('#fef3c7')),
    ('BOX', (0, 0), (-1, -1), 1, colors.HexColor('#f59e0b')),
    ('PADDING', (0, 0), (-1, -1), 8),
]))
elements.append(summary_table)

# Build PDF
doc.build(elements)
print("PDF created successfully:", pdf_filename)
