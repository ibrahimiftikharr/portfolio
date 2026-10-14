export const site = {
  brand: "Hello.",
  name: "Ibrahim",
  fullName: "Ibrahim Iftikhar",
  role: "Full Stack Developer",
  location: "Islamabad",
  timezone: "Asia/Karachi",
  copyright: "© 2026 Ibrahim Iftikhar",
  email: "mailto:ibrahimiftikhar0@outlook.com",
  phone: "+92 330 8274010",
  linkedin: "https://www.linkedin.com/in/",
  github: "https://github.com/ibrahimiftikharr",
  education: "BS Computer Science, COMSATS University Islamabad, CGPA 3.91/4.0",
  aboutHeadline:
    "Hi, I am Ibrahim Iftikhar. I design and build software that is easier for people to use.",
  aboutBody:
    "I studied Computer Science at COMSATS University Islamabad (CGPA 3.91) with three merit awards. I work at BeHope improving how customers interact with our software, and I am applying to Human Computer Interaction to strengthen my research skills around the same problems.",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/ibrahimiftikharr",
      icon: "github" as const,
      color: "#24292F",
    },
    {
      label: "Linkedin",
      href: "https://www.linkedin.com/in/",
      icon: "linkedin" as const,
      color: "#0A66C2",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/ibrahimiftikhr",
      icon: "instagram" as const,
      color: "#E4405F",
    },
  ],
} as const;

export type NavKey =
  | "about"
  | "portfolio"
  | "recommendations"
  | "awards"
  | "experience";

export const navItems: {
  key: NavKey;
  label: string;
  href: string;
  icon: "user" | "grid" | "file" | "award" | "briefcase";
}[] = [
  { key: "about", label: "About Me", href: "/", icon: "user" },
  { key: "portfolio", label: "Portfolio", href: "/portfolio", icon: "grid" },
  {
    key: "recommendations",
    label: "Recommendations",
    href: "/recommendations",
    icon: "file",
  },
  { key: "awards", label: "Awards", href: "/awards", icon: "award" },
  {
    key: "experience",
    label: "Experience",
    href: "/experience",
    icon: "briefcase",
  },
];

export type CaseBlock =
  | { type: "text"; eyebrow?: string; title: string; body: string }
  | {
      type: "image";
      src: string;
      alt: string;
      heading?: string;
      body?: string;
    }
  | {
      type: "split";
      image: { src: string; alt: string; heading?: string };
      text: { eyebrow?: string; title: string; body: string };
      reverse?: boolean;
    }
  | {
      type: "gallery";
      title?: string;
      layout?: "stack" | "grid";
      items: {
        src: string;
        alt: string;
        heading?: string;
      }[];
    }
  | { type: "list"; title: string; items: string[] };

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  eyebrow: string;
  description: string;
  cardImage: string;
  role: string;
  focus: string;
  deliverable: string;
  note?: string;
  blocks: CaseBlock[];
};

