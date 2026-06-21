import {
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaDatabase,
  FaLinkedin, FaGithub, FaCode, FaHackerrank, FaExternalLinkAlt, FaDownload,
  FaTrophy, FaCertificate, FaBriefcase, FaGraduationCap, FaStar,
  FaEnvelope, FaUser, FaPaperPlane, FaMoon, FaSun, FaBars, FaTimes, FaCheckCircle
} from 'react-icons/fa';
import {
  SiJavascript, SiTypescript, SiC, SiMysql, SiSpring, SiSpringsecurity,
  SiExpress, SiFlask, SiMongodb, SiPostman, SiVscodium, SiSap
} from 'react-icons/si';
import { TbBrandTailwind } from 'react-icons/tb';
import { BiCodeCurly } from 'react-icons/bi';
import { FaCloud, FaMedal } from 'react-icons/fa6';

// Navigation Links
export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Profiles', href: '#profiles' },
  { name: 'Contact', href: '#contact' },
];

// Social Links
export const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/RitheeshMuplam',
    icon: FaLinkedin,
    color: '#0A66C2',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/MuplamRitheesh',
    icon: FaGithub,
    color: '#181717',
  },
  {
    name: 'LeetCode',
    href: 'https://leetcode.com/u/Ritheesh_M/',
    icon: FaCode,
    color: '#FFA116',
  },
  {
    name: 'HackerRank',
    href: 'https://www.hackerrank.com/profile/rithishreddy3',
    icon: FaHackerrank,
    color: '#00EA64',
  },
];

// Hero Section Data
export const heroData = {
  name: 'M Ritheesh',
  titles: [
    'Java Full Stack Developer',
    'Aspiring Software Engineer',
    'Problem Solver',
    'AI Enthusiast',
  ],
  resumeUrl: 'https://drive.google.com/file/d/1VI3F8P83SHY_hfntv0SolDTyirvTHPr3/view?usp=drivesdk',
  profileImage: 'images/profile.jpeg',
};

// About Section Data
export const aboutData = {
  title: 'About Me',
  description: `I'm a passionate B.Tech Computer Science student with a strong foundation in full-stack development.
    With a CGPA of 9.53, I've developed expertise in Java, Spring Boot, React.js, and the MERN stack.
    I love solving complex problems and building innovative applications that make a real impact.
    My interests span across AI/ML, cloud computing, and creating seamless user experiences.`,
  highlights: [
    { label: 'CGPA', value: '9.53' },
    { label: 'Problems Solved', value: '350+' },
    { label: 'Projects', value: '10+' },
    { label: 'Certifications', value: '5+' },
  ],
  stats: [
    { number: 250, suffix: '+', label: 'Problems Solved' },
    { number: 8, suffix: '+', label: 'Projects Built' },
    { number: 5, suffix: '+', label: 'Certifications' },
    { number: 1, suffix: '', label: 'Years Coding' },
  ],
};

// Skills Data
export const skillsData = {
  languages: [
    { name: 'Java', icon: FaJava, level: 95 },
    { name: 'JavaScript', icon: SiJavascript, level: 90 },
    { name: 'TypeScript', icon: SiTypescript, level: 85 },
    { name: 'Python', icon: FaPython, level: 80 },
    { name: 'C', icon: SiC, level: 75 },
    { name: 'SQL', icon: SiMysql, level: 90 },
    { name: 'SAP ABAP', icon: SiSap, level: 70 },
  ],
  frontend: [
    { name: 'React.js', icon: FaReact, level: 92 },
    { name: 'HTML5', icon: FaHtml5, level: 95 },
    { name: 'CSS3', icon: FaCss3Alt, level: 90 },
    { name: 'Tailwind CSS', icon: TbBrandTailwind, level: 88 },
  ],
  backend: [
    { name: 'Spring Boot', icon: SiSpring, level: 90 },
    { name: 'Spring Security', icon: SiSpringsecurity, level: 85 },
    { name: 'Node.js', icon: FaNodeJs, level: 88 },
    { name: 'Express.js', icon: SiExpress, level: 85 },
    { name: 'Flask', icon: SiFlask, level: 78 },
    { name: 'REST APIs', icon: BiCodeCurly, level: 92 },
  ],
  databases: [
    { name: 'MySQL', icon: SiMysql, level: 90 },
    { name: 'MongoDB', icon: SiMongodb, level: 55 },
  ],
  tools: [
    { name: 'Git', icon: FaGitAlt, level: 92 },
    { name: 'GitHub', icon: FaGithub, level: 90 },
    { name: 'Postman', icon: SiPostman, level: 88 },
    { name: 'VS Code', icon: SiVscodium, level: 95 },
  ],
};

