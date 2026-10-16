/**
 * Handcrafted editorial SVG illustrations & vector graphics.
 * Designed with a warm, creamy, human-crafted financial aesthetic.
 */

/* ===== Brand Crest Monogram Logo ===== */
export const LogoIcon = ({ size = 32 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0 }}
  >
    <rect width="40" height="40" rx="10" fill="#1C1917" />
    <rect x="2" y="2" width="36" height="36" rx="8" stroke="#D97706" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="2 2" />
    {/* Stylized classic serif N for NOVA AI */}
    <path
      d="M13 26V14L27 26V14"
      stroke="#FAF7F2"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="20" cy="10" r="1.5" fill="#D97706" />
  </svg>
);

/* ===== Hero Financial Ledger & Anomaly Spotlight Illustration ===== */
export const HeroLedgerIllustration = () => (
  <svg
    viewBox="0 0 640 460"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "100%", height: "auto", maxWidth: "600px" }}
  >
    <defs>
      <linearGradient id="creamPaper" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#F9F5EE" />
      </linearGradient>
      <linearGradient id="warmTerracotta" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#B45309" />
        <stop offset="100%" stopColor="#92400E" />
      </linearGradient>
      <linearGradient id="sageAccent" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#15803D" />
        <stop offset="100%" stopColor="#166534" />
      </linearGradient>
      <filter id="softShadow" x="-10%" y="-10%" width="125%" height="125%">
        <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#261E14" floodOpacity="0.08" />
      </filter>
      <filter id="cardShadow" x="-10%" y="-10%" width="125%" height="125%">
        <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#261E14" floodOpacity="0.06" />
      </filter>
    </defs>

    {/* Subtle Architectural Grid Lines */}
    <line x1="40" y1="20" x2="600" y2="20" stroke="#EBE4D5" strokeDasharray="3 3" />
    <line x1="40" y1="440" x2="600" y2="440" stroke="#EBE4D5" strokeDasharray="3 3" />
    <line x1="40" y1="20" x2="40" y2="440" stroke="#EBE4D5" strokeDasharray="3 3" />
    <line x1="600" y1="20" x2="600" y2="440" stroke="#EBE4D5" strokeDasharray="3 3" />

    {/* Primary Bank Statement Ledger (Background Paper) */}
    <g filter="url(#softShadow)">
      {/* Underlying Sheet */}
      <rect x="75" y="45" width="450" height="340" rx="14" fill="#F4EFE6" stroke="#E5DEC9" strokeWidth="1" transform="rotate(-2 75 45)" />
      
      {/* Main Ledger Sheet */}
      <rect x="90" y="55" width="460" height="350" rx="16" fill="url(#creamPaper)" stroke="#E7E1D4" strokeWidth="1.5" />
      
      {/* Ledger Header Band */}
      <rect x="91" y="56" width="458" height="56" rx="15" fill="#FAF6F0" />
      <line x1="91" y1="112" x2="549" y2="112" stroke="#E7E1D4" strokeWidth="1.5" />
      
      {/* Statement Header Details */}
      <circle cx="125" cy="84" r="14" fill="#1C1917" />
      <path d="M120 84H130M125 80V89" stroke="#FAF7F2" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="150" y="76" width="110" height="8" rx="4" fill="#1C1917" />
      <rect x="150" y="89" width="70" height="6" rx="3" fill="#8C8479" />
      
      <rect x="420" y="78" width="95" height="18" rx="9" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1" />
      <circle cx="432" cy="87" r="3" fill="#15803D" />
      <text x="442" y="90.5" fill="#166534" fontSize="9" fontWeight="700" fontFamily="system-ui">VERIFIED STMT</text>

      {/* Ledger Table Header */}
      <rect x="110" y="126" width="420" height="24" rx="6" fill="#F5EFE6" />
      <text x="125" y="142" fill="#8C8479" fontSize="9.5" fontWeight="700" letterSpacing="0.8">DATE</text>
      <text x="210" y="142" fill="#8C8479" fontSize="9.5" fontWeight="700" letterSpacing="0.8">MERCHANT</text>
      <text x="355" y="142" fill="#8C8479" fontSize="9.5" fontWeight="700" letterSpacing="0.8">CATEGORY</text>
      <text x="475" y="142" fill="#8C8479" fontSize="9.5" fontWeight="700" letterSpacing="0.8">AMOUNT</text>

      {/* Row 1: Normal transaction */}
      <g opacity="0.85">
        <text x="125" y="176" fill="#57534E" fontSize="11" fontWeight="500">12 Oct</text>
        <text x="210" y="176" fill="#1F1D1A" fontSize="11" fontWeight="600">Blue Tokai Coffee</text>
        <rect x="350" y="165" width="55" height="16" rx="8" fill="#F5EFE6" />
        <text x="363" y="176.5" fill="#57534E" fontSize="9.5" fontWeight="600">Food</text>
        <text x="470" y="176" fill="#1F1D1A" fontSize="11" fontWeight="600">₹ 380</text>
        <line x1="110" y1="192" x2="530" y2="192" stroke="#F0EBE0" strokeWidth="1" />
      </g>

      {/* Row 2: Highlighted Anomaly Row */}
      <rect x="105" y="198" width="430" height="38" rx="8" fill="#FEF2F2" stroke="#FECACA" strokeWidth="1" strokeDasharray="4 2" />
      <text x="125" y="222" fill="#991B1B" fontSize="11" fontWeight="700">14 Oct</text>
      <text x="210" y="222" fill="#991B1B" fontSize="11" fontWeight="700">Apex Hardware Tokyo</text>
      <rect x="350" y="210" width="68" height="18" rx="9" fill="#FEE2E2" />
      <text x="360" y="222.5" fill="#991B1B" fontSize="9.5" fontWeight="700">Unusual</text>
      <text x="460" y="222" fill="#991B1B" fontSize="12" fontWeight="800">₹ 84,200</text>

      {/* Row 3: Normal transaction */}
      <g opacity="0.85">
        <text x="125" y="262" fill="#57534E" fontSize="11" fontWeight="500">15 Oct</text>
        <text x="210" y="262" fill="#1F1D1A" fontSize="11" fontWeight="600">Swiggy Delivery</text>
        <rect x="350" y="251" width="55" height="16" rx="8" fill="#F5EFE6" />
        <text x="363" y="262.5" fill="#57534E" fontSize="9.5" fontWeight="600">Food</text>
        <text x="474" y="262" fill="#1F1D1A" fontSize="11" fontWeight="600">₹ 420</text>
        <line x1="110" y1="278" x2="530" y2="278" stroke="#F0EBE0" strokeWidth="1" />
      </g>

      {/* Row 4: Normal transaction */}
      <g opacity="0.85">
        <text x="125" y="304" fill="#57534E" fontSize="11" fontWeight="500">16 Oct</text>
        <text x="210" y="304" fill="#1F1D1A" fontSize="11" fontWeight="600">Uber Mobility</text>
        <rect x="350" y="293" width="70" height="16" rx="8" fill="#F5EFE6" />
        <text x="360" y="304.5" fill="#57534E" fontSize="9.5" fontWeight="600">Transport</text>
        <text x="474" y="304" fill="#1F1D1A" fontSize="11" fontWeight="600">₹ 210</text>
        <line x1="110" y1="320" x2="530" y2="320" stroke="#F0EBE0" strokeWidth="1" />
      </g>

      {/* Summary footer strip */}
      <rect x="110" y="340" width="420" height="42" rx="8" fill="#FAF6EF" stroke="#EFEAE0" strokeWidth="1" />
      <text x="130" y="365" fill="#8C8479" fontSize="11" fontWeight="600">Total Analyzed: 4 records</text>
      <text x="380" y="365" fill="#1F1D1A" fontSize="11" fontWeight="700">Z-Score Deviation: +4.8σ</text>
    </g>

    {/* Floating Physical Magnifying Glass with tactile brass rim */}
    <g filter="url(#cardShadow)">
      {/* Shadow & Lens Focus */}
      <ellipse cx="230" cy="220" rx="55" ry="55" fill="#FFFFFF" fillOpacity="0.4" stroke="#B45309" strokeWidth="3" />
      <circle cx="230" cy="220" r="50" fill="none" stroke="#FAF7F2" strokeWidth="2" strokeOpacity="0.7" />
      <line x1="268" y1="258" x2="315" y2="305" stroke="#78350F" strokeWidth="8" strokeLinecap="round" />
      <line x1="268" y1="258" x2="315" y2="305" stroke="#D97706" strokeWidth="3" strokeLinecap="round" />
      {/* Precision reticle marks */}
      <line x1="225" y1="220" x2="235" y2="220" stroke="#B45309" strokeWidth="1.5" />
      <line x1="230" y1="215" x2="230" y2="225" stroke="#B45309" strokeWidth="1.5" />
    </g>

    {/* Floating Anomaly Card (Tactile Pill) */}
    <g filter="url(#cardShadow)" transform="translate(410, 190)">
      <rect width="185" height="110" rx="14" fill="#FFFFFF" stroke="#E7E1D4" strokeWidth="1.5" />
      <rect x="14" y="16" width="30" height="30" rx="8" fill="#FEF2F2" />
      <path d="M29 23V31M29 35H29.01" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" />
      <text x="54" y="27" fill="#1F1D1A" fontSize="12" fontWeight="700">Flagged Anomaly</text>
      <text x="54" y="40" fill="#991B1B" fontSize="10" fontWeight="600">High Risk · 89/100</text>
      <line x1="14" y1="56" x2="171" y2="56" stroke="#EFEAE0" strokeWidth="1" />
      <text x="14" y="74" fill="#57534E" fontSize="9.5" fontWeight="500">Amount 12.4× higher than normal.</text>
      <text x="14" y="88" fill="#8C8479" fontSize="9" fontWeight="500">First time merchant recorded.</text>
    </g>

    {/* Physical Archival Brass Clip at top of statement */}
    <path
      d="M170 38C170 28 184 28 184 38V85C184 92 176 92 176 85V45C176 40 180 40 180 45"
      stroke="#B45309"
      strokeWidth="3.5"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

