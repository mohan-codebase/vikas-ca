# 1. svg-case-study-scaling.svg
case_study_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
    <defs>
        <linearGradient id="csBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#071529" />
            <stop offset="50%" stop-color="#0f2b48" />
            <stop offset="100%" stop-color="#003d73" />
        </linearGradient>
        <linearGradient id="glowGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#0099db" stop-opacity="0.1" />
            <stop offset="100%" stop-color="#0099db" stop-opacity="0.6" />
        </linearGradient>
        <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#c89d5c" />
            <stop offset="100%" stop-color="#e6ca94" />
        </linearGradient>
    </defs>
    
    <!-- Background -->
    <rect width="100%" height="100%" fill="url(#csBg)" />

    <!-- Grid pattern -->
    <g opacity="0.15">
        <path d="M 0 100 L 800 100 M 0 200 L 800 200 M 0 300 L 800 300 M 0 400 L 800 400 M 0 500 L 800 500" stroke="#ffffff" stroke-width="1" stroke-dasharray="4 4" />
        <path d="M 160 0 L 160 600 M 320 0 L 320 600 M 480 0 L 480 600 M 640 0 L 640 600" stroke="#ffffff" stroke-width="1" stroke-dasharray="4 4" />
    </g>

    <!-- Central Dashboard Card UI -->
    <g transform="translate(100, 100)">
        <!-- Card Backdrop -->
        <rect width="600" height="380" rx="16" fill="#0b1b2d" stroke="#1e3a5f" stroke-width="2" opacity="0.9" />
        
        <!-- Window header dots -->
        <circle cx="30" cy="28" r="6" fill="#ef4444" opacity="0.8" />
        <circle cx="50" cy="28" r="6" fill="#eab308" opacity="0.8" />
        <circle cx="70" cy="28" r="6" fill="#22c55e" opacity="0.8" />
        <text x="100" y="33" fill="#94a3b8" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="600">CAPACITY &amp; PRODUCTIVITY BENCHMARK</text>

        <!-- Metric Cards row -->
        <g transform="translate(30, 60)">
            <!-- Metric 1 -->
            <rect width="160" height="75" rx="8" fill="#13273e" stroke="#23456b" stroke-width="1" />
            <text x="16" y="28" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" font-weight="600">COST REDUCTION</text>
            <text x="16" y="58" fill="#c89d5c" font-family="monospace" font-size="24" font-weight="bold">-70%</text>

            <!-- Metric 2 -->
            <rect x="185" y="0" width="160" height="75" rx="8" fill="#13273e" stroke="#23456b" stroke-width="1" />
            <text x="201" y="28" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" font-weight="600">TURNAROUND SPEED</text>
            <text x="201" y="58" fill="#00d2ff" font-family="monospace" font-size="24" font-weight="bold">+45%</text>

            <!-- Metric 3 -->
            <rect x="370" y="0" width="170" height="75" rx="8" fill="#13273e" stroke="#23456b" stroke-width="1" />
            <text x="386" y="28" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" font-weight="600">CLIENT COMPLIANCE</text>
            <text x="386" y="58" fill="#22c55e" font-family="monospace" font-size="24" font-weight="bold">100%</text>
        </g>

        <!-- Dynamic Growth Curve Chart -->
        <g transform="translate(30, 160)">
            <rect width="540" height="190" rx="8" fill="#0e2034" />
            
            <!-- Axis lines -->
            <line x1="40" y1="150" x2="500" y2="150" stroke="#23456b" stroke-width="1" />
            <line x1="40" y1="30" x2="40" y2="150" stroke="#23456b" stroke-width="1" />
            
            <!-- Area under curve -->
            <path d="M 40 130 Q 150 120, 260 85 T 500 25 L 500 150 L 40 150 Z" fill="url(#glowGrad)" />
            
            <!-- Growth Line -->
            <path d="M 40 130 Q 150 120, 260 85 T 500 25" fill="none" stroke="#00d2ff" stroke-width="4" stroke-linecap="round" />
            
            <!-- Baseline constraint line -->
            <path d="M 40 110 L 500 110" fill="none" stroke="#e11d48" stroke-width="2" stroke-dasharray="6 6" opacity="0.6" />
            <text x="380" y="104" fill="#fb7185" font-family="system-ui, sans-serif" font-size="10" font-weight="600">Previous Capacity Ceiling</text>

            <!-- Data Points -->
            <circle cx="40" cy="130" r="5" fill="#00d2ff" stroke="#ffffff" stroke-width="2" />
            <circle cx="260" cy="85" r="5" fill="#00d2ff" stroke="#ffffff" stroke-width="2" />
            <circle cx="500" cy="25" r="7" fill="#c89d5c" stroke="#ffffff" stroke-width="2" />

            <text x="350" y="45" fill="#e6ca94" font-family="system-ui, sans-serif" font-size="12" font-weight="bold">Uncapped Scaled Growth ✦</text>
        </g>
    </g>
