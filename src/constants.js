// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import free from './assets/company_logo/freelance.png';
import kmlesh from './assets/company_logo/kamlesh.jpg';
import innvoize from './assets/company_logo/innvoize.png';
import grow from './assets/company_logo/grow.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/Baba_Mastnath_University_logo.png';
import bsaLogo from './assets/education_logo/Maharshi_Dayanand_University_logo.png';
import vpsLogo from './assets/education_logo/Vidyasagar_school.png';
import saini from './assets/education_logo/saini-logo.jpg';

// Project Section Logo's
import earninghandle from './assets/work_logo/earning-handle.jpg';
import earningvendor from './assets/work_logo/earning-vendor.jpg';
import earningaffiliate from './assets/work_logo/earning-affiliate.jpg';
import affiliateios from './assets/work_logo/earning-ios.jpg';
import earningandroid from './assets/work_logo/earning-android.jpg';
import bookmyyagna from './assets/work_logo/book-my-yagna.jpg';
import cyber from './assets/work_logo/cyber.jpg';
import maaaa from './assets/work_logo/maaaa.jpg';
import myhrandroid from './assets/work_logo/myhrms.jpg';
import myhrios from './assets/work_logo/myhrios.jpg';
import vid from './assets/work_logo/vid.jpg';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'React Native', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    { id: 0, img: free, role: "Freelance Full Stack & Mobile Developer", company: "Self Employed", date: "Feb 2026 - Present", desc: "Working as a Freelance Full Stack Developer, delivering end-to-end web and mobile solutions for clients across various industries. Responsible for project architecture, frontend and backend development, database design, API integrations, server management, hosting configuration, and deployment. Developed scalable applications using React.js, Next.js, Node.js, Express.js, MongoDB, and React Native. Managed VPS and cloud servers, configured domains, SSL, CI/CD workflows, and handled Android and iOS app publishing on Google Play Console and Apple App Store. Collaborated directly with clients to gather requirements, design solutions, develop features, and ensure successful project delivery from concept to production.", skills: [ "React.js", "Next.js", "React Native", "Node.js", "Express.js", "MongoDB", "TypeScript", "JavaScript", "Redux", "Tailwind CSS", "Material UI", "REST API", "VPS Management", "Linux Server", "Nginx", "PM2", "SSL Configuration", "CI/CD", "Git", "GitHub", "Android Studio", "Xcode", "Google Play Console", "Apple App Store", "Payment Gateway Integration" ], },
    { id: 1, img: kmlesh, role: "Senior React Native Developer", company: "KamleshKhyati InfoSolutions Pvt. Ltd.", date: "Nov 2025 - Feb 2026", desc: "Worked as the primary React Native developer for the MyHrMinds mobile application, handling end-to-end development including UI implementation, API integration, authentication, and business logic. Developed key HRMS modules such as location-based attendance, Aadhaar onboarding through DigiLocker, bank account verification using Penny Drop APIs, and employee management workflows. Collaborated closely with the .NET backend team using Swagger and Postman for API testing and validation. Independently managed the complete mobile application lifecycle, including architecture design, development, debugging, optimization, testing, and deployment, while ensuring secure role-based authentication and a seamless user experience.", skills: [ "React Native", "JavaScript", "Redux", "REST API", "Postman", "Swagger", "OTP Authentication", "DigiLocker Integration", "Location Tracking", "Google Maps", "Android", "iOS", "Git", "VS Code" ], },
    { id: 2, img: innvoize, role: "Senior Full Stack Developer", company: "Innovize Tech Solution Pvt. Ltd.", date: "Oct 2024 - Sep 2025", desc: "Worked as a Senior Full Stack Developer, leading the development of scalable web and mobile applications using React.js, Node.js, Express.js, MongoDB, and React Native. Designed project architectures, authentication systems, and maintainable code structures while mentoring junior developers and enforcing development best practices. Managed GitHub and Bitbucket repositories, performed code reviews, integrated payment gateways, configured hosting environments, and handled end-to-end deployment processes. Published and maintained Android and iOS applications on Google Play Console and Apple App Store, ensuring successful delivery of multiple client projects across web and mobile platforms.", skills: [ "React.js", "React Native", "Node.js", "Express.js", "MongoDB", "Redux", "JavaScript", "Tailwind CSS", "Material UI", "REST API", "Git", "GitHub", "Bitbucket", "Payment Gateway Integration", "Google Play Console", "Apple App Store", "Xcode", "Android Studio" ], },
    { id: 3, img: grow, role: "Senior Frontend Developer", company: "Growwlancer Pvt. Ltd.", date: "Mar 2022 - Aug 2024", desc: "Worked as a Senior Frontend Developer, specializing in React.js application development. Built and maintained scalable, responsive, and high-performance web applications using React.js, Redux, JavaScript, Material UI, and REST APIs. Implemented secure authentication systems, integrated backend services, optimized application performance, and established maintainable project architectures. Collaborated closely with backend teams, conducted API testing using Postman, mentored junior developers, resolved complex UI/UX issues, and managed deployment processes to ensure seamless product delivery.", skills: [ "React.js", "JavaScript", "REST API", "Postman", "Git", "JWT Authentication", "HTML", "CSS" ], }
  ];
  
  export const education = [
   {
  id: 0,
  img: glaLogo,
  school: "Baba Mast Nath University, Rohtak",
  date: "Jul 2025 - Present",
  grade: "Pursuing",
  desc: "Currently pursuing a Master of Computer Applications (MCA) with a specialization in Artificial Intelligence and Machine Learning from Baba Mast Nath University, Rohtak. The program focuses on advanced software development, AI/ML algorithms, data analytics, deep learning, cloud technologies, and modern computing practices. Alongside academics, I actively apply these concepts in real-world web and mobile application development projects, strengthening both my technical expertise and problem-solving skills.",
  degree: "Master of Computer Applications (MCA) - AI & Machine Learning (Pursuing)",
},
    {
  id: 1,
  img: bsaLogo,
  school: "Maharshi Dayanand University (MDU), Rohtak",
  date: "Jul 2021 - Jun 2024",
  grade: "73.2%",
  desc: "Completed a Bachelor of Computer Applications (BCA) from Maharshi Dayanand University (MDU), Rohtak. Gained strong knowledge in software development, programming, database management, web technologies, data structures, and computer networks. Worked on academic and practical projects that enhanced problem-solving abilities and provided hands-on experience in building modern web and mobile applications.",
  degree: "Bachelor of Computer Applications (BCA)",
},
    {
  id: 2,
  img: saini,
  school: "Saini Senior Secondary School, Rohtak",
  date: "Apr 2019 - Mar 2021",
  grade: "94%",
  desc: "Completed Class 12 from Saini Senior Secondary School, Rohtak, under the Haryana Board of School Education (HBSE). Studied Non-Medical stream with Physics, Chemistry, and Mathematics (PCM), developing a strong foundation in analytical thinking and problem-solving.",
  degree: "HBSE (Class XII) - Non-Medical (PCM)",
},
    {
  id: 3,
  img: vpsLogo,
  school: "Vidhya Sagar High School, Rohtak",
  date: "Apr 2018 - Mar 2019",
  grade: "79.8%",
  desc: "Completed Class 10 from Vidhya Sagar High School, Rohtak, under the Haryana Board of School Education (HBSE). Built a strong foundation in core academic subjects and developed analytical and problem-solving skills during my secondary education.",
  degree: "HBSE (Class X)",
},
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Earning Handle Web",
      description:
        "Designed and developed the frontend of an affiliate marketing website, including website architecture, UI sections, color schemes, and responsive layouts. The platform enables users to share referral links and generate network-based commissions through an affiliate marketing model. Focused on creating an intuitive user experience and a professional web interface.",
      image: earninghandle,
      tags: ["HTML", "CSS", "JavaScript","TailwindCSS", "React JS", "API"],
      webapp: "https://earninghandle.com",
    },
    {
      id: 1,
      title: "Earning Handle Vender-Panel",
      description:
        "Developed a Vendor Management Panel using React.js, Material UI, and Redux for state management and authentication. The platform allows vendors to manage their products, track orders, view commission earnings, access ledger reports, update bank details, and handle customer inquiries through the Contact Us module. Built as a SaaS-based affiliate management solution, providing vendors with a centralized dashboard to efficiently manage their business operations and affiliate-related activities.",
      image: earningvendor,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript","Material UI","TailwindCSS"],
      webapp: "https://earninghandle.com/vendor/login",
    },
    {
      id: 2,
      title: "Earning Handle Affiliate",
      description:
        "Developed an Affiliate Management Panel using React.js, Material UI, and Redux with secure authentication and state management. The platform enables affiliates to browse products, track orders, monitor commission earnings, view ledger reports, manage bank account details, and submit support requests through the Contact Us module. Additionally, affiliates can generate custom product slugs, share referral URLs, and create QR codes for product promotion. Built as a SaaS-based affiliate marketing solution, providing affiliates with a centralized dashboard to manage referrals, earnings, and promotional activities efficiently",
      image: earningaffiliate,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript","Material UI", "TailwindCSS"],
      webapp: "https://earninghandle.com/affiliate/",
    },
    {
      id: 3,
      title: "Earning Handle Android-Application",
      description:
        "Developed a complete Vendor and Affiliate Management Platform with both Web and Android applications using React Native and Redux. Implemented secure authentication, state management, and responsive user interfaces. The platform enables vendors to manage products, track orders, monitor commissions, view ledger reports, update bank details, and handle customer inquiries. Affiliates can browse products, track earnings, view commissions and ledgers, manage bank details, generate custom product slugs, create QR codes, and share referral links for promotions. Built as a SaaS-based affiliate marketing ecosystem, providing a centralized dashboard for managing products, referrals, orders, and revenue across web and mobile platforms.",
      image: earningandroid,
      tags: ["React Native", "Firebase"],
      webapp: "https://play.google.com/store/apps/details?id=com.earninghandle&pcampaignid=web_share",
    },
    {
      id: 4,
      title: "Earning Handle IOS-Application",
      description:
        "Developed a complete Vendor and Affiliate Management Platform with both Web and Android applications using React Native and Redux. Implemented secure authentication, state management, and responsive user interfaces. The platform enables vendors to manage products, track orders, monitor commissions, view ledger reports, update bank details, and handle customer inquiries. Affiliates can browse products, track earnings, view commissions and ledgers, manage bank details, generate custom product slugs, create QR codes, and share referral links for promotions. Built as a SaaS-based affiliate marketing ecosystem, providing a centralized dashboard for managing products, referrals, orders, and revenue across web and mobile platforms.",
      image: affiliateios,
      tags: ["React Native", "Firebase" , "cocopods"],
      webapp: "https://apps.apple.com/us/app/earning-handle/id6751747259",
    },
    {
      id: 5,
      title: "Book My Yagna",
      description:
        "Developed a comprehensive religious services platform with Admin, Pandit, and User panels using React.js and modern web technologies. Implemented authentication and role-based access control for all user types. Built core functionalities including Pandit management, Panchang (Hindu calendar) integration, booking management, user dashboards, and administrative controls. Designed and implemented the complete application logic, workflows, and user management system. Integrated Cashfree Payment Gateway for secure online payments and booking transactions, ensuring a seamless experience for users booking religious ceremonies and services.",
      image: bookmyyagna,
      tags: ["HTML", "CSS", "JavaScript", "Framer Motion" , "ReactJS", "Tailwindcss" , "Payment Integration"],
      webapp: "https://bookmyyagna.com/",
    },
    {
      id: 6,
      title: "Cyber Kanun",
      description:
        "Developed and maintained the frontend of a legal services platform using React.js and Tailwind CSS. Designed and implemented the complete website structure, responsive UI components, and user experience. Integrated REST APIs for dynamic content management and data handling. Built and managed the Admin Panel, including content management features, Contact Us management, and rich text editor integration for creating and updating website content. Worked on end-to-end frontend implementation, ensuring performance, scalability, and seamless interaction between the frontend and backend systems.",
      image: cyber,
      tags: ["HTML", "CSS", "JavaScript", "Framer Motion" , "ReactJS", "Tailwindcss"],
      webapp: "https://cyberkanun.com/",
    },
    {
      id: 7,
      title: "Maaa Android-Application",
      description:
        "Developed a complete emergency safety mobile application from scratch using React Native, including both frontend and backend development. Implemented real-time location sharing through SMS, emergency help alerts, and quick-access safety features to assist users during critical situations. Built onboarding and tutorial video modules to guide users through the application, along with integrated in-app games to enhance engagement. Designed and developed the entire application architecture, API integrations, user interface, backend services, and deployment process, ensuring a reliable and user-friendly mobile experience.",
      image: maaaa,
      tags: ["React Native" , "NodeJS" , "MonogoDB" , "GoogleSheet" , "DLT"],
      webapp: "https://play.google.com/store/apps/details?id=com.trendypixel.maaa&pcampaignid=web_share",
    },
    {
      id: 8,
      title: "MyHrMinds Android-Application",
      description:
        "Developed a complete HRMS mobile application using React Native, handling the entire frontend development and API integrations. Implemented employee attendance management, leave management, employee profiles, location-based tracking, push notifications, and real-time data synchronization. Built responsive and user-friendly interfaces for employees and administrators, ensuring smooth workforce management and communication. Collaborated with backend services to integrate authentication, reporting, and employee management features, delivering a scalable and production-ready HR solution for Android and iOS platforms.",
      image: myhrandroid,
      tags: ["React Native", "API", ],
      webapp: "https://play.google.com/store/apps/details?id=com.myhrminds.kamleshkhyatiinfosolution&pcampaignid=web_share",
    },
     {
      id: 9,
      title: "MyHrMinds IOS-Application",
      description:
        "Developed a complete HRMS mobile application using React Native, handling the entire frontend development and API integrations. Implemented employee attendance management, leave management, employee profiles, location-based tracking, push notifications, and real-time data synchronization. Built responsive and user-friendly interfaces for employees and administrators, ensuring smooth workforce management and communication. Collaborated with backend services to integrate authentication, reporting, and employee management features, delivering a scalable and production-ready HR solution for Android and iOS platforms.",
      image: myhrios,
      tags: ["React Native", "API", ],
      webapp: "https://apps.apple.com/us/app/myhrminds/id6762510300",
    },
     {
      id: 9,
      title: "VidhyalaOS - School ERP & Management System",
      description:
        "Developed and maintained a comprehensive School ERP platform using React.js, handling frontend development, API integrations, authentication, and dashboard modules. Built and enhanced various school management features including student management, attendance tracking, fee management, examination modules, staff and payroll management, admissions, academic records, notifications, and role-based dashboards for different users. Implemented responsive user interfaces, data visualization, reporting modules, and seamless communication between frontend and backend systems. Focused on delivering a scalable and user-friendly ERP solution that streamlined administrative, academic, and financial operations for educational institutions.",
      image: vid,
      tags: ["HTML", "CSS", "JavaScript","TailwindCSS", "React JS", "NodeJs","MonogoDB"],
      webapp: "https://vidyalayos.com/#/signin",
    },
  ];  