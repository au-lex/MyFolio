import type { IconType } from "react-icons";
import { 
  SiReact, SiTypescript, SiTailwindcss, SiGo, SiPostgresql, SiDocker, 
  SiNodedotjs, SiMongodb, SiRedux, SiPython, SiOpenai, SiSocketdotio, 
  SiArduino,  SiFirebase, SiExpo, SiAlgolia, 
  SiAndroid,
} from "react-icons/si";
import { FaFingerprint, FaCamera, FaFilter,  } from "react-icons/fa";

// 1. Define the Types
export interface TechStackItem {
  icon: IconType;
  name: string;
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  banner: string;
  liveLink: string;
  repoLink: string;
  client: string;
  timeline: string;
  role: string;
  stack: TechStackItem[];
  challenge: string;
  solution: string;
  features: string[];
  gallery: string[];
}


export const projectsData: Project[] = [


  {
    id: 1,
    title: "SafeQly",
    subtitle: "Fintech Infrastructure & Escrow API",
    category: "Fintech / B2B SaaS",
    banner: "https://media.licdn.com/dms/image/v2/D4E22AQEd_6mx8wHOmg/feedshare-shrink_800/B4EZtPCBhOGoAg-/0/1766557491178?e=1768435200&v=beta&t=mHm5Eneyd9R34Ka4aUhFj3zgMA2lbV5eUEH_LdjM8T0",
    liveLink: "https://safeqly.com",
    repoLink: "https://github.com/au-lex?tab=repositories",
    client: "Internal Venture",
    timeline: "24 Days (Sprint)",
    role: "Lead Full Stack Engineer",
    stack: [
      { icon: SiGo, name: "Golang (Fiber)" },
      { icon: SiPostgresql, name: "PostgreSQL" },
      { icon: SiReact, name: "React" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiDocker, name: "Docker" },
    ],
    challenge: "The primary challenge was solving the 'Trust Deficit' in African social commerce where 'Pay on Delivery' is inefficient and upfront payments are risky. \n\nFrom an engineering perspective, the complexity lay in building a **financial ledger** that could handle concurrent transaction requests without 'Race Conditions' (e.g., preventing a user from withdrawing the same funds twice). Additionally, the system needed to abstract complex escrow logic (Buyer vs. Seller fees, Milestone Releases, Dispute Arbitration) into a user interface simple enough for non-technical merchants to use on 3G networks.",
    solution: "I adopted a **Micro-service architecture approach** using a Monolithic Go Backend for the MVP. I leveraged **Golang's Fiber framework** for high-performance HTTP handling and implemented the **Repository Pattern** to decouple business logic from database operations. \n\nFor data integrity, I used **PostgreSQL** with strict **ACID transactions** and row-level locking (`SELECT FOR UPDATE`) to ensure zero-error fund transfers. On the frontend, I utilized **React (TypeScript)** with **TanStack Query** to handle server state and caching, ensuring the UI feels instant even on slower connections.",
    features: [
      "Milestone-based Escrow Wallet System",
      "Automated Dispute Resolution Center",
      "Real-time Transaction State Machine",
      "Dual-Mode Fee Calculation (Seller Deduct vs. Buyer Add)",
      "Robust Public API Architecture"
    ],
    gallery: [
      "https://media.licdn.com/dms/image/v2/D4E22AQGAfQFE-EKU_Q/feedshare-shrink_800/B4EZtPCBg4HEAg-/0/1766557491179?e=1768435200&v=beta&t=oPSS77FtpnRI5d_kVAZ-dr8jhMqFBbnTpCdb1QoG7FI",
      "https://media.licdn.com/dms/image/v2/D4E22AQFN1G1Gmvm4GQ/feedshare-shrink_800/B4EZtPCBhHKkAo-/0/1766557491184?e=1768435200&v=beta&t=CiWvibV1YfUeXPZD27oWxIQBYVBXdHPLlaux0LhtcRQ"
    ]
  },
  {
    id: 2,
    title: "Xnria",
    subtitle: "Fashion Tech Marketplace & Order Management System",
    category: "E-commerce / Marketplace",
    banner: "https://media.licdn.com/dms/image/v2/D4D22AQH1nI1K9hWNEQ/feedshare-shrink_800/B4DZrYXsKCIAAg-/0/1764566695635?e=1768435200&v=beta&t=TEoS7szkN8scmeN_r5Sjajy27D-GAfeprNxNqmrqBY8",
    liveLink: "https://xnria.com",
    repoLink: "https://github.com/au-lex?tab=repositories",
    client: "Startup Venture",
    timeline: "3 Months",
    role: "Lead Frontend Engineer",
    stack: [
      { icon: SiReact, name: "React" },
      { icon: SiNodedotjs, name: "Node.js" },
      { icon: SiMongodb, name: "MongoDB" },
      { icon: SiRedux, name: "Redux Toolkit" },
      { icon: SiTailwindcss, name: "Tailwind" },
    ],
    challenge: "The African fashion industry is highly fragmented. Designers struggle with two core problems: Visibility (finding clients) and Operations (managing custom orders, measurements, and timelines). \n\nThe technical challenge was creating a **dual-sided platform**: A 'Shopify-like' dashboard for designers to manage complex inventories and custom orders, and a seamless 'Discovery Feed' for clients. Handling dynamic data structures for **custom body measurements** (which vary per client) was a key complexity.",
    solution: "I built a scalable multi-tenant architecture where every designer gets their own dedicated 'Storefront' instantly upon signup. I utilized **React with Redux Toolkit** for complex state management, ensuring that the designer's dashboard (Orders, Analytics, Inventory) remains synchronized in real-time. \n\nFor the backend, I implemented a flexible schema to handle variable product attributes (Size, Fabric, Custom Measurements). The platform also bridges the trust gap by including a review system that feeds into a designer's reputation score.",
    features: [
      "Instant 'Shop Creation' for Fashion Designers",
      "Order Management System (OMS)",
      "Custom Body Measurement Profiles",
      "Dual-Sided Dashboard (Buyer View vs. Seller View)",
      "Inventory & Sales Analytics"
    ],
    gallery: [
      "https://media.licdn.com/dms/image/v2/D4D22AQETCm3qzQuGcA/feedshare-shrink_800/B4DZrYXsKSHsAg-/0/1764566698054?e=1768435200&v=beta&t=w-GWteGzS4Z3AecrZyf7kF0surezm16PjNAU5mfjzjU",
      "https://media.licdn.com/dms/image/v2/D4D22AQH26ALyxMZsVg/feedshare-shrink_800/B4DZrYXsJ_IkAg-/0/1764566694350?e=1768435200&v=beta&t=ltC0zm38TykuF70xr05F9j-60U2i1KmA4Qww4AUl5KI"
    ]
  },
  {
    id: 3,
    title: "Casalink",
    subtitle: "Multi-Tenant Property Management System (PMS)",
    category: "PropTech / SaaS",
    banner: "https://res.cloudinary.com/dmhvsyzch/image/upload/v1766796252/Screenshot_from_2025-12-27_01-43-28_emdkgr.png",
    liveLink: "https://casalink.app/login",
    repoLink: "https://github.com/au-lex?tab=repositories",
    client: "Real Estate Enterprise",
    timeline: "2 Months",
    role: "Lead Full Stack Engineer",
    stack: [
      { icon: SiReact, name: "React" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiPostgresql, name: "PostgreSQL" },
      { icon: SiNodedotjs, name: "Node.js" },
    ],
    challenge: "Property management involves complex relationships between multiple stakeholders. The main engineering hurdle was creating a secure **Multi-Tenant Architecture** that orchestrates workflows between 5 distinct user roles: Property Owners, Managers, Occupants (Tenants), Contractors, and Technicians. \n\nA key challenge was the 'Maintenance Logic': allowing a tenant to raise a ticket, the manager to approve it, the contractor to bid, and the owner to view the expense—all while maintaining strict data privacy boundaries (e.g., tenants shouldn't see owner financials).",
    solution: "I designed a granular **Role-Based Access Control (RBAC)** system at the database level to ensure strict permission enforcement. The backend manages a sophisticated 'Ticketing State Machine' (Open -> Pending Approval -> Assigned -> In Progress -> Completed) that triggers automated notifications to the relevant parties at each stage. \n\nI also implemented a **Dispute Resolution Module** that logs communication threads immutably, protecting both landlords and tenants.",
    features: [
      "Granular RBAC (Owner, Manager, Tenant, Contractor)",
      "Automated Maintenance Ticketing System",
      "Financial Reporting & Expense Logging",
      "Dispute Resolution Portal with Audit Logs",
      "Multi-property Portfolio Dashboard"
    ],
    gallery: [
      "https://res.cloudinary.com/dmhvsyzch/image/upload/v1766796252/Screenshot_from_2025-12-27_01-43-28_emdkgr.png",
      "https://res.cloudinary.com/dmhvsyzch/image/upload/v1766796252/Screenshot_from_2025-12-27_01-43-45_q54sv3.png",
      "https://res.cloudinary.com/dmhvsyzch/image/upload/v1766796252/Screenshot_from_2025-12-27_01-42-18_jw1sml.png",
      
      "https://res.cloudinary.com/dmhvsyzch/image/upload/v1766796252/Screenshot_from_2025-12-27_01-42-18_jw1sml.png"
    ]
  },
  {
    id: 4,
    title: "Nuvopod",
    subtitle: "AI-Powered Smart Wellness Pod & IoT Sanctuary",
    category: "HealthTech / AI / IoT",
    banner: "https://res.cloudinary.com/dmhvsyzch/image/upload/v1766795335/Screenshot_from_2025-12-27_01-16-04_nkapfo.png",
    liveLink: "https://nuvopod.com",
    repoLink: "https://github.com/au-lex?tab=repositories",
    client: "Wellness Tech Startup",
    timeline: "6 Weeks",
    role: "Lead Software Engineer (AI & IoT)",
    stack: [
      { icon: SiReact, name: "React" },
      { icon: SiPython, name: "Python (AI Backend)" },
      { icon: SiOpenai, name: "OpenAI API" },
      { icon: SiSocketdotio, name: "WebSockets" },
      { icon: SiArduino, name: "IoT Integration" },
    ],
    challenge: "Most wellness apps are passive—you just listen to a track. Nuvopod aimed to build a **responsive physical environment**. The engineering challenge was creating a 'Sensory Feedback Loop': How do we take a user's spoken mood, analyze it with AI, and instantly control physical hardware (Chromotherapy lights, ambient soundscapes) to match that mood in real-time? Latency was the enemy here; the pod needed to 'breathe' with the user.",
    solution: "I built a real-time **IoT Event Bus** using WebSockets to bridge the software and hardware. When a user speaks to the Nuvopod AI, the voice data is processed via an NLP model (OpenAI) to extract 'Sentiment Parameters' (e.g., Anxious, Tired). \n\nThese parameters are broadcasted instantly to the pod's hardware controller to adjust lighting temperature and audio frequencies. I also implemented a 'Bio-Sync' feature where the lighting pulses in a rhythmic pattern to guide the user's breathing exercises.",
    features: [
      "Generative AI Mood Analysis (NLP)",
      "Real-time IoT Hardware Control",
      "Occupancy Status System",
      "Chromotherapy Synchronization (Bio-Sync)",
      "Voice-Activated Interface"
    ],
    gallery: [
      "https://res.cloudinary.com/dmhvsyzch/image/upload/v1766795335/Screenshot_from_2025-12-27_01-16-13_dgrvrb.png",
      "https://res.cloudinary.com/dmhvsyzch/image/upload/v1766795335/Screenshot_from_2025-12-27_01-16-52_iuxhdv.png"
    ]
  },
  {
    id: 5,
    title: "VoiceNute",
    subtitle: "Listen-to-Earn Audio Streaming Platform",
    category: "Streaming / Creator Economy",
    banner: "https://res.cloudinary.com/dmhvsyzch/image/upload/v1766795903/Screenshot_from_2025-12-27_01-37-58_cua1py.png",
    liveLink: "https://voicenute.net",
    repoLink: "https://github.com/au-lex?tab=repositories",
    client: "Music Tech Startup",
    timeline: "5 Weeks",
    role: "Lead Full Stack Engineer",
    stack: [
      { icon: SiReact, name: "React" },
      { icon: SiNodedotjs, name: "Node.js (Express)" },
      { icon: SiMongodb, name: "MongoDB" },

      { icon: SiFirebase, name: "Firebase Auth" },
    ],
    challenge: "Building a 'Listen-to-Earn' platform comes with a massive security risk: **Streaming Fraud**. The technical challenge wasn't just playing audio, but verifying that a *human* actually listened to it. \n\nI needed to engineer a 'Proof-of-Listen' mechanism to prevent bots from farming rewards by speeding up songs or opening multiple tabs. Additionally, the system had to handle complex payouts: splitting ad revenue between the Platform, the Creator (Artist), and the Listener in real-time.",
    solution: "I implemented a secure, encrypted audio player that emits 'Heartbeat Events' every 10 seconds of active playback. These events are validated on the server against a 'Fraud Detection Algorithm' that checks for irregular patterns (e.g., impossible skip rates or simultaneous streams from the same IP). \n\nFor the economy, I built a dual-ledger Wallet System: One for 'Pending Earnings' (locked until fraud checks pass) and one for 'Withdrawable Cash.' Audio files are securely streamed via **AWS CloudFront** with signed URLs.",
    features: [
      "Proof-of-Listen Fraud Detection Algorithm",
      "Dual-Sided Wallet System",
      "Secure Audio Streaming via AWS S3",
      "Real-time Analytics Dashboard",
      "Gamified Earning Tiers"
    ],
    gallery: [
      "https://res.cloudinary.com/dmhvsyzch/image/upload/v1766795825/Screenshot_from_2025-12-27_01-36-10_tmtffl.png",
      "https://res.cloudinary.com/dmhvsyzch/image/upload/v1766795824/Screenshot_from_2025-12-27_01-36-29_pjp51z.png"
    ]
  },



  {
    id: 7,
    title: "BukaDose",
    subtitle: "Mobile Pharmacy & Telemedicine App",
    category: "HealthTech / Mobile App",
    banner: "https://res.cloudinary.com/dmhvsyzch/image/upload/v1766847613/Screenshot_20250915_040239_BukaDose-App_h52bsp.jpg",
    liveLink: "https://drive.google.com/file/d/1UDUbH_wE29Z7g9iqrO_J_kx0grUrGLTO/view",
    repoLink: "https://github.com/au-lex?tab=repositories",
    client: "Healthcare Startup",
    timeline: "8 Weeks",
    role: "Lead Mobile Engineer",
    stack: [
      { icon: SiReact, name: "React Native" },
      { icon: SiExpo, name: "Expo CLI" },
      { icon: SiFirebase, name: "Firebase" },
      { icon: SiRedux, name: "Redux Toolkit" },
      { icon: SiTypescript, name: "TypeScript" },
    ],
    challenge: "This project required merging two distinct business models into a single mobile experience: **Retail E-commerce** (ordering drugs) and **Telemedicine** (booking doctors). \n\nThe technical complexity lay in the **Real-Time Scheduling Engine**. We had to ensure that doctor availability slots were synchronized instantly across all user devices to prevent 'Double Booking' (two patients booking the same 2:00 PM slot simultaneously). Additionally, handling sensitive 'Prescription Uploads' required strict data privacy compliance.",
    solution: "I built the mobile application using **React Native with Expo** to ensure rapid deployment. I architected the scheduling system using **Firebase Realtime Database** to handle 'Slot Locking'—meaning the moment a user selects a time, it is temporarily frozen for others. \n\nFor the consultation feature, I integrated a **Video Conferencing SDK** that allows seamless in-app video calls without users needing to leave the platform. The 'Drug Cart' uses Redux for global state management, persisting the user's order even if the app is closed.",
    features: [
      "Cross-Platform Mobile Architecture (iOS/Android)",
      "Real-Time Doctor Consultation Scheduling (Slot Locking)",
      "In-App Video Calling for Telemedicine",
      "Digital Prescription Upload & Verification",
      "Geo-Location Tracking for Drug Delivery"
    ],
    gallery: [
      "https://res.cloudinary.com/dmhvsyzch/image/upload/v1766847613/Screenshot_20250915_040239_BukaDose-App_h52bsp.jpg",
      "https://res.cloudinary.com/dmhvsyzch/image/upload/v1766847605/Screenshot_20250915_040217_BukaDose-App_mlfwga.jpg"
    ]
  },




  {
    id: 8,
    title: "SafeQly Mobile",
    subtitle: "Secure Escrow Wallet & Transaction App",
    category: "Mobile App / Fintech",
    banner: "https://media.licdn.com/dms/image/v2/D4D22AQF5uakLoVsnZQ/feedshare-shrink_1280/B4DZsBa2UvJQAg-/0/1765255374298?e=1768435200&v=beta&t=xF6VVypeoOtoE8II2g9gf8nQEF3iepyUQEkY85L40bg",
    liveLink: "https://expo.dev/preview/update?message=notifcation+done%2C%2C+raise+dispute+in+progress&updateRuntimeVersion=1.0.0&createdAt=2025-12-09T04%3A08%3A03.294Z&slug=exp&projectId=11ecc7c7-f57b-4a64-b571-84bdc76a6efa&group=c830a22c-806c-43e0-a974-c92940171a86",
    repoLink: "https://github.com/au-lex?tab=repositories",
    client: "Internal Venture",
    timeline: "3 Weeks",
    role: "Lead Mobile Engineer",
    stack: [
      { icon: SiReact, name: "React Native" },
      { icon: SiExpo, name: "Expo CLI" },
      { icon: SiAndroid, name: "Android" },
      { icon: FaFingerprint, name: "Biometric Auth" },
      { icon: SiTailwindcss, name: "NativeWind" },
    ],
    challenge: "While the Web App handles the heavy dashboard logic, the Mobile App needed to focus on **Speed and Security**. The challenge was implementing a 'Trustless' login experience that feels as fast as a banking app but remains secure. We needed to replace typed passwords with **Biometric Authentication** (Fingerprint/FaceID) and ensure that 'Transaction Alerts' (Push Notifications) arrived instantly, even when the app was killed in the background.",
    solution: "I built the mobile architecture using **React Native with Expo** for rapid iteration. I implemented **Biometric Logic** using `expo-local-authentication` to secure the wallet layer, allowing users to approve transactions with just a fingerprint. \n\nFor state management, I used **Zustand** with persistent storage to cache the user's balance locally (encrypted), ensuring the app loads instantly while fetching fresh data in the background. I also set up a **Push Notification Service** that listens for Webhook events from the Go backend.",
    features: [
      "Biometric Authentication (FaceID / Fingerprint)",
      "Instant Push Notifications for Updates",
      "Encrypted Local Storage for Privacy",
      "Native Share Sheet Integration",
      "Offline Mode for Viewing History"
    ],
    gallery: [
      "https://media.licdn.com/dms/image/v2/D4D22AQFCPIoEcvXu3A/feedshare-shrink_2048_1536/B4DZsBa2f6GwAk-/0/1765255375031?e=1768435200&v=beta&t=YxpzGXcWZOQxhjnrU7evNv-mNGM-8W5Zcs5CqGvw9gk",
      "https://media.licdn.com/dms/image/v2/D4D22AQEMj3Am8yGI_g/feedshare-shrink_1280/B4DZr6aFgfGwAc-/0/1765137733847?e=1768435200&v=beta&t=PaYFW1NzbQ1qOtxLkVx-kJztAd6QX4gFHkinMqh7VM8"
    ]
  },
  {
    id: 9,
    title: "Xnria Mobile",
    subtitle: "Mobile Dashboard for Fashion Designers",
    category: "Mobile App / E-commerce",
    banner: "https://res.cloudinary.com/dmhvsyzch/image/upload/v1766851134/Screen_Shot_2025-12-27_at_16.51.17_gk7n2y.png",
    liveLink: "https://drive.google.com/file/d/1FHssanbU0zy1QL46g7uMr5QEYrdjRd-x/view?usp=sharing",
    repoLink: "https://github.com/au-lex?tab=repositories-mobile",
    client: "Startup Venture",
    timeline: "4 Weeks",
    role: "Lead Mobile Engineer",
    stack: [
      { icon: SiReact, name: "React Native" },
      { icon: SiExpo, name: "Expo" },
      { icon: FaCamera, name: "Camera API" },
      { icon: SiFirebase, name: "Firebase Cloud Msg" },
    ],
    challenge: "Fashion designers are rarely at a desk; they are in the studio or sourcing fabrics. The Web Dashboard was too cumbersome for daily operations. The challenge was to condense the complex **Order Management System (OMS)** into a mobile experience. \n\nSpecifically, designers needed a way to upload 'Work in Progress' photos directly from their phone camera to client orders, requiring seamless **Native Camera Integration** and image compression algorithms to save bandwidth.",
    solution: "I developed the Xnria Manager app to serve as a 'Pocket Studio.' I utilized the **Native Camera API** to allow designers to snap photos of fabrics or finished dresses and attach them directly to specific Order IDs. \n\nI implemented an **Image Optimization Pipeline** that compresses these high-res phone photos on the device before uploading to AWS S3, reducing data usage by 60%. The app also features a 'Quick-Reply' chat system that overlays on other apps.",
    features: [
      "Native Camera Integration for Progress Uploads",
      "Real-time Order Status Updates",
      "Client Chat with Push Notifications",
      "On-Device Image Compression",
      "QR Code Scanner for Inventory Tracking"
    ],
    gallery: [
      "https://res.cloudinary.com/dmhvsyzch/image/upload/v1766851111/Screen_Shot_2025-12-27_at_16.51.42_lotivg.png",
      "https://res.cloudinary.com/dmhvsyzch/image/upload/v1766851098/Screen_Shot_2025-12-27_at_16.52.22_ut7up4.png",
      "https://res.cloudinary.com/dmhvsyzch/image/upload/v1766851076/Screen_Shot_2025-12-27_at_16.52.45_zp3dqs.png"
    ]
  },

  {
    id: 11, 
    title: "Verse",
    subtitle: "High-Performance Offline Bible Reader",
    category: "EdTech / Mobile App",
    banner: "https://your-image-source.com/verse-banner.jpg", 
    liveLink: "https://expo.dev/preview/update?message=full+app+done&updateRuntimeVersion=1.0.0&createdAt=2025-08-15T02%3A54%3A23.282Z&slug=exp&projectId=76b8965a-5547-47d5-8b8d-f156f20d9a28&group=b7649382-322c-4ead-a16f-892a504cc6cd",
    repoLink: "https://github.com/au-lex/Verse",
    client: "Personal Project",
    timeline: "3 Weeks",
    role: "Lead Mobile Engineer",
    stack: [
      { icon: SiReact, name: "React Native" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiExpo, name: "Expo" },
      { icon: SiPostgresql, name: "SQLite (Local Storage)" },
      { icon: SiTailwindcss, name: "NativeWind" },
    ],
    challenge: "The primary challenge was managing **large-scale text rendering and offline availability**. Standard mobile views struggle with performance when rendering entire biblical chapters (some with over 100 verses) while maintaining smooth scrolling. Additionally, the app needed to function in 'Flight Mode,' requiring a robust caching strategy that stores fetched books locally without bloating the device's storage.",
    solution: "I implemented a **Local First Architecture** using SQLite for persistent storage of downloaded versions. To ensure smooth performance, I utilized **FlashList** for optimized list virtualization, ensuring only visible verses are rendered in memory. \n\nFor the search functionality, I built a local indexing system that allows users to query keywords across all 66 books in milliseconds. The UI uses a 'Skeleton Loading' pattern to provide immediate visual feedback while the text engine parses the structured JSON data into formatted verses.",
    features: [
      "Offline Reading with Auto-Caching Engine",
      "Cross-Book Global Search Index",
      "Dynamic Font Scaling & Dark Mode Support",
      "Chapter-based Progress Tracking",
      "High-Performance Virtualized List Rendering"
    ],
    gallery: [
      "https://your-image-source.com/verse-screen-1.jpg",
      "https://your-image-source.com/verse-screen-2.jpg"
    ]
  },


  {
    id: 10,
    title: "Knvas",
    subtitle: "AI-Driven Scholarship Discovery & Application App",
    category: "EdTech / Mobile App",
    banner: "https://res.cloudinary.com/dmhvsyzch/image/upload/v1766847598/Screenshot_20251018_204547_Expo_Go_hbhhmh.jpg",
    liveLink: "https://play.google.com/store/apps/details?id=com.knvas.app",
    repoLink: "https://github.com/au-lex?tab=repositories",
    client: "EdTech Startup",
    timeline: "5 Weeks",
    role: "Lead Mobile Engineer",
    stack: [
      { icon: SiReact, name: "React Native" },
      { icon: SiExpo, name: "Expo CLI" },
      { icon: SiAlgolia, name: "Algolia Search" },
      { icon: SiFirebase, name: "Firebase Backend" },
      { icon: FaFilter, name: "Matching Logic" },
    ],
    challenge: "The biggest problem in the scholarship space isn't a lack of funding—it's 'Discovery Fatigue.' Students are overwhelmed by thousands of irrelevant listings. \n\nThe engineering challenge was building a **Relevance Engine**: How do we map a student's complex profile (GPA, Major, Ethnicity, Interests) against thousands of scholarship criteria in real-time? We needed to filter out the noise so a Computer Science student never sees a Culinary Arts grant.",
    solution: "I built a **Personalized Matching Algorithm** using specific user tags. When a student onboards, they select filtered 'Interests' and demographic data. I implemented **Algolia** to index the scholarship database, allowing for millisecond-fast fuzzy searching and filtering based on these tags. \n\nThe app features a 'Swipe-to-Save' interface (tinder-style) to make discovery engaging. I also built a **Deadline Notification System** using local scheduling to alert students 24 hours before an application closes.",
    features: [
      "Interest-Based Scholarship Recommendation Engine",
      "Real-time Search & Filtering (Algolia)",
      "Application Status Tracking (Applied, Pending, Won)",
      "Automated Deadline Reminders",
      "In-App Essay Drafting & Saving"
    ],
    gallery: [
      "https://res.cloudinary.com/dmhvsyzch/image/upload/v1766847598/Screenshot_20251018_204547_Expo_Go_hbhhmh.jpg",
      "https://res.cloudinary.com/dmhvsyzch/image/upload/v1766847589/Screenshot_20251011_000447_knvas_career_hub_crhj24.jpg",
    ]
  }
];