</svg>"""

with open("public/images/svg-case-study-scaling.svg", "w") as f:
    f.write(case_study_svg)

# 2. svg-webinar.svg
webinar_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450">
    <defs>
        <linearGradient id="webBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0a192f" />
            <stop offset="100%" stop-color="#003566" />
        </linearGradient>
        <linearGradient id="goldPill" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#c89d5c" />
            <stop offset="100%" stop-color="#e6ca94" />
        </linearGradient>
    </defs>
    
    <rect width="100%" height="100%" fill="url(#webBg)" />

    <!-- Soundwave visuals & Screen frame -->
    <g transform="translate(100, 60)">
        <rect width="600" height="330" rx="12" fill="#0d213a" stroke="#1f426d" stroke-width="2" />
        
        <!-- Screen title -->
        <rect x="25" y="25" width="110" height="28" rx="6" fill="url(#goldPill)" />
        <text x="40" y="44" fill="#071529" font-family="system-ui, sans-serif" font-size="12" font-weight="bold">WEBINAR</text>
        <text x="150" y="44" fill="#93c5fd" font-family="system-ui, sans-serif" font-size="14" font-weight="600">EPISODE 01 · SCALING THROUGH OFFSHORING</text>

        <!-- Studio Speaker Avatars / Video Screens -->
        <g transform="translate(40, 80)">
            <!-- Speaker 1 Box -->
            <rect width="240" height="150" rx="8" fill="#132c4a" stroke="#255182" stroke-width="1.5" />
            <circle cx="120" cy="65" r="35" fill="#0056b3" />
            <circle cx="120" cy="55" r="15" fill="#ffffff" opacity="0.9" />
            <path d="M 95 88 C 95 75, 145 75, 145 88 Z" fill="#ffffff" opacity="0.9" />
            <rect x="20" y="115" width="200" height="22" rx="4" fill="#0a192f" />
            <text x="120" y="130" fill="#e2e8f0" font-family="system-ui, sans-serif" font-size="11" font-weight="600" text-anchor="middle">Boobalan Madhavan · Founder</text>

            <!-- Speaker 2 Box -->
            <rect x="270" y="0" width="240" height="150" rx="8" fill="#132c4a" stroke="#255182" stroke-width="1.5" />
            <circle cx="390" cy="65" r="35" fill="#c89d5c" />
            <circle cx="390" cy="55" r="15" fill="#ffffff" opacity="0.9" />
            <path d="M 365 88 C 365 75, 415 75, 415 88 Z" fill="#ffffff" opacity="0.9" />
            <rect x="290" y="115" width="200" height="22" rx="4" fill="#0a192f" />
            <text x="390" y="130" fill="#e2e8f0" font-family="system-ui, sans-serif" font-size="11" font-weight="600" text-anchor="middle">Andrew Noble · Co-Founder</text>
        </g>

        <!-- Audio Waveform bar at bottom -->
        <g transform="translate(40, 260)">
            <rect width="520" height="45" rx="6" fill="#0a192f" />
            <g fill="#00a3e0" opacity="0.85">
                <rect x="25" y="18" width="4" height="10" rx="2" />
                <rect x="35" y="12" width="4" height="22" rx="2" />
                <rect x="45" y="8" width="4" height="30" rx="2" />
                <rect x="55" y="15" width="4" height="16" rx="2" />
                <rect x="65" y="6" width="4" height="33" rx="2" />
                <rect x="75" y="14" width="4" height="18" rx="2" />
                <rect x="85" y="10" width="4" height="25" rx="2" />
                <rect x="95" y="18" width="4" height="10" rx="2" />
                <rect x="105" y="12" width="4" height="22" rx="2" />
                <rect x="115" y="5" width="4" height="35" rx="2" />
                <rect x="125" y="14" width="4" height="18" rx="2" />
                <rect x="135" y="9" width="4" height="27" rx="2" />
                <rect x="145" y="16" width="4" height="14" rx="2" />
                <rect x="155" y="7" width="4" height="31" rx="2" />
                <rect x="165" y="15" width="4" height="16" rx="2" />
            </g>
            <text x="200" y="28" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">Interactive Live Q&amp;A · Strategy Breakdown</text>
        </g>
    </g>
</svg>"""

