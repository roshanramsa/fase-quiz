// 10 Cybercrime Awareness questions (TNPL / TN Police Initiative)
export const QUESTIONS = [
  {
    id: 1,
    category: "Financial Scams",
    difficulty: "Easy",
    question: "You receive an SMS saying 'Dear Customer, your electricity power will be disconnected at 9:30 PM. Call this number immediately.' What should you do?",
    options: [
      "Call the number and pay the pending bill online",
      "Ignore the message, it is a known scam",
      "Share your bank details to avoid disconnection",
      "Download the app they send via WhatsApp"
    ],
    correct: 1,
    explanation: "This is a common Electricity Bill scam. The electricity board will never send personal mobile numbers for contact or threaten immediate night-time disconnection via SMS."
  },
  {
    id: 2,
    category: "Marketplace Fraud",
    difficulty: "Medium",
    question: "You are selling a sofa on an online marketplace. The buyer agrees to your price and sends a QR code, asking you to scan it to 'receive' the payment. What is happening?",
    options: [
      "The buyer is paying you directly into your bank",
      "Scanning a QR code and entering your UPI PIN only deducts money from your account",
      "The buyer is verifying your UPI ID",
      "It is a new RBI guideline for online sellers"
    ],
    correct: 1,
    explanation: "You NEVER need to scan a QR code or enter your UPI PIN to receive money. Doing so will only deduct money from your account."
  },
  {
    id: 3,
    category: "Investment Scams",
    difficulty: "Hard",
    question: "You are added to a Telegram group offering a 'Part-time Job' where you just need to like YouTube videos for Rs. 50 each. Later, they ask you to 'invest' in a prepaid task for higher returns. This is:",
    options: [
      "A legitimate gig-economy job",
      "A Task-Based Telegram Scam",
      "A standard corporate hiring process",
      "A promotional campaign by YouTube"
    ],
    correct: 1,
    explanation: "This is the infamous 'Task Scam'. Scammers pay you small amounts initially to build trust, then trap you into 'investing' large sums of money which you can never withdraw."
  },
  {
    id: 4,
    category: "Helplines",
    difficulty: "Easy",
    question: "If you fall victim to financial cyber fraud, what is the official National Cyber Crime Reporting toll-free helpline number you should dial immediately?",
    options: [
      "100",
      "1930",
      "112",
      "108"
    ],
    correct: 1,
    explanation: "1930 is the dedicated National Cyber Crime Reporting Portal helpline. Calling it immediately after a financial fraud increases the chances of freezing the stolen funds."
  },
  {
    id: 5,
    category: "Impersonation",
    difficulty: "Medium",
    question: "You receive a terrifying phone call claiming to be from 'Customs/FedEx' or 'CBI', saying a parcel with illegal items (drugs/passports) was found in your name. They ask for a 'security deposit' to clear your name. You should:",
    options: [
      "Pay the amount immediately to avoid arrest",
      "Provide your Aadhaar details to verify it's not you",
      "Disconnect immediately and report the number, as law enforcement never asks for money to clear charges",
      "Negotiate the settlement amount"
    ],
    correct: 2,
    explanation: "This is a widespread 'Digital Arrest' or Parcel Scam. Genuine law enforcement or customs officials will never demand money over a phone call to clear your name."
  },
  {
    id: 6,
    category: "Mobile Security",
    difficulty: "Medium",
    question: "A 'customer care executive' asks you to download an app like 'AnyDesk', 'TeamViewer QuickSupport', or 'RustDesk' to fix a refund issue. Why?",
    options: [
      "To remotely view your screen and steal your OTPs and banking passwords",
      "To transfer the refund directly to your phone",
      "To upgrade your mobile software",
      "To encrypt your banking connection"
    ],
    correct: 0,
    explanation: "These are remote desktop applications. If you install them, the scammer can see your screen live, reading your OTPs and compromising your bank accounts."
  },
  {
    id: 7,
    category: "Fake Apps",
    difficulty: "Medium",
    question: "You download an instant loan app that requires no CIBIL score. A week later, you receive morphed photos of yourself and threats that they will be sent to your contacts if you don't pay double the amount. This is:",
    options: [
      "A legal recovery process",
      "Fake Loan App Extortion",
      "A credit score penalty",
      "A glitch in the app"
    ],
    correct: 1,
    explanation: "Fake loan apps harvest your contacts and photo gallery upon installation. They use this data to blackmail and extort money from victims, even if the loan is repaid."
  },
  {
    id: 8,
    category: "Phishing",
    difficulty: "Easy",
    question: "You get an SMS saying 'Your PAN card will be blocked today. Click here to update KYC: http://pan-update-kyc.xyz'. What should you do?",
    options: [
      "Click the link and enter your PAN details",
      "Forward it to your bank",
      "Do not click the link, it is a phishing attempt to steal credentials",
      "Reply to the SMS with your PAN number"
    ],
    correct: 2,
    explanation: "Banks and government authorities do not send SMS warnings with unofficial links (like .xyz or random URLs) asking for immediate KYC updates."
  },
  {
    id: 9,
    category: "Search Engine Fraud",
    difficulty: "Hard",
    question: "You ordered food on an app and it wasn't delivered. You Google the customer care number, find a mobile number, and call it. The person sends a link to process your refund. Is this safe?",
    options: [
      "Yes, Google only shows verified numbers",
      "No, scammers manipulate Google search results to list their own numbers as customer care",
      "Yes, if the person speaks professionally",
      "Yes, as long as it's an Indian mobile number"
    ],
    correct: 1,
    explanation: "Scammers frequently manipulate Google search results or Google Maps listings. Always use the official app or official website to find customer support numbers."
  },
  {
    id: 10,
    category: "Helplines",
    difficulty: "Medium",
    question: "Apart from calling 1930, what is the official Government of India website to report cybercrimes?",
    options: [
      "www.cyberpolice.com",
      "www.cybercrime.gov.in",
      "www.india-cyber-report.org",
      "www.tnpolice.gov.in/cyber"
    ],
    correct: 1,
    explanation: "www.cybercrime.gov.in is the official National Cyber Crime Reporting Portal where citizens can file complaints regarding cyber frauds, social media crimes, and financial scams."
  }
];

export const DIFFICULTY_COLORS = {
  Easy:   "badge-green",
  Medium: "badge-cyan",
  Hard:   "badge-purple",
};

export const CATEGORY_ICONS = {
  Fundamentals:    "🛡️",
  Attacks:         "⚔️",
  Cryptography:    "🔐",
  "Network Security": "🌐",
  Malware:         "🦠",
  "Web Security":  "🕸️",
  "Access Control":"🔑",
  Compliance:      "📋",
};
