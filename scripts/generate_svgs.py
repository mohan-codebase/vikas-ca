import os

svgs = {
    "svg-accounting.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450">
    <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#002e5b" />
            <stop offset="100%" stop-color="#0056b3" />
        </linearGradient>
        <linearGradient id="bar" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0099db" />
            <stop offset="100%" stop-color="#00a99d" />
        </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#bg)" />
    <!-- Grid -->
    <path d="M50 350 L750 350" stroke="rgba(255,255,255,0.2)" stroke-width="2" />
    <path d="M50 250 L750 250" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
    <path d="M50 150 L750 150" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
    <!-- Bars -->
    <rect x="100" y="200" width="80" height="150" rx="10" fill="url(#bar)" opacity="0.8" />
    <rect x="250" y="120" width="80" height="230" rx="10" fill="url(#bar)" opacity="0.85" />
    <rect x="400" y="250" width="80" height="100" rx="10" fill="url(#bar)" opacity="0.7" />
    <rect x="550" y="80" width="80" height="270" rx="10" fill="#c89d5c" />
    <!-- Line graph -->
    <path d="M140 200 L290 120 L440 250 L590 80" fill="none" stroke="#ffffff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
    <circle cx="140" cy="200" r="8" fill="#ffffff" />
    <circle cx="290" cy="120" r="8" fill="#ffffff" />
    <circle cx="440" cy="250" r="8" fill="#ffffff" />
    <circle cx="590" cy="80" r="8" fill="#ffffff" />
</svg>""",
    "svg-security.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450">
    <defs>
        <radialGradient id="bg2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#0b1524" />
            <stop offset="100%" stop-color="#001a33" />
        </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#bg2)" />
    <!-- Binary Matrix BG -->
    <text x="50" y="50" fill="rgba(0,169,157,0.2)" font-family="monospace" font-size="20">010010 110100 001101 101010 010101 110011</text>
    <text x="50" y="150" fill="rgba(0,169,157,0.2)" font-family="monospace" font-size="20">110110 001011 110010 011001 101010 001100</text>
    <text x="50" y="250" fill="rgba(0,169,157,0.2)" font-family="monospace" font-size="20">001101 101010 010101 110011 010010 110100</text>
    <text x="50" y="350" fill="rgba(0,169,157,0.2)" font-family="monospace" font-size="20">011001 101010 001100 110110 001011 110010</text>
    <!-- Shield -->
    <path d="M400 60 L550 120 L550 250 C550 350 450 400 400 420 C350 400 250 350 250 250 L250 120 Z" fill="none" stroke="#0099db" stroke-width="12" />
    <path d="M400 80 L530 135 L530 250 C530 335 440 380 400 395 C360 380 270 335 270 250 L270 135 Z" fill="rgba(0,153,219,0.2)" />
    <!-- Checkmark -->
    <path d="M330 240 L380 290 L480 170" fill="none" stroke="#00a99d" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" />
</svg>""",
    "svg-mortgage.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450">
    <defs>
        <linearGradient id="bg3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f8fafc" />
            <stop offset="100%" stop-color="#e2e8f0" />
        </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#bg3)" />
    <circle cx="400" cy="225" r="180" fill="#ffffff" opacity="0.5" />
    <!-- House -->
    <path d="M300 250 L300 330 L500 330 L500 250" fill="none" stroke="#002e5b" stroke-width="12" stroke-linejoin="round" />
    <path d="M250 250 L400 120 L550 250" fill="none" stroke="#002e5b" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" />
    <rect x="370" y="260" width="60" height="70" fill="#0099db" />
    <!-- Growth arrow -->
    <path d="M200 300 L280 180 L350 220 L500 80" fill="none" stroke="#c89d5c" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M440 80 L500 80 L500 140" fill="none" stroke="#c89d5c" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" />
</svg>""",
    "svg-global.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450">
    <rect width="100%" height="100%" fill="#002e5b" />
    <!-- Network nodes -->
    <circle cx="400" cy="225" r="150" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="2" />
    <circle cx="400" cy="225" r="100" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="2" />
    <circle cx="400" cy="225" r="50" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="2" />
    
    <path d="M200 150 L400 225 L600 100" fill="none" stroke="#0099db" stroke-width="4" />
    <path d="M400 225 L550 350" fill="none" stroke="#0099db" stroke-width="4" />
    <path d="M400 225 L250 350" fill="none" stroke="#0099db" stroke-width="4" />
    
    <circle cx="200" cy="150" r="15" fill="#c89d5c" />
    <circle cx="600" cy="100" r="15" fill="#00a99d" />
    <circle cx="550" cy="350" r="15" fill="#ffffff" />
    <circle cx="250" cy="350" r="15" fill="#00a99d" />
    <circle cx="400" cy="225" r="20" fill="#ffffff" />
    
    <text x="180" y="130" fill="#ffffff" font-family="sans-serif" font-weight="bold" font-size="18">USA</text>
    <text x="620" y="90" fill="#ffffff" font-family="sans-serif" font-weight="bold" font-size="18">UK</text>
    <text x="570" y="370" fill="#ffffff" font-family="sans-serif" font-weight="bold" font-size="18">AUS</text>
    <text x="420" y="210" fill="#ffffff" font-family="sans-serif" font-weight="bold" font-size="18">IND</text>
</svg>"""
}

os.makedirs("public/images", exist_ok=True)
for filename, content in svgs.items():
    with open(f"public/images/{filename}", "w") as f:
        f.write(content)

print("Generated SVGs.")