with open("public/images/svg-webinar.svg", "w") as f:
    f.write(webinar_svg)

# 3. svg-team-interview.svg
team_interview_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450">
    <defs>
        <linearGradient id="tmBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0b1e36" />
            <stop offset="100%" stop-color="#002b49" />
        </linearGradient>
    </defs>
    
    <rect width="100%" height="100%" fill="url(#tmBg)" />

    <!-- Global Connection Network Visual -->
    <g transform="translate(100, 50)">
        <rect width="600" height="350" rx="14" fill="#0d2542" stroke="#1b4573" stroke-width="2" />

        <!-- Connecting Hubs Map Visual -->
        <!-- Hub Australia -->
        <g transform="translate(100, 100)">
            <circle cx="0" cy="0" r="32" fill="#0056b3" stroke="#00a3e0" stroke-width="2" />
            <text x="0" y="5" fill="#ffffff" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">AU / NZ</text>
            <text x="0" y="48" fill="#93c5fd" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">Client Onshore</text>
        </g>

        <!-- Hub Chennai Delivery Center -->
        <g transform="translate(300, 200)">
            <circle cx="0" cy="0" r="44" fill="#c89d5c" stroke="#fcd34d" stroke-width="3" />
            <text x="0" y="-3" fill="#071529" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" text-anchor="middle">CHENNAI</text>
            <text x="0" y="14" fill="#071529" font-family="system-ui, sans-serif" font-size="10" font-weight="600" text-anchor="middle">Global Delivery Hub</text>
            <text x="0" y="62" fill="#e6ca94" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">24/7 Operations · ISO 27001</text>
        </g>

        <!-- Hub USA -->
        <g transform="translate(500, 100)">
            <circle cx="0" cy="0" r="32" fill="#0056b3" stroke="#00a3e0" stroke-width="2" />
            <text x="0" y="5" fill="#ffffff" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">USA</text>
            <text x="0" y="48" fill="#93c5fd" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">New Jersey Office</text>
        </g>

        <!-- Connection lines with animated pulses / dots -->
        <path d="M 100 100 Q 200 120, 300 200" fill="none" stroke="#00a3e0" stroke-width="3" stroke-dasharray="6 6" />
        <path d="M 500 100 Q 400 120, 300 200" fill="none" stroke="#00a3e0" stroke-width="3" stroke-dasharray="6 6" />

        <!-- Bottom Tag banner -->
        <g transform="translate(40, 290)">
            <rect width="520" height="40" rx="8" fill="#071529" stroke="#153254" stroke-width="1" />
            <text x="260" y="25" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12" font-weight="600" text-anchor="middle">
                ✦ 100% Dedicated Qualified CA/CMA Professionals · Seamless Team Extension
            </text>
        </g>
    </g>
</svg>"""

with open("public/images/svg-team-interview.svg", "w") as f:
    f.write(team_interview_svg)

print("Generated all 3 Client Stories SVGs.")
