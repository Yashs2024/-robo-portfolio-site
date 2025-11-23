import { Project, Experience, Education, SkillCategory, ChartDataPoint } from './types';

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
    skills: ["Python", "MATLAB", "ROS 2", "Arduino IDE", "LaTeX"]
  },
  {
    title: "AI & Machine Learning",
    skills: ["TensorFlow", "Keras", "Scikit-learn", "OpenCV", "Deep Learning", "Computer Vision"]
  },
  {
    title: "Robotics Tools",
    skills: ["Gazebo", "RViz2", "ROS 2 Packages", "Navigation Stack"]
  },
  {
    title: "CAD & Simulation",
    skills: ["Autodesk Fusion 360", "AutoCAD", "Inventor", "Ansys Workbench", "Ansys APDL"]
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
    id: "1",
    role: "AI Intern",
    company: "Personifwy Artificial Intelligence Division",
    location: "Bengaluru, Karnataka",
    period: "Jul 2025 - Sep 2025",
    description: [
      "Developed text classification and object detection models in TensorFlow with documented accuracy and latency results.",
      "Implemented landmark detection pipeline combining OpenCV preprocessing with CNN-based feature extraction.",
      "Collaborated in 3-member team on dataset versioning, experiments tracking, and model packaging."
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
    description: "Designed a 6 DOF robotic arm and base in Fusion 360, conducting stress analysis in Ansys. Implemented Arduino-based servo control and basic trajectory planning. Extended reachable workspace via a custom sliding base mechanism.",
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
    description: "Developed for Smart India Hackathon 2025. Built the frontend with React.js and Next.js, and designed UI/UX in Figma. Integrated an AI assistant to handle alumni queries and packaged the prototype for demo deployment.",
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