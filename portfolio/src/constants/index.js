import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import event1 from "../assets/tech/event1.png";
import credaphy from "../assets/tech/credaphy.png"
import EDA from "../assets/tech/EDA.png"
import Optima from "../assets/tech/Optima.jpg"
import LightsOn from "../assets/tech/LightsOn.png"
import python from "../assets/tech/Python.svg.png"
import vscode from "../assets/tech/Visual.png"


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Python Developer",
    icon: backend,
  },
  {
    title: "Data Visualization Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
 {
  name:"python",
  icon: python
 },
 {
  name:"vscode",
  icon: vscode
 }
  
  
];

const experiences = [
  {
    title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    company_name: "aws academy",
    icon: starbucks,
    iconBg: "#383E56",
    date: " 26 Nov 2024 ",
    points: [
      "Built a solid foundation in cloud computing concepts and AWS ecosystem.",
      "Learned core AWS services including compute, storage, networking, and security.",
      "Gained insights into cloud architecture best practices and scalability principles.",
      "Understood AWS billing, pricing models, and shared responsibility model.",
      "Developed readiness to design and deploy basic cloud-based solutions.",
    ],
  },
  {
    title: "Generative AI on AWS: Creating Intelligent Chatbots course",
    company_name: "code_cademy",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "14 Feb 2025",
    points: [
      "Gained an understanding of generative AI fundamentals and its applications in conversational systems.",
      "Learned to design and build intelligent chatbots using AWS AI/ML services.",
      "Explored Natural Language Processing (NLP) techniques for enhancing chatbot responses.",
      "Developed skills to create scalable, AI-driven conversational experiences on the cloud.",

    ],
  },
  {
    title: "Artificial Intelligence Fundamentals",
    company_name: "IBM SkillsBuild",
    icon: shopify,
    iconBg: "#383E56",
    date: "14 Feb 2025",
    points: [
      "Gained a strong foundation in machine learning, deep learning, and neural networks.",
      "Explored real-world AI applications across industries like healthcare, finance, and automation.",
      "Learned the basics of NLP, computer vision, and robotics.",
      "Understood key ethical considerations and challenges in AI development",
    ],
  },
  {
    title: "React JS Course",
    company_name: "Scaler",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "8 May 2025",
    points: [
      "Gained a solid foundation in React fundamentals like JSX, components, and props.",
      "Learned to manage application state using Hooks such as useState and useEffect.",
      "Explored Context API and React Router for scalable and dynamic applications.",
      "Built hands-on projects to create responsive, component-driven UIs.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Plan Perfectly",
    description:
      "Developed PlanPerfectly, a clear and user-friendly event management website template.Built to explore and apply core web development technologies through hands-on learning.",
      tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Apache",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: event1,
    source_code_link: "https://github.com/Supreetha-vikram/PlanPerfectly",
  },
  {
    name: "Credaphy",
    description:
      "Web application that enables users to encrypt a message within an image to send it to different users.The image can be decrypted by the recievers using the same website.",
    tags: [
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: credaphy,
    source_code_link: "https://github.com/Supreetha-vikram/Credaphy",
  },
  {
    name: "Genometrics",
    description:
      "Performed EDA, PCA, and clustering on SNP genomic data, including allele frequency analysis and correlation mapping, and visualized 2D/3D patterns with Plotly and also by using K-Means and DBSCAN.",
      tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Plotly",
        color: "green-text-gradient",
      },
      {
        name: "PCA",
        color: "pink-text-gradient",
      },
    ],
    image: EDA,
    source_code_link: "https://github.com/Supreetha-vikram/Advanced-EDA-for-genomic-analysis",
  },
    {
    name: " OPTIMA",
    description:
      "Developed OPTIMA, an intelligent workflow automation platform that streamlines complex business processes. Built to explore and apply cognitive technologies for automating decisions and enhancing efficiency.",
      tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      
    ],
    image: Optima,
    source_code_link: "https://github.com/Supreetha-vikram/OPTIMA-A-Cognitive-Workflow-Automator",
  },
   {
    name: " LightsOn",
    description:
      "Developed LightsOn, a responsive movie platform template for showcasing diverse film collections and user friendly browsing. Built to explore and apply core web development technologies through hands on learning.",
      tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      
    ],
    image: LightsOn,
    source_code_link: "https://github.com/Supreetha-vikram/LightsOn",
  },
  {
    name: "SkillScan",
    description:
      "Developed SkillScan, an intelligent tool that analyzes resumes to provide insights and optimization suggestions. Built to leverage AI technologies for enhancing recruitment efficiency and improving candidate evaluation.",
      tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      
    ],
    image: LightsOn,
    source_code_link: "https://github.com/Supreetha-vikram/LightsOn",
  },
  
];

export { services, technologies, experiences, testimonials, projects };