import { Project, Experience, Education, SkillCategory, ChartDataPoint, Achievement } from './types';

export const PERSONAL_INFO = {
  name: "Yash Surve",
  title: "Robotics & Automation Engineering Student",
  location: "Pune, India",
  tagline: "Developing AI-driven robotic systems with ROS 2 and Deep Learning.",
  about: "Robotics and Automation Engineering student focused on AI-driven robotic systems. Hands-on with ROS 2, embedded control, and mechanical CAD/FEA, experienced building TensorFlow-based CV/NLP models and deploying Arduino-powered prototypes. Seeking opportunities to apply perception, control, and simulation skills to real-world robots.",
  email: "yashusurve2005@gmail.com",
  phone: "+91 79723 08355",
  github: "https://github.com/Yashs2024", 
  linkedin: "https://www.linkedin.com/in/yash-surve-3b6a72253",
  resumeLink: "/resume.pdf" 
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming",
    skills: ["Python (3+ years, production experience)", "MATLAB", "ROS 2 (Built 2+ navigation systems)", "Arduino IDE", "LaTeX"]
  },
  {
    title: "AI & Machine Learning",
    skills: ["TensorFlow (Trained 10+ ML models)", "Keras", "Scikit-learn", "OpenCV", "Deep Learning", "Computer Vision"]
  },
  {
    title: "Robotics Tools",
    skills: ["Gazebo", "RViz2", "ROS 2 Packages", "Navigation Stack"]
  },
  {
    title: "CAD & Simulation",
    skills: ["Autodesk Fusion 360 (Designed 5+ mechanical assemblies)", "AutoCAD", "Inventor", "Ansys Workbench", "Ansys APDL"]
  }
];

export const SKILL_CHART_DATA: ChartDataPoint[] = [
  { subject: 'ROS 2', A: 90, fullMark: 100 },
  { subject: 'Python', A: 95, fullMark: 100 },
  { subject: 'TensorFlow', A: 85, fullMark: 100 },
  { subject: 'Fusion 360', A: 90, fullMark: 100 },
  { subject: 'Comp Vision', A: 80, fullMark: 100 },
  { subject: 'Arduino', A: 90, fullMark: 100 },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "0",
    role: "Robotics Software Engineer Intern",
    company: "Botmakers Pvt Limited",
    location: "Pune, India",
    period: "Nov 2025 - Present",
    description: [
      "Developing autonomous robot navigation systems using ROS2 and Python.",
      "Working on sensor integration and real-time control systems for industrial applications.",
      "Contributing to industrial automation projects, optimizing robot path planning algorithms."
    ],
    technologies: ["ROS2", "Python", "Computer Vision", "Sensor Fusion"]
  },
  {
    id: "1",
    role: "AI Intern",
    company: "Personifwy Artificial Intelligence Division",
    location: "Bengaluru, Karnataka",
    period: "Jul 2025 - Sep 2025",
    description: [
      "Achieved 92% accuracy on text classification model using TensorFlow.",
      "Reduced model inference time by 30% through optimization techniques.",
      "Processed and annotated 5000+ images for object detection training.",
      "Implemented landmark detection pipeline combining OpenCV preprocessing with CNN-based feature extraction."
    ],
    technologies: ["TensorFlow", "OpenCV", "Python", "CNN", "Deep Learning"]
  },
  {
    id: "2",
    role: "Discipline Head & Main Actor",
    company: "Firodiya Karandak 2025 (Drama Team)",
    location: "Pune, India",
    period: "Oct 2024 - Feb 2025",
    description: [
      "Led Documentation Discipline for a 25-member drama team.",
      "Served as Main Actor for the production.",
      "Managed scheduling, script documentation, and team coordination."
    ],
    technologies: ["Leadership", "Team Management", "Documentation"]
  },
  {
    id: "3",
    role: "Actor & Coordinator",
    company: "Dajikaka Karandak 2024",
    location: "Pune, India",
    period: "Jun 2024 - Aug 2024",
    description: [
      "Participated as an actor and coordinated team management activities for the event."
    ],
    technologies: ["Communication", "Coordination"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "6 DOF Robotic Arm with Sliding Base",
    description: "Designed a 6 DOF robotic arm and base in Fusion 360, conducting stress analysis in Ansys. Achieved ±2mm positioning accuracy across 800mm workspace. Optimized trajectory planning reducing motion time by 25%. Successfully tested with payloads up to 2kg.",
    technologies: ["Fusion 360", "Ansys", "Arduino", "C++", "Kinematics"],
    imageUrl: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800",
    category: "Robotics",
    featured: true,
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: "2",
    title: "Alumni Management System (AlumniX)",
    description: "Developed for Smart India Hackathon 2025. Built scalable system supporting 1000+ alumni profiles. AI chatbot handles 50+ query types with 85% accuracy. Reduced manual query response time from hours to seconds.",
    technologies: ["React.js", "Next.js", "Figma", "AI Integration"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    category: "AI/ML",
    featured: true,
    githubUrl: "#"
  }
];

export const EDUCATION: Education[] = [
  {
    id: "1",
    degree: "B.Tech in Automation & Robotics",
    institution: "MES Wadia College of Engineering, Pune",
    year: "2023 - 2027",
    details: "CGPA: 8.00/10"
  },
  {
    id: "2",
    degree: "HSC (Class 12)",
    institution: "ASM Junior College, Pune",
    year: "2021 - 2023",
    details: "Aggregate: 73.33%"
  },
  {
    id: "3",
    degree: "SSC (Class 10)",
    institution: "SPG International Public School, Pune",
    year: "2009 - 2021",
    details: "Aggregate: 80.20%"
  }
];

export const CERTIFICATIONS: string[] = [
  "Advanced Python",
  "Autodesk Fusion 360",
  "TensorFlow",
  "ROS 2"
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "1",
    title: "Smart India Hackathon 2025",
    description: "Participant - Built Alumni Management System with AI integration",
    icon: "Code"
  },
  {
    id: "2",
    title: "State-level Drama Competition",
    description: "Main Actor & Documentation Lead (25-member team)",
    icon: "Trophy"
  },
  {
    id: "3",
    title: "Academic Achievement",
    description: "8.00 CGPA in Robotics & Automation Engineering",
    icon: "GraduationCap"
  }
];