export const projects: Project[] = [
  {
    slug: "byacre-rollator",
    title: "ByAcre Rollator Page",
    category: "Product page redesign",
    year: "2026",
    eyebrow: "PRODUCT PAGE REDESIGN / 2026",
    description:
      "BeHope assigned me to redesign its popular ByAcre Rollator product page because the old page made choosing the correct colour and size difficult.",
    cardImage: "/images/projects/byacre-page/after.png",
    role: "UX and UI redesign",
    focus: "E commerce product page",
    deliverable: "Live storefront redesign",
    blocks: [
      {
        type: "image",
        heading: "Old Design",
        src: "/images/projects/byacre-page/before.png",
        alt: "ByAcre product page before redesign",
      },
      {
        type: "list",
        title: "Problems I Found",
        items: [
          "Price was shown in red, so it looked like a warning rather than a normal price.",
          "Shipping claims and product benefits sat in one crowded block.",
          "Colour options used tiny product photos instead of clear swatches.",
          "Size choices showed too much measurement detail at once.",
          "Sections sat too close together, so the page felt hard to scan.",
        ],
      },
      {
        type: "image",
        heading: "New Design",
        src: "/images/projects/byacre-page/after.png",
        alt: "ByAcre product page after redesign",
      },
      {
        type: "list",
        title: "HCI Improvements Made",
        items: [
          "Step 1: see the price clearly, with shipping information nearby.",
          "Step 2: choose a colour using solid swatches that are easy to compare.",
          "Step 3: choose a size without extra measurement clutter in the way.",
          "Step 4: set the quantity.",
          "Step 5: buy with a clear next action.",
        ],
      },
    ],
  },
  {
    slug: "dabster-craft-shop",
    title: "Dabster Craft Shop",
    category: "Client e commerce",
    year: "2024",
    eyebrow: "CLIENT WEBSITE / 2024",
    description:
      "A client needed an online shop for her crafts store. She sells party poppers, decorations, and similar items. I built DapsterCraftShop.com so customers could browse and buy her products more easily.",
    cardImage: "/images/projects/dabster/homepage.png",
    role: "Design and build",
    focus: "Client storefront",
    deliverable: "Live WooCommerce storefront",
    blocks: [
      {
        type: "gallery",
        layout: "stack",
        items: [
          {
            heading: "Homepage",
            src: "/images/projects/dabster/homepage.png",
            alt: "Dabster Craft Shop homepage",
          },
          {
            heading: "Product browsing",
            src: "/images/projects/dabster/shop.png",
            alt: "Dabster Craft Shop listing",
          },
          {
            heading: "Product page",
            src: "/images/projects/dabster/product.png",
            alt: "Dabster Craft Shop product view",
          },
        ],
      },
      {
        type: "image",
        heading: "Website Growth & Results",
        src: "/images/projects/dabster/gsc-traffic.png",
        alt: "Google Site Kit traffic metrics for Dabster Craft Shop",
      },
      {
        type: "text",
        title: "How the Design Connects to Growth",
        body: "Over the last 90 days the site reached about 138,000 search impressions. Clear navigation, readable product pages, and lower visual noise made browsing easier, which supports growth as more people find and use the shop.",
      },
      {
        type: "list",
        title: "HCI Principles",
        items: [
          "Visibility of system status: product and category paths stay clear while browsing.",
          "Recognition over recall: key actions and product details are visible without hunting.",
          "Aesthetic and minimalist design: less clutter so shoppers focus on products.",
          "Consistency and standards: familiar shop patterns for homepage, listing, and product pages.",
        ],
      },
    ],
  },
  {
    slug: "insting-loan",
    title: "Insting Loan Mobile App",
    category: "Mobile app UI",
    year: "2025",
    eyebrow: "MOBILE APP UI / 2025",
    description:
      "Insting Loan is a mobile app concept for borrowing and shopping with installments. I designed the core path from account creation to choosing a loan amount.",
    cardImage: "/images/projects/insting/home-screen.png",
    role: "Mobile UI design",
    focus: "Mobile loan application UI",
    deliverable: "Designed mobile screens",
    blocks: [
      {
        type: "gallery",
        layout: "stack",
        items: [
          {
            heading: "Login and signup",
            src: "/images/projects/insting/login-and-signup-screens.png",
            alt: "Login and sign up screens",
          },
          {
            heading: "Home screen",
            src: "/images/projects/insting/home-screen.png",
            alt: "Home screen with loan categories",
          },
          {
            heading: "Loan application",
            src: "/images/projects/insting/loan-application-page.png",
            alt: "Loan application screen",
          },
        ],
      },
      {
        type: "list",
        title: "HCI Principles",
        items: [
          "Visibility of system status: the main action on each screen is easy to find.",
          "Match between system and real world: loan, shop, and amount language stays plain.",
          "User control and freedom: users can choose preset amounts or type a custom value.",
          "Aesthetic and minimalist design: spacing and contrast stay clear on a phone.",
        ],
      },
    ],
  },
  {
    slug: "byacre-calculator",
    title: "ByAcre Product Size Guide Design",
    category: "Size guide UX",
    year: "2026",
    eyebrow: "SIZE GUIDE / 2026",
    description:
      "This size guide helps customers select the correct ByAcre Rollator variant using their seat or hip measurements. ByAcre has sold about 540 times in the store, so clear sizing matters.",
    cardImage: "/images/projects/byacre-calculator/calculator.png",
    role: "UX improvement",
    focus: "Size guide measurement units",
    deliverable: "Size guide updates",
    blocks: [
      {
        type: "image",
        heading: "Old Design",
        src: "/images/projects/byacre-calculator/seat-width-ft.png",
        alt: "Seat width guide showing measurements in feet",
      },
      {
        type: "text",
        title: "The Problem",
        body: "The original guide displayed seat and hip measurements in feet. Feet is an inappropriate unit for hip measurements and can make the guide feel wrong or uncomfortable. A customer also complained about this issue.",
      },
      {
        type: "image",
        heading: "Customer Feedback",
        src: "/images/projects/byacre-calculator/customer-feedback.png",
        alt: "Customer feedback email about measurement wording",
      },
      {
        type: "text",
        title: "How I Responded",
        body: "I contacted the customer about the complaint, then updated the size guide so seat and hip related measurements use inches instead of feet.",
      },
      {
        type: "image",
        heading: "Improved Design",
        src: "/images/projects/byacre-calculator/calculator.png",
        alt: "Updated size guide with inches selected",
      },
      {
        type: "text",
        title: "Results",
        body: "Using inches matches how people think about body measurements, which follows match between system and real world. Clearer units also improve recognition over recall and help shoppers make a more informed size decision with less discomfort or confusion.",
      },
    ],
  },
  {
    slug: "rentmates",
    title: "RentMates",
    category: "Student housing platform",
    year: "2025 to 2026",
    eyebrow: "STARTUP PLATFORM / 2025 TO 2026",
    description:
      "RentMates is a platform I founded for students seeking shared accommodation abroad, especially during international relocation and visa processes. Students find shared housing and bid directly to landlords, who can accept offers. Admins manage applications in a dedicated dashboard. Students can also access decentralised loans from investors through lending pools, with separate dashboards and location-independent interest rates.",
    cardImage: "/images/projects/rentmates/student-loan.png",
    role: "Founder, design and product",
    focus: "Multi role platform",
    deliverable: "Web platform",
    note: "Seed funding awardee through SSBC incubation.",
    blocks: [
      {
        type: "text",
        title: "User journey",
        body: "The screens below follow the path from sign in into the student flow, then into the other roles that support the same housing process.",
      },
      {
        type: "image",
        heading: "1. Sign in",
        src: "/images/projects/rentmates/sign-in.png",
        alt: "RentMates sign in",
        body: "The user enters the platform. This is the first step before any student, landlord, investor, or admin work begins.",
      },
      {
        type: "image",
        heading: "2. Student loan apply",
        src: "/images/projects/rentmates/student-loan.png",
        alt: "Student dashboard loan apply",
        body: "A student starts a support or loan related request. This is a core student action after signing in.",
      },
      {
        type: "image",
        heading: "3. Student messaging",
        src: "/images/projects/rentmates/student-messaging.png",
        alt: "Student messaging",
        body: "The student communicates about housing or support without leaving the platform.",
      },
      {
        type: "image",
        heading: "4. Student settings",
        src: "/images/projects/rentmates/student-settings.png",
        alt: "Student settings",
        body: "The student manages account details and preferences after using the main student tools.",
      },
      {
        type: "image",
        heading: "5. Landlord dashboard",
        src: "/images/projects/rentmates/landlord.png",
        alt: "Landlord dashboard",
        body: "Landlords manage listings and related housing tasks in a view built only for their role.",
      },
      {
        type: "image",
        heading: "6. Investor portfolios",
        src: "/images/projects/rentmates/investor-portfolios.png",
        alt: "Investor portfolios",
        body: "Investors review portfolio information tied to housing activity on the platform.",
      },
      {
        type: "image",
        heading: "7. Investor notifications",
        src: "/images/projects/rentmates/investor-notifications.png",
        alt: "Investor notifications",
        body: "Investors see updates so they can act on changes without searching through other dashboards.",
      },
      {
        type: "image",
        heading: "8. Admin dashboard",
        src: "/images/projects/rentmates/admin.png",
        alt: "Admin dashboard",
        body: "Admins oversee the system and keep student, landlord, and investor activity organized.",
      },
    ],
  },
  {
    slug: "order-extension",
    title: "Order Placement Extension",
    category: "Browser extension UI",
    year: "2026",
    eyebrow: "OPERATIONS TOOLING / 2026",
    description:
      "I designed a browser extension UI that helps the BeHope operations team place supplier orders from Shopify. The workflow keeps the next step clear and reduces jumping between tools.",
    cardImage: "/images/projects/extension/screen-1.png",
    role: "UI and workflow design",
    focus: "Operations workflow",
    deliverable: "Extension interface",
    blocks: [
      {
        type: "text",
        title: "Workflow overview",
        body: "The screens below follow the real order of work: review the order, place it with a supplier, confirm the record, then check finished work.",
      },
      {
        type: "image",
        heading: "1. Assigned Supplier",
        src: "/images/projects/extension/screen-1.png",
        alt: "Assign suppliers in extension",
        body: "The operator reviews products in an incoming order and assigns each one to a supplier.",
      },
      {
        type: "image",
        heading: "2. Order Placement Options",
        src: "/images/projects/extension/screen-2.png",
        alt: "Order placement options",
        body: "The operator chooses how to place the order, such as Place via Email or mark it as already placed.",
      },
      {
        type: "image",
        heading: "3. Place via Email",
        src: "/images/projects/extension/screen-3.png",
        alt: "Place via email",
        body: "The operator opens a ready email to send the supplier order.",
      },
      {
        type: "image",
        heading: "4. Related record",
        src: "/images/projects/extension/screen-4.png",
        alt: "Zendesk or email association",
        body: "When available, the related Zendesk or email record is opened so the placement stays connected to support history.",
      },
      {
        type: "image",
        heading: "5. Orders tab",
        src: "/images/projects/extension/screen-5.png",
        alt: "Orders tab",
        body: "Finished work is tracked in the Orders tab, separate from open actions.",
      },
      {
        type: "image",
        heading: "6. Timeline",
        src: "/images/projects/extension/screen-6.png",
        alt: "Timeline disclosure",
        body: "The timeline shows the latest step first and keeps older steps available when needed.",
      },
      {
        type: "list",
        title: "HCI Principles",
        items: [
          "Visibility of system status: open work stays in Actions, finished work stays in Orders.",
          "Recognition over recall: the next action is shown instead of forcing operators to remember steps.",
          "Aesthetic and minimalist design: older timeline details stay collapsed until needed.",
        ],
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const recommendations = [
  {
    slug: "tanveer-ahmad",
    title: "Strong algorithms foundation and project initiative",
    name: "Asst. Prof. Tanveer Ahmed",
    role: "Assistant Professor, COMSATS University Islamabad",
    tag: "Recommendation letter, PDF",
    previewImage: "/images/letters/tanveer-1.png",
    pdf: "/docs/recommendation-tanveer-ahmad.pdf",
    filename: "recommendation tanveer ahmad.pdf",
    summary:
      "Recommends Muhammad Ibrahim for graduate study, noting a 4.0/4.0 in Design and Analysis of Algorithms and highlighting the Rent Mates final year project.",
  },
  {
    slug: "malik-ahmad-kamran",
    title: "Academic excellence with applied AI curiosity",
    name: "Dr. Malik Ahmad Kamran",
    role: "Associate Professor, COMSATS University Islamabad",
    tag: "Recommendation letter, PDF",
    previewImage: "/images/letters/kamran-1.png",
    pdf: "/docs/recommendation-malik-ahmad-kamran.pdf",
    filename: "recommendation malik ahmad kamran.pdf",
    summary:
      "Recommends Muhammad Ibrahim based on Graph Theory performance (A, 4.0/4.0) and applied work across AI internship experience and independent projects.",
  },
] as const;

export function getRecommendation(slug: string) {
  return recommendations.find((r) => r.slug === slug);
}

export const awards = [
  {
    year: "2023",
    title: "1st Position, 2nd Semester",
    awardName: "Certificate of Merit, COMSATS University Islamabad",
    details:
      "BS Computer Science. Examination held June 2023. Issued Sept 20, 2023.",
    image: "/images/awards/merit-1.png",
    pdf: "/docs/awards-merit.pdf",
  },
  {
    year: "2024",
    title: "1st Position, 3rd Semester",
    awardName: "Certificate of Merit, COMSATS University Islamabad",
    details:
      "BS Computer Science. Examination held January 2024. Issued March 22, 2024.",
    image: "/images/awards/merit-2.png",
    pdf: "/docs/awards-merit.pdf",
  },
  {
    year: "2025",
    title: "1st Position, 5th Semester",
    awardName: "Certificate of Merit, COMSATS University Islamabad",
    details:
      "BS Computer Science. Examination held January 2025. Issued March 27, 2025.",
    image: "/images/awards/merit-3.png",
    pdf: "/docs/awards-merit.pdf",
  },
  {
    year: "2025",
    title: "2nd Runner Up, Mobile App Dev",
    awardName: "COMSICON 2025, COMSATS University Islamabad",
    details:
      "Certificate of Achievement, Mobile Application Development, 23 April 2025.",
    image: "/images/awards/competition-1.png",
    pdf: "/docs/awards-competition.pdf",
  },
  {
    year: "2025",
    title: "Most Active Member",
    awardName: "GDGoC CUI, Generative AI Team",
    details:
      "Certificate of Appreciation for outstanding contributions during session 2024 to 2025. Issued July 4, 2025.",
    image: "/images/awards/competition-2.png",
    pdf: "/docs/awards-competition.pdf",
  },
] as const;

export const experience = [
  {
    dates: "March 2026 to Present",
    location: "The Ark, I 8 Markaz, Islamabad",
    role: "Full Stack Web Developer (Onsite)",
    organization: "BeHope, Canadian Healthcare Company",
    logo: "/images/logos/behope.jpg",
    points: [
      "Improve how customers interact with BeHope software, including product pages and tools used in daily operations.",
      "Built a RAG based AI assistant for product recommendations, queries, and delivery tracking.",
      "Built automation that places Shopify supplier orders and checks confirmations.",
      "Built an invoicing flow that reads supplier invoices, applies tax rules, and syncs entries with QuickBooks.",
    ],
  },
  {
    dates: "Nov 2025 to Feb 2026",
    location: "SSBC CUI, Park Road, Islamabad",
    role: "Founder and Incubated Startup, Seed Funding Awardee",
    organization: "RentMates, SSBC Incubation Program",
    logo: "/images/logos/rentmates.jpg",
    points: [
      "Founded a startup translating an academic project into a blockchain powered student housing platform.",
      "Designed smart contract rental agreements and a decentralized lending mechanism to expand housing access for underbanked international students.",
      "Pitched to an industry evaluation panel and secured seed funding through a competitive university incubation program.",
    ],
  },
  {
    dates: "Sept 2025 to Oct 2025",
    location: "NCAI",
    role: "Artificial Intelligence Lead Intern",
    organization: "Medical Imaging and Diagnostic Lab, NCAI",
    logo: "/images/logos/midl.jpg",
    points: [
      "Designed an agentic AI data pipeline for SearchDr to aggregate, standardize, and verify doctor profile data at scale.",
      "Built a ranking algorithm using specialization, proximity, and availability to improve recommendation relevance.",
    ],
  },
  {
    dates: "July 2024 to Aug 2024",
    location: "I 8 Markaz, Islamabad",
    role: "Machine Learning Intern",
    organization: "Binary Soft Solutions",
    logo: "/images/logos/binary.jpg",
    points: [
      "Designed and trained ML models to predict energy consumption, improving distribution and resource planning.",
      "Gained hands on experience with Python, Scikit learn, Pandas, and time series analysis.",
    ],
  },
  {
    dates: "Sept 2022 to Present",
    location: "Federal Capital, Pakistan",
    role: "Bachelor of Science in Computer Science, CGPA 3.91/4.0",
    organization: "Comsats University Islamabad",
    logo: "/images/logos/comsats.jpg",
    points: [
      "Relevant Coursework: Data Structures, Algorithms and Analysis, Machine Learning, Linear Algebra",
    ],
  },
] as const;