/* ===== Feature 1: Statistical Anomaly Detection (Scales & Precision Lens) ===== */
export const AnomalyIcon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="56" height="56" rx="14" fill="#FDF6EC" stroke="#F6D8A8" strokeWidth="1.2" />
    {/* Architectural Scale / Measurement */}
    <path d="M28 14V38M16 22L28 18L40 22M18 36H38" stroke="#B45309" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="16" cy="27" r="5" fill="#FAF7F2" stroke="#B45309" strokeWidth="1.8" />
    <circle cx="40" cy="29" r="5" fill="#FAF7F2" stroke="#B45309" strokeWidth="1.8" />
    <path d="M24 40H32" stroke="#1C1917" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

/* ===== Feature 2: Bank Vault / Private Isolation ===== */
export const SecurityVaultIcon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="56" height="56" rx="14" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1.2" />
    {/* Heritage Vault Door */}
    <rect x="15" y="14" width="26" height="28" rx="4" fill="#FFFFFF" stroke="#166534" strokeWidth="2" />
    <circle cx="28" cy="28" r="7" stroke="#166534" strokeWidth="2" fill="#F0FDF4" />
    <circle cx="28" cy="28" r="2.5" fill="#166534" />
    <line x1="28" y1="18" x2="28" y2="21" stroke="#166534" strokeWidth="2" strokeLinecap="round" />
    <line x1="28" y1="35" x2="28" y2="38" stroke="#166534" strokeWidth="2" strokeLinecap="round" />
    <line x1="18" y1="28" x2="21" y2="28" stroke="#166534" strokeWidth="2" strokeLinecap="round" />
    <line x1="35" y1="28" x2="38" y2="28" stroke="#166534" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

