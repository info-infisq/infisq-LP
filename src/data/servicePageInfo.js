export const services = [
  {
    id: "1",
    title: "Web Application Development",
    img: "/imgs/service section/wdicon.png",
    path: "/service/webDevelopment",
  },
  {
    id: "2",
    title: "Industry-Ready Courses & Internships",
    img: "/imgs/service section/inicon.png",
    path: "/service/internship",
  },
  {
    id: "3",
    title: "Data & Business Analytics",
    img: "/imgs/service section/daicon.png",
    path: "/service/dataAnalytics",
  },
  {
    id: "4",
    title: "Digital Marketing & Social Media",
    img: "/imgs/service section/dmicon.png",
    path: "/service/digitalMarketing",
  },
];

export const servicesData = {
  webDevelopment: {
    title: "Web Application Development",
    subtitle: "For startups & small-to-mid scale businesses",
    description:
      "Designed for early-stage startups and growing companies, our web development services help you launch stable, efficient products without unnecessary complexity. We focus on clean architecture, performance, and scalability so your application grows with your business.",
    features: [
      "Native and hybrid web applications",
      "Scalable backend systems",
      "Secure authentication & APIs",
      "Smart chatbots for automation and customer support",
    ],
    imgUrl: "/imgs/service_main/Web_Application.png",
    techData: {
      Frontend: [
        { name: "HTML5", icon: "/imgs/tech_service/html5.png" },
        { name: "CSS3", icon: "/imgs/tech_service/css.png" },
        { name: "Tailwind CSS", icon: "/imgs/tech_service/Tailwind_CSS.png" },
        { name: "JavaScript", icon: "/imgs/tech_service/javascript.png" },
        { name: "TypeScript", icon: "/imgs/tech_service/TS_type_script.png" },
        { name: "React.js", icon: "/imgs/tech_service/react.png" },
        { name: "Next.js", icon: "/imgs/tech_service/Nextjs.png" },
      ],
      Backend: [
        { name: "Node.js", icon: "/imgs/tech_service/node_js.png" },
        { name: "Express", icon: "/imgs/tech_service/express_js.png" },
        { name: "NestJs", icon: "/imgs/tech_service/NestJS.png" },
        { name: "Django", icon: "/imgs/tech_service/django.png" },
        { name: "FastAPI", icon: "/imgs/tech_service/FastAPI.png" },
      ],
      Database: [
        { name: "PostgreSQL", icon: "/imgs/tech_service/postgresql.png" },
        { name: "MySQL", icon: "/imgs/tech_service/mysql.png" },
        { name: "MongoDB", icon: "/imgs/tech_service/mongodb.png " },
        { name: "Redis", icon: "/imgs/tech_service/Redis.png" },
      ],
      // Security: [
      //   { name: "JWT", icon: "/imgs/service section/postgres.png" },
      //   { name: "OAuth 2.0", icon: "/imgs/service section/postgres.png" },
      //   {
      //     name: "Role-Based Access Control (RBAC)",
      //     icon: "/imgs/service section/postgres.png",
      //   },
      //   { name: "HTTPS", icon: "/imgs/service section/postgres.png" },
      //   { name: "CORS", icon: "/imgs/service section/postgres.png" },
      //   { name: "Rate limiting", icon: "/imgs/service section/postgres.png" },
      // ],
      // Integration: [
      //   { name: "REST APIs", icon: "/imgs/service section/postgres.png" },
      //   { name: "Webhooks", icon: "/imgs/service section/postgres.png" },
      //   {
      //     name: "Third-party API ",
      //     icon: "/imgs/service section/postgres.png",
      //   },
      // ],
      // DevOps: [
      //   { name: "Docker", icon: "/imgs/service section/postgres.png" },
      //   { name: "GitHub (CI/CD)", icon: "/imgs/service section/postgres.png" },
      //   { name: "Nginx", icon: "/imgs/service section/postgres.png" },
      //   { name: "AWS", icon: "/imgs/service section/postgres.png" },
      // ],
    },
  },

  internship: {
    title: "Industry-Ready Software Courses & Internships",
    subtitle: "For college students & fresh graduates",
    description:
      "Our programs focus on hands-on coding, live projects, and real industry workflows, guided by experienced engineers who work on production systems every day.",
    features: [
      "Python Full Stack & MERN Stack",
      "Data Analytics & Core Programming",
      "Realtime project-based internships",
      "Career guidance and mentoring",
    ],
    imgUrl: "/imgs/service_main/Internships.png",
    techData: {
      ProgrammingLanguages: [
        { name: "Python", icon: "/imgs/tech_service/Python.png" },
        { name: "JavaScript", icon: "/imgs/tech_service/javascript.png" },
      ],
      Frameworks: [
        { name: "React.js", icon: "/imgs/tech_service/react.png" },
        { name: "Node.js", icon: "/imgs/tech_service/node_js.png" },
        { name: "Django", icon: "/imgs/tech_service/django.png" },
        { name: "FastAPI", icon: "/imgs/tech_service/FastAPI.png" },
      ],
      Database: [
        { name: "MongoDB", icon: "/imgs/tech_service/mongodb.png" },
        { name: "MySQL", icon: "/imgs/tech_service/mysql.png" },
        { name: "PostgreSQL", icon: "/imgs/tech_service/postgresql.png" },
      ],
      Tools: [
        { name: "Git & GitHub", icon: "/imgs/tech_service/GitHub.png" },
        { name: "VS Code", icon: "/imgs/tech_service/VS_code.png" },
        { name: "Postman", icon: "/imgs/tech_service/postman.png" },
      ],
    },
  },

  digitalMarketing: {
    title: "Digital Marketing & Social Media Marketing",
    subtitle: "For small scale businesses",
    description:
      "We help businesses build a meaningful online presence using practical, data-driven strategies—not empty buzzwords. Our goal is to help you reach the right audience and convert visibility into real results.",
    features: [
      "SEO-friendly content strategy",
      "Social media growth campaigns",
      "Brand awareness & leads generation",
      "Performance tracking with clear insights",
    ],
    imgUrl: "/imgs/service_main/Digital_Marketing.png",
    techData: {
      ContentTools: [
        {
          name: "Google Search Console",
          icon: "/imgs/tech_service/google_search_console.png",
        },
        {
          name: "Google Analytics (GA4)",
          icon: "/imgs/tech_service/Google_Analytics.png",
        },
        // {
        //   name: "Keyword research tools (industry standard)",
        //   icon: "/imgs/tech_service/GitHub.png",
        // },
      ],
      MarketingPlatforms: [
        {
          name: "Meta Ads (Facebook & Instagram)",
          icon: "/imgs/tech_service/Google_Analytics.png",
        },
        { name: "Google Ads", icon: "/imgs/tech_service/Google_Ads.png" },
      ],
      SocialMediaManagement: [
        { name: "Instagram", icon: "/imgs/tech_service/instagram.png" },
        { name: "Facebook", icon: "/imgs/tech_service/facebook.png" },
        { name: "LinkedIn", icon: "/imgs/tech_service/linkedin.png" },
      ],
    },
  },

  dataAnalytics: {
    title: "Data & Business Analytics",
    subtitle: "For small businesses seeking clarity",
    description:
      "Our analytics solutions are built for organizations that want understanding, not complexity. We transform raw data into simple, meaningful dashboards and actionable insights that support better decisions and smarter planning.",
    features: [
      "Business performance dashboards",
      "Sales & marketing analytics",
      "Data visualization & reporting",
      "Growth-focused insights",
    ],
    imgUrl: "/imgs/service_main/Data_Business_Analytics.png",
    techData: {
      DataAnalysis: [
        {
          name: "Python (Pandas, NumPy)",
          icon: "/imgs/tech_service/Python.png",
        },
        { name: "SQL", icon: "/imgs/tech_service/mysql.png" },
      ],
      Visualization: [
        { name: "Power BI", icon: "/imgs/tech_service/Power_Bi.png" },
        { name: "Tableau", icon: "/imgs/tech_service/Tableau.png" },
        {
          name: "Custom dashboards (React + Charts)",
          icon: "/imgs/tech_service/react.png",
        },
      ],
      database: [
        { name: "MongoDB", icon: "/imgs/tech_service/mongodb.png" },
        { name: "MySQL", icon: "/imgs/tech_service/mysql.png" },
        { name: "PostgreSQL", icon: "/imgs/tech_service/postgresql.png" },
        // { name: "CSV", icon: "/imgs/tech_service/GitHub.png" },
        // { name: "Excel", icon: "/imgs/tech_service/GitHub.png" },
      ],
      Reporting: [
        { name: "KPI tracking", icon: "/imgs/tech_service/KPI_tracking.png" },
        // { name: "Trend analysis", icon: "/imgs/tech_service/GitHub.png" },
        //  {
        //   name: "Growth & performance metrics",
        //   icon: "/imgs/service section/postgres.png",
        // },
      ],
    },
  },
};

export const techData = {};
