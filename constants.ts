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
    skills: ["Python (3+ years, production experience)", "C++ (Embedded)", "ROS 2 (Humble/Foxy)", "MATLAB", "LaTeX"]
  },
  {
    title: "AI & Machine Learning",
    skills: ["MediaPipe (Gesture Control)", "TensorFlow", "OpenCV (Computer Vision)", "Google AI Studio", "Deep Learning"]
  },
  {
    title: "Robotics & Hardware",
    skills: ["ESP32/NodeMCU", "Inverse Kinematics", "Gazebo Sim", "PCB Design", "LiPo Battery Safety"]
  },
  {
    title: "CAD & Prototyping",
    skills: ["Autodesk Fusion 360 (Advanced Surface Modeling)", "DFM (3D Printing)", "Ansys Workbench", "Tolerance Analysis"]
  }
];

export const SKILL_CHART_DATA: ChartDataPoint[] = [
  { subject: 'ROS 2', A: 90, fullMark: 100 },
  { subject: 'Python', A: 95, fullMark: 100 },
  { subject: 'Fusion 360', A: 95, fullMark: 100 },
  { subject: 'Embedded C', A: 85, fullMark: 100 },
  { subject: 'Comp Vision', A: 85, fullMark: 100 },
  { subject: 'Kinematics', A: 80, fullMark: 100 },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "0",
    role: "Robotics Software Engineer Intern",
    company: "Botmakers Pvt Limited",
    location: "Pune, India",
    period: "Nov 2025 - Present",
    description: [
      "Engineered 'Sesame Quadruped', a research-grade 8-DOF robot under ₹4,000 using ESP32-S2 and custom Inverse Kinematics engine.",
      "Led technical workshops at IIT Bombay Techfest 2025 and PCCOE Akurdi, mentoring 500+ students in Drone fabrication and IoT.",
      "Designed and deployed a low-cost (<₹500) IoT educational kit and comprehensive drone curriculum (DGCA regulations, PID tuning).",
      "Developed 'Physical AI' systems combining MediaPipe gesture tracking with UDP communication for real-time robot control."
    ],
    technologies: ["Fusion 360", "Inverse Kinematics", "ESP32", "MediaPipe", "Public Speaking"]
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
    id: "p1",
    title: "Sesame Quadruped (8-DOF)",
    description: "A low-cost, research-grade quadruped robot. Designed a monocoque chassis in Fusion 360 with internal cable routing. Developed a custom Inverse Kinematics (IK) engine in C++ running on ESP32-S2 to calculate Hip and Knee angles in real-time.",
    technologies: ["Fusion 360", "C++", "Inverse Kinematics", "ESP32", "3D Printing"],
    imageUrl: "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?auto=format&fit=crop&q=80&w=800",
    category: "Robotics",
    featured: true,
    githubUrl: "#"
  },
  {
    id: "p2",
    title: "AI-Controlled Biomimetic Hand",
    description: "An anthropomorphic robotic hand controlled via human gestures. Used MediaPipe for hand tracking and UDP for low-latency communication to NodeMCU. Designed an underactuated tendon system using fishing lines (flexors) and elastic threads (extensors).",
    technologies: ["Python", "MediaPipe", "OpenCV", "UDP", "IoT"],
    imageUrl: "https://images.unsplash.com/photo-1581092921461-eab62e97a782?auto=format&fit=crop&q=80&w=800",
    category: "AI/ML",
    featured: true,
    githubUrl: "#"
  },
  {
    id: "p3",
    title: "Google AI Studio Simulations",
    description: "Developed browser-based interactive simulations including a 3D Virtual RoboHand that visualizes Forward Kinematics in real-time and a Gesture Solar System. Leveraged Google AI Studio to create 'Physical AI' experiences without hardware constraints.",
    technologies: ["Google AI Studio", "JavaScript", "Kinematics", "Gesture Control"],
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
    category: "AI/ML",
    featured: true,
    githubUrl: "#"
  },
  {
    id: "p4",
    title: "6 DOF Robotic Arm with Sliding Base",
    description: "Designed a 6 DOF robotic arm and base in Fusion 360, conducting stress analysis in Ansys. Achieved ±2mm positioning accuracy across 800mm workspace. Optimized trajectory planning reducing motion time by 25%. Successfully tested with payloads up to 2kg.",
    technologies: ["Fusion 360", "Ansys", "Arduino", "C++", "Kinematics"],
    imageUrl: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800",
    category: "Robotics",
    featured: false,
    githubUrl: "#"
  },
  {
    id: "p5",
    title: "Alumni Management System (AlumniX)",
    description: "Developed for Smart India Hackathon 2025. Built scalable system supporting 1000+ alumni profiles. AI chatbot handles 50+ query types with 85% accuracy. Reduced manual query response time from hours to seconds.",
    technologies: ["React.js", "Next.js", "Figma", "AI Integration"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    category: "AI/ML",
    featured: false,
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
  "ROS 2",
  "Battery Safety (LiPo)"
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