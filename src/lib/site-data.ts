export const site = {
  name: "Mehrshad Baqerzadegan",
  photo: "/photo.jpg",
  title: "Full-Stack Software Engineer",
  tagline: "Open to relocation · Visa sponsorship welcome",
  location: "Tehran, Iran",
  email: "MehrshadBaqerzadegan@gmail.com",
  phone: "(+98) 911-151-3303",
  links: {
    linkedin: "https://linkedin.com/in/mehrshad-baqerzadegan",
    website: "https://mehrshadb.ir",
    github: "https://github.com/ducksonmoon",
  },
  summary:
    "Full-Stack Software Engineer with 6+ years building enterprise and product web applications. At System Group I work across the full stack of Rahkaran ERP — an Angular micro-frontend monorepo with 400+ packages and a C#/.NET 8 layered backend. For the past two years I have been the primary engineer on the Human Capital Management Performance Management module, owning everything from SQL Server and C# business logic through ASP.NET Core REST APIs to Angular UI. Before System Group I co-built Nebig, a Persian book social platform, as a full-stack engineer.",
  skillGroups: [
    {
      label: "Languages",
      items: ["TypeScript", "JavaScript", "C#", "Python", "SQL", "HTML5", "CSS3"],
    },
    {
      label: "Frontend",
      items: [
        "Angular",
        "RxJS",
        "AG Grid Enterprise",
        "ApexCharts",
        "React",
        "RTL/i18n",
      ],
    },
    {
      label: "Backend",
      items: [
        ".NET 8",
        "ASP.NET Core",
        "SQL Server",
        "REST API Design",
        "Django REST Framework",
      ],
    },
    {
      label: "Architecture",
      items: [
        "Micro-frontends",
        "State Machines",
        "Dual API Gateways",
        "Monorepo",
        "Validation Pipelines",
      ],
    },
    {
      label: "Tools",
      items: [
        "Git",
        "Azure DevOps",
        "Docker",
        "Jest",
        "Cypress",
        "Prisma",
        "PostgreSQL",
        "Redis",
      ],
    },
  ],
  experience: [
    {
      company: "System Group",
      location: "Tehran, Iran",
      role: "Full-Stack Software Engineer",
      period: "2021 – Present",
      context:
        "Enterprise ERP vendor — Rahkaran is a large-scale HR and business management platform serving mid-to-large organizations.",
      intro:
        "Built and shipped full-stack features for Rahkaran ERP across SQL Server and C# business logic, ASP.NET Core REST APIs, and Angular micro-frontend UI — serving both ERP administrators and employees through a self-service portal.",
      sections: [
        {
          title: "Performance Management System",
          highlights: [
            "Primary engineer on the Performance Management module for over two years, owning the full stack within a 400+ package enterprise monorepo.",
            "Implemented state machine-driven workflow forms — agreement transitions, expectation and key result CRUD, SMART and OKR goal models, and validation pipelines.",
            "Built multi-step evaluation forms with dynamic navigation and UI logic that adapts based on workflow state.",
            "Built an analytics pipeline end-to-end — C# report services, ASP.NET Core REST endpoints, and Angular dashboards with ApexCharts.",
            "Designed a dual API gateway architecture — one shared C# business layer exposed through two REST surfaces with distinct permission models.",
            "Published a shared Angular npm package for the appraisal module, exposing reusable components through TypeScript contract interfaces.",
            "Fixed 80+ production defects across six release versions between the on-premise ERP and the employee portal.",
          ],
        },
        {
          title: "Attendance Management System",
          highlights: [
            "Built server-side Angular report views with grid pagination and date-range filtering on the employee self-service portal.",
            "Implemented card-to-employee device assignment, group leave balance management, permission request modals, and manual attendance tracking — with feature parity across ERP and portal.",
          ],
        },
        {
          title: "Platform & Infrastructure",
          highlights: [
            "Resolved 15+ shared infrastructure bugs in AG Grid Enterprise, entity selectors, and RTL Excel export across the monorepo.",
            "Set up ESLint and Husky pre-commit hooks for the appraisal Angular module.",
            "Conducted code reviews and delivered Tech Talks across HCM and infrastructure teams.",
          ],
        },
      ],
    },
    {
      company: "Nebig",
      location: "Mazandaran, Iran",
      role: "Full-Stack Engineer",
      period: "2019 – 2021",
      context:
        "Persian book social platform (Goodreads-style for the Iranian market) — Django REST API, React PWA, and Flutter client on Liara Cloud.",
      highlights: [
        "Designed and implemented the full API surface across user, book, review, and book list modules with social reading features.",
        "Built a book data ingestion pipeline using BeautifulSoup and Celery to populate a catalog from 50+ external Persian book sources.",
        "Modeled a PostgreSQL schema for 20+ entities and tuned queries on an 8-million-record database to under 200 ms.",
        "Implemented invitation-only onboarding with email verification, referral system, and Google OAuth via django-allauth.",
        "Co-built a React PWA with service-worker caching; maintained 80% test coverage across Django REST endpoints.",
      ],
    },
  ],
  projects: [
    {
      name: "X-SME",
      year: "2024",
      stack: "React · Express · Prisma · PostgreSQL · Redis · Socket.IO · Docker",
      description:
        "Full-stack embeddable booking platform for service businesses — multi-business admin dashboard, staff scheduling, role-based access, and a Persian Jalali calendar. Integrates three payment gateway REST APIs with webhook handling and SMS/Telegram reminders.",
    },
    {
      name: "People ATS",
      stack: "React · Express · Prisma · PostgreSQL · JWT · Shadcn/ui · React Query · Zustand",
      description:
        "Applicant tracking system with job postings, candidate pipeline management, file uploads, and JWT authentication. Modern React frontend with Shadcn/ui and React Query.",
    },
    {
      name: "Iranian E-Commerce Store",
      stack: "Next.js 15 · Prisma · PostgreSQL · NextAuth · AWS S3 · Tailwind",
      description:
        "Persian RTL online store with product catalog, cart, order management, locale-aware address system, multiple shipping providers, and localized payment checkout.",
    },
    {
      name: "University Appraisal Dashboard",
      stack: "Next.js · Prisma · SQLite · bcrypt",
      description:
        "Analytics dashboard for faculty performance evaluation — educational, research, and executive scoring with interactive charts, faculty comparison views, and role-based access for Admin, Manager, and Viewer.",
    },
  ],
  education: {
    degree: "B.Sc. in Computer Science",
    school: "University of Science and Technology of Mazandaran",
  },
  certifications: [
    "ICPC Asia Tehran Regional Contest — 19th Place, May 2023",
  ],
  note: "Available for relocation and visa sponsorship.",
} as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "/resume.pdf" },
] as const;
