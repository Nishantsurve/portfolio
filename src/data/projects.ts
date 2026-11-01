import { ProjectItem } from "@/types";

export const projectsData: ProjectItem[] = [
  {
    id: "stress-ai",
    title: "StressAI",
    subtitle: "Stress Prediction System",
    description: "Machine learning application that predicts psychological and physiological stress levels from 28 input biomarkers and lifestyle parameters, providing clinically oriented personalized recommendations.",
    category: "AI & Automation",
    featured: true,
    stats: "Random Forest 92.3% | Decision Tree 86.4% | SVM 85.2%",
    tags: ["React", "Node.js", "Express", "MongoDB", "Python", "Flask", "Clerk", "Scikit-Learn"],
    features: [
      "Trained ensemble models achieving 92.3% accuracy on multi-factor stress dataset",
      "Robust Flask microservice backend handling real-time model inference and probability distributions",
      "User authentication, telemetry tracking, and personalized recovery reports powered by Clerk",
      "Interactive health metrics dashboard with responsive visual tracking over time"
    ],
    statusBadge: "Featured ML",
    githubUrl: "https://github.com/Nishantsurve/StressAI",
    liveUrl: "https://stress-ai-demo.vercel.app"
  },
  {
    id: "converse-ai",
    title: "ConverseAI",
    subtitle: "AI Conversational Intelligence Application",
    description: "Modern, high-performance conversational AI platform leveraging Google's Gemini API with real-time streaming, context memory, and secure user sessions.",
    category: "AI & Automation",
    tags: ["React", "JavaScript", "Gemini API", "Clerk", "Tailwind CSS"],
    features: [
      "Engineered multi-turn chat sessions with continuous contextual window management",
      "Low-latency response streaming with token rendering animations",
      "Prompt orchestration and persona switching for technical assistance",
      "Authentication and session preservation using Clerk"
    ],
    githubUrl: "https://github.com/Nishantsurve/ConverseAI"
  },
  {
    id: "freelance-app",
    title: "Freelance App",
    subtitle: "Full-Stack Freelance Marketplace Platform",
    description: "Production-grade freelancing marketplace enabling clients and freelancers to connect, post jobs, negotiate milestone bids, manage dynamic reviews, and handle secure profile discovery.",
    category: "Full-Stack",
    tags: ["React", "Node.js", "Express", "MongoDB", "Material UI", "JWT"],
    features: [
      "Complete JWT-based role authentication (Freelancer vs Client dashboards)",
      "Dynamic gig listings with multi-criteria pricing and skill filter engines",
      "Interactive feedback system with verified rating aggregates",
      "RESTful API architecture with MongoDB aggregation pipelines"
    ],
    githubUrl: "https://github.com/Nishantsurve/Freelance-App"
  },
  {
    id: "quizwhiz",
    title: "QuizWhiz",
    subtitle: "Interactive Real-Time Quiz Application",
    description: "Gamified quiz experience featuring fast 30-second countdown timers, dynamic category selection from Open Trivia DB, score leaderboards, WhatsApp sharing, and celebratory confetti effects.",
    category: "Full-Stack",
    tags: ["React", "Open Trivia DB", "Bootstrap", "Material UI", "Canvas Confetti"],
    features: [
      "30-second countdown timer hook with instant feedback animations",
      "Open Trivia Database API integration across multiple difficulty tiers",
      "Score multiplier calculations and direct one-click WhatsApp scorecard sharing",
      "Dynamic confetti celebratory visual feedback upon milestone completion"
    ],
    githubUrl: "https://github.com/Nishantsurve/QuizWhiz"
  },
  {
    id: "collaborative-code-editor",
    title: "Collaborative Code Editor",
    subtitle: "Real-Time Shared Coding Environment",
    description: "Multiplayer code editor enabling synchronized collaborative programming rooms with host/viewer permission controls, syntax highlighting, and an integrated real-time team chat room.",
    category: "Tools",
    tags: ["JavaScript", "Socket.io", "CodeMirror", "Node.js", "Express"],
    features: [
      "Bi-directional operational sync over WebSockets via Socket.io with conflict resolution",
      "Granular permission system with host privileges and read-only viewer mode",
      "Integrated side-panel chat for real-time peer code review and debugging",
      "CodeMirror syntax styling for JavaScript, Python, C++, and HTML"
    ],
    githubUrl: "https://github.com/Nishantsurve/Code_Editor"
  },
  {
    id: "meeting-recorder-ai",
    title: "Meeting Recorder & AI Summarizer",
    subtitle: "Enterprise Windows Desktop Productivity Suite",
    description: "Native Windows desktop application engineered to record corporate meetings, execute high-accuracy speech-to-text with speaker diarization, and synthesize executive summaries with actionable follow-ups.",
    category: "AI & Automation",
    statusBadge: "In Development",
    tags: ["C#", ".NET 8", "WPF", "Speech-to-Text", "LLMs", "Audio DSP"],
    features: [
      "Low-overhead native Windows audio loopback and microphone dual recording",
      "Timestamp-precise audio transcription with multi-speaker identification",
      "Automated extraction of action items, deadlines, decisions, and owner assignments",
      "Exportable meeting minutes in structured Markdown and PDF formats"
    ]
  },
  {
    id: "intelligent-invoice-processing",
    title: "Intelligent Invoice Processing",
    subtitle: "High-Fidelity Document Processing Pipeline",
    description: "Autonomous data extraction pipeline parsing complex, multi-page invoice PDFs into strictly typed JSON schemas with OCR confidence metrics and bounding-box validation.",
    category: "AI & Automation",
    statusBadge: "Technical Prototype",
    tags: ["Python", "Mistral SDK", "Pydantic", "OCR", "LLMs", "PDF Parsing"],
    features: [
      "Hierarchical data extraction covering vendor metadata, line items, and tax totals",
      "Strict schema enforcement and type validation powered by Pydantic models",
      "Bounding-box coordinate mapping for spatial auditability and compliance",
      "Resilient handling of varied table layouts, scan noise, and multi-currency formats"
    ]
  },
  {
    id: "snapconvert-pro-ai",
    title: "SnapConvert Pro AI",
    subtitle: "Browser Extension & Intelligent Document Utility Suite",
    description: "All-in-one browser extension & client-side productivity suite featuring permission-based screenshot capture, multi-resolution PDF conversion, OCR text extraction, dual AI summarizers, client-side DOCX export, target-size JPEG compression, and local image enhancement.",
    category: "Extension",
    statusBadge: "Browser Extension",
    featured: true,
    stats: "Local PDF.js & OCR Engine | AI Summarization | Client-Side DOCX",
    tags: [
      "Chrome Extension",
      "JavaScript",
      "PDF.js",
      "OCR Engine",
      "Vision AI",
      "DOCX Generator",
      "Canvas DSP",
      "Client-Side"
    ],
    features: [
      "Browser Screen Capture: Permission-based browser screen capture API, active tab/webpage extension integration, and instant image preview before processing",
      "Image & PDF Conversion: Bidirectional conversion (PNG/JPG/WEBP/PDF), quality sliders, page range selectors (e.g. 1-3), 1x/2x/3x PDF rendering, and A4-proportioned multi-page PDF splitting",
      "Text Extraction & OCR: Local embedded text extraction via PDF.js, scanned PDF rendering with OCR fallback, and editable text preview with copy/download",
      "Dual AI Summarization: Text and webpage content summarization with key points & caveats, plus multi-page PDF overview extraction with chunking support",
      "Client-Side DOCX Export: Browser-native 'Download as Word (.docx)' generator preserving headings, line breaks, and formatting without requiring MS Word",
      "Smart Image Compression: Target file size budgeting in KB (default 500 KB) adjusting quality & dimensions dynamically with reduction ratio metrics",
      "Local Image Enhancement: Client-side canvas controls for brightness, contrast, and saturation with live preview and instant reset"
    ],
    githubUrl: "https://github.com/Nishantsurve/snapconvert-pro-ai",
    driveUrl: "https://drive.google.com/drive/folders/1PkBp481VrMa__zYO99aBlBMUTCjMVR0B?usp=sharing"
  }
];