// Projects Data
export const projectsData = [
  {
    id: 1,
    title: 'SmartHire AI',
    category: 'fullstack',
    description: 'AI-powered recruitment platform revolutionizing the hiring process with intelligent matching algorithms and automated candidate screening.',
    longDescription: 'A comprehensive recruitment platform leveraging AI to streamline hiring workflows. Features intelligent resume parsing, automated candidate ranking, and seamless interview scheduling.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    technologies: ['React.js', 'Spring Boot', 'MySQL', 'JWT', 'Spring Security', 'REST APIs'],
    features: [
      'Role-based authentication with JWT',
      'AI-powered job matching',
      'Application tracking system',
      'Candidate management dashboard',
      'Real-time notifications',
    ],
    githubUrl: 'https://github.com/mritheesh/smarthire-ai',
    liveUrl: 'https://smarthire-demo.vercel.app',
    featured: true,
  },
  {
    id: 2,
    title: 'Student Management System',
    category: 'backend',
    description: 'Robust REST API for educational institutions to manage student records, attendance, and academic performance with secure authentication.',
    longDescription: 'Enterprise-grade student management solution built with Spring Boot, featuring comprehensive CRUD operations and secure data handling.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop',
    technologies: ['Spring Boot', 'MySQL', 'REST APIs', 'Spring Data JPA'],
    features: [
      'Complete CRUD operations',
      'Secure REST API endpoints',
      'Database optimization',
      'API documentation with Swagger',
      'Validation and error handling',
    ],
    githubUrl: 'https://github.com/mritheesh/student-management',
    liveUrl: '',
    featured: false,
  },
  {
    id: 3,
    title: 'Fake News Detection',
    category: 'ai',
    description: 'Advanced deep learning system for detecting fake news using hybrid models combining XLNet, FastText, and CNN architectures.',
    longDescription: 'Sophisticated fake news detection system utilizing hybrid deep learning models for high-accuracy news classification and verification.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    technologies: ['Python', 'Flask', 'XLNet', 'FastText', 'CNN', 'NumPy', 'Pandas'],
    features: [
      'Hybrid deep learning model',
      'XLNet for contextual embeddings',
      'FastText for word representations',
      'High accuracy classification',
      'REST API integration',
    ],
    githubUrl: 'https://github.com/MuplamRitheesh/Fake-News-Detection',
    liveUrl: '',
    featured: true,
  },
  {
  id: 4,
  title: 'Order On The Go',
  category: 'fullstack',
  description: 'Full-stack food ordering platform enabling users to browse menus, place orders, and track deliveries through a seamless and responsive interface.',
  longDescription: 'Modern MERN-based food ordering application designed to provide a smooth online ordering experience with secure authentication, dynamic menu management, and real-time order processing.',
  image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop',
  technologies: [
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'JavaScript',
    'HTML',
    'CSS',
    'Tailwind CSS'
  ],
  features: [
    'User authentication and authorization',
    'Interactive food menu and search',
    'Shopping cart management',
    'Online order placement',
    'Order tracking and status updates',
    'Responsive mobile-friendly design',
    'Admin dashboard for menu management',
    'Secure backend API integration'
  ],
  githubUrl: 'https://github.com/MuplamRitheesh/order-on-the-go',
  liveUrl: '',
  featured: true,
  },
  {
  id: 5,
  title: 'Travel Itinerary Generator',
  category: 'web',
  description: 'AI-powered travel planning platform that generates personalized itineraries based on destination, budget, duration, and user preferences.',
  longDescription: 'Smart travel planning application designed to simplify trip organization by creating customized travel schedules, recommending attractions, and optimizing daily activities.',
  image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
  technologies: [
    'streamlit',
    'google-generativeai',
    'JavaScript',
    'HTML',
    'Tailwind CSS'
  ],
  features: [
    'Personalized itinerary generation',
    'Destination and attraction recommendations',
    'Budget-based trip planning',
    'Day-wise activity scheduling',
    'Trip duration optimization',
    'Responsive user interface',
    'User profile and trip history',
    'REST API integration'
  ],
  githubUrl: 'https://github.com/MuplamRitheesh/Travel-Itinerary-Generator',
  liveUrl: '',
  featured: true,
}
];

// Experience Data
export const experienceData = [
  {
    id: 1,
    title: 'Software Engineer Intern',
    company: 'Progmaster Private Limited',
    location: 'HYBRID',
    duration: 'JAN 2026 - APRIL 2026',
    description: 'Developed and deployed scalable full stack applications.',
    technologies: ['React.js', 'Node.js', 'MySQL', 'REST APIs'],
    type: 'past',
  },
];