/* ===== Feature 3: Risk Scoring & Compass ===== */
export const RiskScoreIcon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="56" height="56" rx="14" fill="#FEF2F2" stroke="#FECACA" strokeWidth="1.2" />
    {/* Compass / Dial */}
    <circle cx="28" cy="28" r="14" stroke="#991B1B" strokeWidth="2" fill="#FFFFFF" />
    <path d="M28 17V21M28 35V39M17 28H21M35 28H39" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M28 28L34 22" stroke="#991B1B" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="28" cy="28" r="3" fill="#991B1B" />
  </svg>
);

/* ===== Feature 4: Financial Ledger & Analytics ===== */
export const AnalyticsTrendIcon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="56" height="56" rx="14" fill="#F5EFE6" stroke="#E2D7C5" strokeWidth="1.2" />
    {/* Journal / Ledger Lines & Trend */}
    <rect x="14" y="14" width="28" height="28" rx="4" fill="#FFFFFF" stroke="#57534E" strokeWidth="1.8" />
    <line x1="18" y1="21" x2="25" y2="21" stroke="#8C8479" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="18" y1="26" x2="28" y2="26" stroke="#8C8479" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M20 34L26 28L31 31L37 24" stroke="#B45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="37" cy="24" r="2" fill="#B45309" />
  </svg>
);

/* ===== File Upload Illustration: Physical Envelope & Paper ===== */
export const UploadDropzoneIllustration = ({ dragActive = false }) => (
  <svg width="120" height="96" viewBox="0 0 120 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect
      x="12"
      y="18"
      width="96"
      height="66"
      rx="10"
      fill={dragActive ? "#FDF6EC" : "#F7F2E9"}
      stroke={dragActive ? "#B45309" : "#E2D7C5"}
      strokeWidth="1.5"
    />
    {/* Document slipping inside */}
    <rect
      x="28"
      y="8"
      width="64"
      height="54"
      rx="6"
      fill="#FFFFFF"
      stroke={dragActive ? "#B45309" : "#D4CBB9"}
      strokeWidth="1.5"
    />
    <line x1="38" y1="20" x2="65" y2="20" stroke="#8C8479" strokeWidth="2" strokeLinecap="round" />
    <line x1="38" y1="28" x2="82" y2="28" stroke="#D1C7B7" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="38" y1="36" x2="74" y2="36" stroke="#D1C7B7" strokeWidth="1.8" strokeLinecap="round" />
    {/* Upload Arrow Badge */}
    <circle cx="60" cy="56" r="16" fill="#1C1917" />
    <path d="M60 62V50M55 55L60 50L65 55" stroke="#FAF7F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ===== Workflow Step Badges ===== */
export const StepIcon = ({ number }) => (
  <div
    style={{
      width: "36px",
      height: "36px",
      borderRadius: "10px",
      background: "#FAF7F2",
      border: "1.5px solid #E7E1D4",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-serif)",
      fontSize: "16px",
      fontWeight: 700,
      color: "#1C1917",
      boxShadow: "0 1px 3px rgba(40, 30, 20, 0.05)",
      flexShrink: 0,
    }}
  >
    {number}
  </div>
);
