export const portfolioData = {
  personalInfo: {
    name: "Adhiraj Singh",
    title: "Full Stack Developer",
    subtitle: "MERN Stack Specialist",
    bio: "Dynamic software developer excelling in MERN Stack. Adept at project management and system debugging, delivering innovative solutions that enhance user experience.",
    email: "adhirajsingh00000@gmail.com",
    phone: "+91 8604904661",
    location: "Bengaluru, Karnataka, IN",
    profileImage: "/profile.jpg",
    social: {
      github: "https://github.com/ADHIRAJ00000",
      linkedin: "https://www.linkedin.com/in/adhiraj-singh-bb511127b/",

      email: "adhirajsingh00000@gmail.com"
    }
  },

  education: [
    {
      degree: "Bachelor of Engineering",
      institution: "BMS Institute of Technology & Management",
      field: "Electronics and Telecommunication",
      period: "2023 - Present",
      grade: "CGPA: 7.95",
      current: true
    },
    {
      degree: "ISC (XII)",
      institution: "Shri J.N. Shah Inter College",
      field: "Science",
      period: "2021-2022",
      grade: "91.25%"
    },
    {
      degree: "ICSE (X)",
      institution: "Shri J.N. Shah Inter College",
      field: "General",
      period: "2019-2020",
      grade: "92%"
    }
  ],

  experience: [
    {
      title: "Full Stack Developer",
      company: "Projects & Development",
      description: "Developed multiple MERN stack applications with focus on user experience and performance.",
      period: "2023 - Present",
      achievements: [
        "Built REST APIs and authentication modules",
        "Created responsive dashboards with React",
        "Integrated MongoDB databases efficiently",
        "Deployed applications on cloud platforms"
      ]
    }
  ],

  stats: {
    projectsCompleted: 10,
    technologiesMastered: 15,
    cgpa: 7.95,
    awardsWon: 3
  },

  skills: {
    categories: [
      { id: 'all', label: 'All Skills', icon: 'fa-code' },
      { id: 'frontend', label: 'Frontend', icon: 'fa-desktop' },
      { id: 'backend', label: 'Backend', icon: 'fa-server' },
      { id: 'database', label: 'Database', icon: 'fa-database' },
      { id: 'languages', label: 'Languages', icon: 'fa-code' },
      { id: 'tools', label: 'Tools', icon: 'fa-wrench' },
      { id: 'cs', label: 'CS Fundamentals', icon: 'fa-book' }
    ],
    technical: [
      { name: "React.js", category: "frontend", level: 100, icon: "fab fa-react" },
      { name: "Node.js", category: "backend", level: 100, icon: "fab fa-node" },
      { name: "Express.js", category: "backend", level: 100, icon: "fas fa-server" },
      { name: "MongoDB", category: "database", level: 100, icon: "fas fa-database" },
      { name: "JavaScript", category: "languages", level: 100, icon: "fab fa-js" },
      { name: "Python", category: "languages", level: 100, icon: "fab fa-python" },
      { name: "C++", category: "languages", level: 100, icon: "fas fa-code" },
      { name: "Java", category: "languages", level: 100, icon: "fab fa-java" },
      { name: "HTML/CSS", category: "frontend", level: 100, icon: "fab fa-html5" },
      { name: "Tailwind CSS", category: "frontend", level: 100, icon: "fab fa-css3-alt" },
      { name: "Git/GitHub", category: "tools", level: 100, icon: "fab fa-git-alt" },
      { name: "SQL", category: "database", level: 100, icon: "fas fa-database" },
      { name: "SupaBase", category: "database", level: 100, icon: "fas fa-bolt" },
      { name: "Flask", category: "backend", level: 100, icon: "fas fa-flask" },
      { name: "DSA", category: "cs", level: 100, icon: "fas fa-brain" },
      { name: "System Design", category: "cs", level: 100, icon: "fas fa-project-diagram" },
      { name: "DBMS", category: "cs", level: 100, icon: "fas fa-server" },
      { name: "Operating System", category: "cs", level: 100, icon: "fas fa-desktop" },
      { name: "Computer Networks", category: "cs", level: 100, icon: "fas fa-network-wired" },
      { name: "Redux", category: "frontend", level: 100, icon: "fas fa-layer-group" }
    ]
  },

  projects: [
    {
      title: "Social-Media Platform",
      description: "Full-stack social-media platform with user authentication, post creation, and interaction features.",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Cloudinary"],
      github: "https://github.com/ADHIRAJ00000/Social-Master-Media",
      demo: "https://social-master-media.onrender.com/"
    },
    {
      title: "Convoy-Command-Unit",
      description: "Built a low-power, non-GPS tracking system for army convoys, enabling real-time proximity monitoring and detection for high-value assets.",
      image: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=600&h=400&fit=crop",
      technologies: ["React", "Typescript", "MongoDB", "Express", "Redux"],
      github: "https://github.com/ADHIRAJ00000/Convoy-Command-Unit/tree/main",
      demo: "https://hawkroute2-2-frontend-109n.onrender.com"
    },
    {
      title: "Cloud Implementation on RISC-V",
      description: "Cloud implementation on RISC-V architecture with virtualization, containerization, and cloud storage services.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["React", "Python", "Docker", "Chart.js", "Tailwind CSS"],
      github: "https://github.com/ADHIRAJ00000/cloud-implementation-on-riscv",
       demo: "https://cloud-implementation-on-riscv.onrender.com/"
    }

  ],

  achievements: [
    {
      title: "National Level Hackathon Winner",
      date: "December 2025",
      description: "Developed 'Hawkroute,' a DefenceTech convoy intelligence system for coordination, route planning, and real-time decision support.",
      highlight: "Secured 'Overall Runner-Up' and 'Best Software Team Award'",
      icon: "trophy",
      side: "left"
    },
    {
      title: "HACKHZARDS '25",
      date: "2025",
      description: "Secured Top 100 among 2,900+ teams. Designed a low-power, non-GPS EV battery asset tracking system.",
      highlight: "Top 100 / 2900+ teams",
      icon: "award",
      side: "right"
    },
    {
      title: "State Level Basketball Player ",
      date: "2023",
      description: "Represented the state in basketball competitions, demonstrating leadership and teamwork.",
      highlight: "State Level Recognition",
      icon: "basketball",
      side: "left"
    }
  ]
};