// Certifications Data
export const certificationsData = [
  {
    id: 1,
    title: 'Oracle Cloud Infrastructure Generative AI Professional',
    issuer: 'Oracle',
    date: '2025',
    credentialId: '323371331OCI25GAIOCP',
    verifyUrl: 'https://brm-certview.oracle.com/ords/certview/ecertificate?ssn=OC7529582&trackId=OCI25GAIOCP&key=60035b1d0dcd0cf99810d1175bb7d06bdd7e96f2',
    icon: FaCertificate,
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 2,
    title: 'SQL Certification',
    issuer: 'HackerRank',
    date: '2025',
    credentialId: 'HR-SQL-2024',
    verifyUrl: 'https://www.hackerrank.com/certificates/iframe/51b585ddd08b',
    icon: FaDatabase,
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 3,
    title: 'Java Certification',
    issuer: 'HackerRank',
    date: '2025',
    credentialId: 'HR-JAVA-2024',
    verifyUrl: 'https://www.hackerrank.com/certificates/iframe/876a5048876d',
    icon: FaJava,
    color: 'from-blue-500 to-indigo-500',
  },
  {
    id: 4,
    title: 'Software Engineer Intern Certification',
    issuer: 'HackerRank',
    date: '2026',
    credentialId: 'HR-SEI-2024',
    verifyUrl: 'https://www.hackerrank.com/certificates/6ecfb69939d5',
    icon: FaBriefcase,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 5,
    title: 'MERN Stack Development',
    issuer: 'SmartBridge',
    date: '2025',
    credentialId: 'EXT-APSCHE_FSD-63324',
    verifyUrl: '/src/images/Certificate - SmartInternz.pdf',
    icon: FaReact,
    color: 'from-teal-500 to-cyan-500',
  },
  {
    id: 6,
    title: 'GOOGLE CLOUD GENERATIVE AI',
    issuer: 'SmartBridge',
    date: '2026',
    credentialId: 'EXT-APSCHE_GENAI-69578',
    verifyUrl: '/src/images/Certificate - SmartInternz (1).pdf',
    icon: FaCloud,
    color: 'from-teal-500 to-cyan-500',
  },
];

// Achievements Data
export const achievementsData = [
  {
    id: 1,
    title: '1st Prize KBCP at SPMVV',
    description: 'Secured first place in the prestigious KBCP competition at Sri Padmavati Mahila Visvavidyalayam.',
    icon: FaTrophy,
    color: 'from-yellow-500 to-amber-500',
    date: '2024',
  },
  {
    id: 2,
    title: '1st Prize Tech Quiz at SISTK',
    description: 'Won first place in the technical quiz competition showcasing expertise in computer science fundamentals.',
    icon: FaStar,
    color: 'from-blue-500 to-cyan-500',
    date: '2025',
  },
  {
    id: 3,
    title: '350+ Problems Solved',
    description: 'Solved over 250 problems on LeetCode and GeeksforGeeks, demonstrating problem-solving skills.',
    icon: FaCode,
    color: 'from-green-500 to-emerald-500',
    date: '2026',
  },
  {
    id: 4,
    title: 'Graduation Gold Medalist',
    description: 'Awarded the Gold Medal for securing 1st rank in academics and demonstrating outstanding academic excellence.',
    icon: FaMedal,
    color: 'from-purple-500 to-pink-500',
    date: '2026',
  },
];

// Coding Profiles Data
export const profilesData = [
  {
    id: 1,
    platform: 'LeetCode',
    username: 'mritheesh',
    stats: {
      problemsSolved: '100+',
      ranking: 'Top 75%',
      streak: '30 Days',
    },
    url: 'https://leetcode.com/u/Ritheesh_M/',
    icon: FaCode,
    color: 'from-yellow-500 to-orange-500',
    bgColor: '#FFA116',
  },
  {
    id: 2,
    platform: 'GeeksforGeeks',
    username: 'M Ritheesh',
    stats: {
      problemsSolved: '300+',
      ranking: 'Institutional Rank: 2',
      streak: '55 Days',
    },
    url: 'https://www.geeksforgeeks.org/user/ritheesh12/',
    icon: FaCode,
    color: 'from-green-500 to-teal-500',
    bgColor: '#2F8D46',
  },
  {
    id: 3,
    platform: 'HackerRank',
    username: 'Ritheesh M',
    stats: {
      problemsSolved: '50+',
      badges: '5-Star Java',
      certifications: '3+',
    },
    url: 'https://www.hackerrank.com/profile/rithishreddy3',
    icon: FaHackerrank,
    color: 'from-green-400 to-emerald-500',
    bgColor: '#00EA64',
  },
  {
    id: 4,
    platform: 'GitHub',
    username: 'muplamritheesh',
    stats: {
      repositories: '15+',
      contributions: 'Active',
      
    },
    url: 'https://github.com/MuplamRitheesh',
    icon: FaGithub,
    color: 'from-gray-600 to-gray-800',
    bgColor: '#181717',
  },
];

// Contact Data
export const contactData = {
  email: 'rithishreddy3@email.com',
  phone: '+91 7022318141',
  location: 'India',
  availability: 'Available for Full-Time Opportunities',
};
