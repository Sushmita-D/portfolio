import { motion, useScroll, useSpring } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  BrainCircuit, 
  Database, 
  Terminal, 
  GraduationCap,
  Award,
  ArrowUpRight,
  Layout,
  Binary,
  Cpu,
  Globe,
  Layers,
  Phone,
  ArrowRight,
  ChevronRight,
  Sparkles
} from "lucide-react";
import React from "react";

/**
 * PORTFOLIO DATA CONFIGURATION
 * ----------------------------
 * You can manually edit any of the information below (names, links, descriptions).
 * Updates here will reflect across the entire application.
 */
const DATA = {
  name: "SUSHMITA",
  role: "AI Engineer| Full Stack Developer",
  subRole:  "Building Scalable Applications & Intelligent AI Systems",
  photo: "https://res.cloudinary.com/dokv7azlr/image/upload/f_auto,q_auto/WhatsApp_Image_2026-05-01_at_8.41.40_PM_diahfc", 
  contact: {
    phone: "+91-8762621040",
    email: "sushmitadaivajnya@gmail.com",
    linkedin: "https://www.linkedin.com/in/sushmita-daivajnya/",
    github: "https://github.com/Sushmita-Daivajnya"
  },
  summary: "Software Engineer passionate about building scalable backend systems, modern full-stack applications, and production-ready AI solutions using Java, Python, Spring Boot, FastAPI, React, PostgreSQL, Docker, and Generative AI."
  aboutDetailed: "I enjoy designing scalable software systems and intelligent AI applications. My experience spans backend development with Spring Boot and FastAPI, modern frontend development using React and Next.js, cloud-ready architectures with Docker and AWS, and Generative AI technologies including LangChain, LangGraph, RAG, vector search, and multimodal AI."
  achievements: [
    "Published CV Research // JETIR 2025",
    "Real-world RAG & Vision systems",
    "Hackathon Champion // AI Category"
  ],
  education: {
    school: "Srinivas Institute Of Technology",
    location: "Mangalore, India",
    degree: "B.E in Computer Science Engineering",
    cgpa: "8.0",
    period: "2022 – 2026"
  },
  experience: [
    {
      role: "Android Developer Intern (Generative AI)",
      company: "MindMatrix.io",
      type: "Remote/Hybrid",
      period: "Feb 2026 – Present",
      letterLink: "https://www.linkedin.com/in/sushmita-daivajnya/details/experience/", 
      bullets: [
        "Built Retrieval-Augmented Generation (RAG) pipelines using LangChain.",
        "Developed FastAPI services for semantic document retrieval.",
        "Integrated LLMs with enterprise knowledge bases using vector search."
      ]
    },
    {
      role: "Java Full Stack Developer Intern (Generative AI)",
      company: "KodNest Technologies",
      type: "Remote/Hybrid",
      period: "Jan 2026 – Present",
      letterLink: "https://www.linkedin.com/in/sushmita-daivajnya/details/experience/", 
      bullets: [
       "Developed scalable REST APIs using Spring Boot.",
       "Built responsive React/Next.js interfaces and integrated backend services.",
       "Designed PostgreSQL-backed applications following clean architecture principles."
      ]
    }
  ],
  projects: [
    {
      title: "Agentic Multimodal AI Assistant",
      tech: ["Python", "LangChain", "LangGraph", "RAG","FastAPI", "PostgreSQL"]
      period: "2026",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      link: "https://github.com/Sushmita-D/agentic-multimodal-ai-assistant",
      description: "Developed a production-ready AI platform with FastAPI, PostgreSQL, LangGraph, and Docker, enabling multimodal document processing, intelligent retrieval, AI workflow orchestration, and export services."
    },
    {
    title: "WellKart AI Fashion Commerce",
    tech: ["Spring Boot", "FastAPI", "PostgreSQL", "Redis", "Docker", "React", "AI Try-On"],
    period: "2026",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/Sushmita-D/Wellkart",
    description: "Developed an AI-powered fashion commerce platform featuring virtual try-on, intelligent product discovery, secure shopping workflows, and scalable microservices with Redis caching and Docker deployment."
},
    {
      title: "Adulteration Detection",
      tech: ["YOLOv8", "Deep Learning"],
      period: "2025",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800",
      link: "https://github.com/Sushmita-D/Adulteration-of-black-pepper-detection-using-image-processing",
      description: "Detecting papaya seed adulteration in black pepper using YOLOv8 & MobileNetV2. Trained on custom datasets."
    },
    {
      title: "Gesture Slide Control",
      tech: ["MediaPipe", "OpenCV", "Python"],
      period: "2025",
      image: "https://tse3.mm.bing.net/th/id/OIP.r3VrStUv3efTpUV8J5oMVgHaHa?pid=Api&P=0&h=180",
      link: "https://github.com/Sushmita-D/HAND-GESTURES",
      description: "Touch-free presentation control via hand landmark detection. Published in JETIR (2025) research journal."
    }
  ],
  skillsTree: [
    {
      category: "Programming",
      icon: Terminal,
      skills: ["Python", "Java", "SQL", "JavaScript", "Kotlin"]
    },
    {
      category: "Core CS",
      icon: Binary,
      skills: ["DS & Algo", "OOPs", "DBMS"]
    },
    {
      category: "Backend",
      icon: Database,
      skills: ["Spring Boot", "REST APIs", "FastAPI", "Flask","Microservices", "Node.js"]
    },
    {
      category: "Frontend",
      icon: Layout,
      skills: ["Next.js", "React", "TypeScript", "HTML/CSS", "Tailwind"]
    },
    {
      category: "AI",
      icon: BrainCircuit,
      skills: ["LangChain","LangGraph","Prompt Engineering","Vector Search","ML", "Deep Learning", "LLMs", "RAG", "CV"]
    },
    {
      category: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MySQL","MongoDB"]
    },
    {
      category: "DevOps & Cloud",
      icon: Cloud,
      skills: ["Git", "Docker", "AWS","Postman","GitHub Actions"]
    }
  ],
  certifications: [
    { name: "Cloud Computing", issuer: "Certiport", date: "2025", link: "https://www.linkedin.com/in/sushmita-daivajnya/details/certifications/", icon: Globe },
    { name: "Artificial Intelligence", issuer: "Certiport", date: "2024", link: "https://www.linkedin.com/in/sushmita-daivajnya/details/certifications/", icon: Binary },
    { name: "Machine Learning", issuer: "Alteryx", date: "2025", link: "https://www.linkedin.com/in/sushmita-daivajnya/details/certifications/", icon: Cpu },
    { name: "NoSQL – MongoDB", issuer: "IBM", date: "2025", link: "https://www.linkedin.com/in/sushmita-daivajnya/details/certifications/", icon: Database },
    { name: "Python Essentials", issuer: "Cisco", date: "2025", link: "https://www.linkedin.com/in/sushmita-daivajnya/details/certifications/", icon: Terminal },
    { name: "AWS ML Specialty", issuer: "Amazon", date: "2025", link: "https://www.linkedin.com/in/sushmita-daivajnya/details/certifications/", icon: Layers },
    { name: "Cloud Computing Intro", issuer: "Infosys", date: "2024", link: "https://www.linkedin.com/in/sushmita-daivajnya/details/certifications/", icon: Globe }
  ]
};

const SectionHeading = ({ children, icon: Icon, number, className }: { children: React.ReactNode, icon?: any, number?: string, className?: string }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className={`flex flex-col mb-16 relative ${className || ''}`}
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="w-8 h-[1px] bg-amber-500"></div>
      {number && <span className="font-mono text-[8px] text-amber-500/60 font-bold tracking-[0.5em] uppercase">Core_Module_{number}</span>}
    </div>
    <h2 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-[-0.05em] text-white leading-[0.85] relative">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/70 to-white/30">{children}</span>
      <span className="absolute -bottom-2 md:-bottom-3 left-0 text-[7px] font-mono text-amber-500/20 tracking-[0.8em] uppercase font-bold italic hidden md:block select-none">
        PROTOCOL_V_02
      </span>
    </h2>
  </motion.div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[#050505] relative overflow-hidden font-sans text-slate-400 selection:bg-amber-500/30 selection:text-white">
      {/* Background System Grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:200px_200px]"></div>
      </div>
      <div className="fixed inset-0 noise-bg opacity-30 pointer-events-none z-0"></div>
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-amber-600 z-[100] origin-left shadow-[0_0_10px_rgba(245,158,11,0.5)]"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 nav-blur py-5 px-8 md:px-16 flex justify-between items-center border-b border-white/5">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-display text-xl tracking-tighter font-bold text-white italic flex items-center gap-3"
        >
          <div className="w-[2px] h-6 bg-amber-600"></div>
          SUSHMITA
        </motion.div>
        
        <div className="hidden lg:flex gap-10 font-mono text-[7px] uppercase tracking-[0.3em] text-white/20 font-bold italic">
          {['About', 'Project', 'Skills', 'Internships', 'Contact'].map((item, i) => (
            <motion.a 
              key={item}
              whileHover={{ color: '#fff', x: 2 }}
              href={`#${item.toLowerCase()}`} 
              className="transition-all duration-300 flex items-center gap-2 group/item"
            >
              <span className="text-amber-500 opacity-0 group-hover/item:opacity-100 transition-opacity">0{i+1}</span>
              {item}
            </motion.a>
          ))}
        </div>

        <motion.a 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="#contact"
          className="px-8 py-4 border border-amber-500/20 rounded-full text-[9px] font-black uppercase tracking-widest text-amber-500 transition-all hidden sm:block hover:bg-amber-500/10"
        >
          REACH OUT
        </motion.a>
      </nav>

      {/* Sidebar Signals */}
      <div className="fixed left-8 bottom-32 z-50 hidden xl:flex flex-col gap-8 items-center">
        {[
          { icon: Github, link: DATA.contact.github },
          { icon: Linkedin, link: DATA.contact.linkedin },
          { icon: Mail, link: `mailto:${DATA.contact.email}` }
        ].map((social, i) => (
          <motion.a 
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + (i * 0.1) }}
            whileHover={{ scale: 1.2, color: '#fff' }}
            href={social.link} 
            target="_blank" 
            className="text-white/20 hover:text-amber-500 transition-all border border-white/5 p-3 rounded-full backdrop-blur-sm"
          >
            <social.icon className="w-4 h-4"/>
          </motion.a>
        ))}
        <div className="w-[1px] h-20 bg-gradient-to-t from-amber-500/20 to-transparent" />
      </div>

      <main className="relative z-10 pt-48 pb-32 px-6 lg:px-20 max-w-7xl mx-auto">
        
        {/* HERO SECTION */}
        <motion.section 
          id="hero" 
          className="mb-64 min-h-[70vh] flex items-center relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20 w-full">
            <div className="flex-1 text-center lg:text-left z-10 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-3 mb-8 px-5 py-2 glass-card rounded-full border-amber-500/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></div>
                  <span className="text-[8px] font-mono font-black uppercase tracking-[0.4em] text-amber-500/80">{DATA.role}</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase text-white mb-6 tracking-tight leading-[0.85] font-display">
                  <span className="text-mask block drop-shadow-[0_0_20px_rgba(245,158,11,0.15)]">SUSHMITA</span>
                  <span className="block font-light text-slate-500 text-3xl md:text-4xl mt-3 tracking-[0.2em] underline decoration-amber-500/10 underline-offset-[16px]">SYSTEMS</span>
                </h1>

                <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start max-w-2xl">
                   <p className="font-sans text-[11px] md:text-xs text-slate-500 leading-relaxed font-light border-l border-amber-500/20 pl-6 py-1 max-w-sm">
                     Engineering high-performance AI systems and professional digital architectures.
                   </p>

                   <div className="flex flex-col gap-3 min-w-[180px]">
                      <motion.a 
                        whileHover={{ scale: 1.01, x: 3 }}
                        whileTap={{ scale: 0.99 }}
                        href="#project" 
                        className="group bg-white text-black px-6 py-3 text-[8px] font-bold uppercase tracking-[0.15em] rounded-sm hover:bg-amber-600 hover:text-white transition-all flex items-center justify-between"
                      >
                        VIEW_WORKS <ArrowRight className="w-3 h-3" />
                      </motion.a>
                      <div className="flex items-center justify-between px-2">
                        <span className="text-[7px] font-mono text-white/20 uppercase tracking-[0.2em]">Status: Active</span>
                        <div className="flex gap-1">
                          <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                          <div className="w-1 h-1 bg-amber-500/30 rounded-full"></div>
                        </div>
                      </div>
                   </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, delay: 0.2 }}
               className="w-full lg:w-[45%] max-w-[400px] aspect-[4/5] relative order-1 lg:order-2"
            >
               <div className="absolute -inset-4 bg-amber-500/5 blur-3xl rounded-full"></div>
               <div className="relative z-10 w-full h-full rounded-2xl border border-white/10 overflow-hidden glass-card group shadow-2xl">
                  {/* Decorative Elements */}
                  <div className="absolute top-4 left-4 w-10 h-[1px] bg-amber-500/50 z-20"></div>
                  <div className="absolute top-4 left-4 w-[1px] h-10 bg-amber-500/50 z-20"></div>
                  <div className="absolute bottom-4 right-4 w-10 h-[1px] bg-amber-500/50 z-20"></div>
                  <div className="absolute bottom-4 right-4 w-[1px] h-10 bg-amber-500/50 z-20"></div>
                  
                  <img src={DATA.photo} alt={DATA.name} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-[1s]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-40"></div>
               </div>
            </motion.div>
          </div>
        </motion.section>


        {/* ACHIEVEMENTS SECTION */}
        <motion.section 
          id="achievements" 
          className="mb-80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
           <SectionHeading number="01.5">Achievements</SectionHeading>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {DATA.achievements.map((item, i) => (
                 <motion.div 
                   key={i}
                   whileHover={{ y: -10 }}
                   className="glass-card p-12 rounded-[2rem] border-white/5 relative overflow-hidden group"
                 >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 blur-3xl"></div>
                    <Sparkles className="w-8 h-8 text-amber-500 mb-8" />
                    <p className="text-sm font-display font-bold text-white uppercase italic leading-tight tracking-tight">
                       {item}
                    </p>
                    <div className="mt-8 h-px w-12 bg-white/10 group-hover:w-full transition-all duration-700"></div>
                 </motion.div>
              ))}
           </div>
        </motion.section>

        {/* ABOUT SECTION */}
        <motion.section 
          id="about" 
          className="mb-80 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
           <div className="max-w-4xl mx-auto space-y-12 text-center lg:text-left">
              <SectionHeading number="01">Identity</SectionHeading>
              <div className="glass-card p-8 md:p-12 rounded-xl border-white/5 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/5 blur-[120px] -mr-48 -mt-48 group-hover:bg-amber-500/10 transition-colors duration-1000"></div>
                 <div className="relative z-10">
                   <p className="text-lg md:text-xl text-white font-medium leading-tight mb-6 tracking-tight">
                     Hi, I’m <span className="text-amber-500 font-light underline decoration-white/5 underline-offset-8">Sushmita</span> — a Computer Science graduate building intelligent systems.
                   </p>
                   <p className="text-slate-500 text-[11px] md:text-xs leading-relaxed font-light mb-6">
                     I enjoy solving real-world problems by combining AI/ML with strong backend and full stack development. I’ve worked on projects involving machine learning, computer vision, and RAG-based systems.
                   </p>
                   <p className="text-slate-500 text-[11px] md:text-xs leading-relaxed font-light">
                     I like understanding problems deeply, designing efficient systems, and turning ideas into practical solutions.
                   </p>
                 </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Expertise", value: "AIML & Full Stack", icon: Cpu },
                { label: "Specialty", value: "LLMs, RAG, Vision", icon: BrainCircuit },
                { label: "Scale", value: "Real-world AI", icon: Layers },
                { label: "Capability", value: "System Design", icon: Terminal },
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 glass-card rounded-[2.5rem] group hover:border-white/20 transition-all duration-500"
                >
                  <stat.icon className="w-5 h-5 text-slate-500 mb-6 group-hover:text-amber-400 transition-colors" />
                  <div className="text-[8px] font-mono text-white/20 uppercase tracking-[0.4em] font-bold mb-1">{stat.label}</div>
                  <div className="text-[11px] font-black text-white uppercase italic tracking-tight leading-tight">{stat.value}</div>
                </motion.div>
              ))}
              </div>
           </div>
        </motion.section>

        {/* SKILLS - MIND MAP TREE */}
        <motion.section id="skills" className="mb-80 relative">
           <SectionHeading number="02">Skills</SectionHeading>
           <div className="relative flex flex-col items-center">
              {/* Central Core */}
              <div className="w-40 h-40 rounded-full glass-card border-amber-500/30 flex items-center justify-center z-10 relative mb-16 shadow-[0_0_50px_rgba(245,158,11,0.1)] group">
                 <div className="absolute inset-0 rounded-full bg-amber-500/5 animate-pulse"></div>
                 <div className="text-center group-hover:scale-110 transition-transform">
                    <div className="text-[10px] font-mono text-amber-500 font-bold uppercase tracking-widest">Core</div>
                    <div className="text-[14px] font-display font-black text-white italic">TOOLKIT</div>
                 </div>
              </div>

              {/* Skill Branches */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl relative">
                 {/* Connection Lines (Visual Decor) */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-full pointer-events-none hidden lg:block">
                    <div className="w-px h-full bg-gradient-to-b from-amber-500/20 via-white/5 to-transparent"></div>
                 </div>

                 {DATA.skillsTree.map((branch, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="glass-card p-10 rounded-[3rem] border-white/5 hover:border-amber-500/30 transition-all duration-700 group relative overflow-hidden flex flex-col items-center text-center"
                    >
                       <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600/5 blur-[80px]"></div>
                       
                       <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-amber-600 transition-all duration-500 border border-white/10 group-hover:shadow-amber-500/20 shadow-lg">
                          <branch.icon className="w-6 h-6 text-slate-500 group-hover:text-white" />
                       </div>

                       <h4 className="text-[11px] font-display font-bold uppercase tracking-[0.3em] text-white underline decoration-amber-500/20 underline-offset-8 mb-10">{branch.category}</h4>

                       <div className="flex flex-wrap justify-center gap-3">
                          {branch.skills.map(s => (
                             <span key={s} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-slate-500 group-hover:text-white group-hover:border-amber-500/50 transition-all">
                                {s}
                             </span>
                          ))}
                       </div>
                    </motion.div>
                 ))}
              </div>
           </div>
        </motion.section>

        {/* PROJECTS SECTION */}
        <motion.section id="project" className="mb-80">
           <SectionHeading number="03">Projects</SectionHeading>
           <div className="space-y-64">
              {DATA.projects.map((project, idx) => (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   viewport={{ once: true, amount: 0.2 }}
                   transition={{ duration: 1 }}
                   className="group relative"
                 >
                    {/* Background Indexing */}
                    <div className="absolute -top-16 -left-10 text-[12rem] font-bold text-white/[0.015] select-none pointer-events-none italic">
                      0{idx + 1}
                    </div>

                    <div className={`flex flex-col lg:flex-row gap-8 lg:gap-20 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                         <motion.div 
                          style={{ rotate: idx % 2 === 0 ? -1 : 1 }}
                          whileHover={{ rotate: 0, scale: 1.01 }}
                          className="w-full lg:w-[55%] aspect-[16/10] rounded-xl overflow-hidden relative shadow-4xl group-hover:shadow-amber-500/10 transition-all duration-700 glow-border border-white/5"
                        >
                           <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-[2s]" />
                           <div className="absolute inset-0 bg-[#050505]/20 group-hover:bg-transparent transition-colors duration-700"></div>
                           
                           <div className="absolute bottom-12 left-12 flex flex-wrap gap-2">
                              {project.tech.map(t => (
                                 <span key={t} className="px-3 py-1.5 glass-card backdrop-blur-2xl rounded-sm text-[7px] font-mono text-white font-bold uppercase tracking-widest border border-white/10">{t}</span>
                              ))}
                           </div>
                         </motion.div>
                         <div className="flex-1 text-center lg:text-left space-y-10">
                           <div>
                             <div className="text-[9px] font-mono text-amber-500/50 font-bold tracking-[0.4em] mb-3 uppercase">Archive_Ref_{project.period}</div>
                             <h3 className="text-4xl md:text-5xl font-display font-bold uppercase text-white leading-[0.9] tracking-tight group-hover:text-glow-accent transition-all duration-700">
                                {project.title.split(' ').map((word, i) => (
                                  <span key={i} className={i % 2 !== 0 ? 'italic font-light text-slate-500' : ''}>{word} </span>
                                ))}
                             </h3>
                           </div>
                           
                           <p className="text-slate-500 text-xs leading-relaxed font-light max-w-lg mx-auto lg:mx-0 border-l border-white/5 pl-8">
                              {project.description}
                           </p>
 
                           <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-10">
                              <motion.a 
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                href={(project as any).link || "#"}
                                target="_blank"
                                className="bg-amber-600 text-white px-10 py-5 text-[10px] font-black uppercase tracking-widest rounded-sm flex items-center gap-4 hover:bg-amber-500 transition-all italic shadow-4xl"
                              >
                                 VIEW PROJECT <ArrowUpRight className="w-4 h-4" />
                              </motion.a>
                             <div className="flex items-center gap-4 text-white/20">
                               <div className="w-12 h-px bg-white/10"></div>
                               <span className="text-[9px] font-mono uppercase tracking-[0.3em]">Project_ID_0{idx + 1}</span>
                             </div>
                          </div>
                       </div>
                    </div>
                 </motion.div>
              ))}
           </div>
        </motion.section>

        {/* EXPERIENCE TIMELINE - PRODUCT CARDS */}
        <motion.section id="internships" className="mb-80">
           <SectionHeading number="04">Internships</SectionHeading>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {DATA.experience.map((exp, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   className="glass-card rounded-[2rem] border-white/5 relative overflow-hidden group hover:border-white/20 transition-all duration-700 flex flex-col"
                 >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-amber-600/10 blur-[80px] group-hover:bg-amber-500/20 transition-colors"></div>
                    
                    {/* Price-tag Style Period */}
                    <div className="absolute top-8 right-0 bg-amber-600 text-white px-6 py-2 text-[8px] font-mono font-bold italic tracking-[0.2em] rounded-l-full shadow-lg z-20">
                      {exp.period}
                    </div>

                    <div className="p-10 flex-1 flex flex-col">
                       <div className="flex items-start gap-4 mb-10">
                          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                             <Layers className="w-5 h-5 text-amber-500" />
                          </div>
                          <div>
                             <h4 className="text-xl md:text-2xl font-display font-bold uppercase text-white tracking-tight mb-1">{exp.role}</h4>
                             <div className="text-[9px] font-mono text-amber-500/60 uppercase tracking-[0.3em]">{exp.company} // {exp.type}</div>
                          </div>
                       </div>

                       <ul className="space-y-4 mb-10 flex-1">
                          {exp.bullets.map((bullet, idx) => (
                             <li key={idx} className="flex gap-4 text-[11px] text-slate-500 leading-relaxed font-light italic border-b border-white/[0.03] pb-4 last:border-0 last:pb-0">
                                <ChevronRight className="w-3 h-3 text-amber-500 mt-1 shrink-0" />
                                {bullet}
                             </li>
                          ))}
                       </ul>

                       {exp.letterLink && (
                         <motion.a 
                           whileHover={{ scale: 1.02 }}
                           whileTap={{ scale: 0.98 }}
                           href={exp.letterLink}
                           target="_blank"
                           className="w-full bg-white/5 border border-white/10 py-4 rounded-xl text-[9px] font-mono font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 group-hover:bg-white/10 transition-all"
                         >
                           EXAMINE_CREDENTIALS <ArrowUpRight className="w-4 h-4" />
                         </motion.a>
                       )}
                    </div>
                 </motion.div>
              ))}
           </div>
        </motion.section>

        {/* CERTIFICATES - GALLERY GRID */}
        <motion.section id="certificates" className="mb-80">
           <SectionHeading number="05">Certificates</SectionHeading>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {DATA.certifications.map((cert, i) => (
                 <motion.a 
                   key={i}
                   href={cert.link}
                   target="_blank"
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   whileHover={{ y: -5, rotate: 1 }}
                   className="group glass-card p-10 rounded-[2.5rem] border-white/5 hover:border-amber-500/20 transition-all duration-700 flex flex-col items-center text-center relative overflow-hidden"
                 >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600/5 blur-[60px] pointer-events-none"></div>
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-amber-600 group-hover:scale-110 transition-all duration-500 shadow-xl border border-white/5">
                       <cert.icon className="w-6 h-6 text-slate-500 group-hover:text-white" />
                    </div>
                    <h5 className="text-[11px] font-display font-bold text-white mb-3 uppercase italic leading-snug tracking-tighter">{cert.name}</h5>
                    <div className="text-[8px] font-mono text-white/30 uppercase tracking-[0.4em] mb-8">{cert.issuer}</div>
                    <div className="text-[7px] font-mono text-white/5 uppercase tracking-[0.8em] group-hover:text-amber-500 transition-colors">REV_{cert.date}</div>
                 </motion.a>
              ))}
           </div>
        </motion.section>

        {/* CONTACT SECTION */}
        <motion.section 
          id="contact" 
          className="mb-80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
           <div className="flex flex-col lg:flex-row gap-24 items-center">
              <div className="flex-1 text-center lg:text-left">
                  <SectionHeading number="06">Get In Touch</SectionHeading>
                  <p className="text-xl md:text-2xl text-slate-300 font-light italic leading-relaxed mb-16 max-w-lg font-sans">
                    Currently scanning for high-frequency collaborations and entry-level full-stack roles.
                  </p>
                  
                  <div className="space-y-10">
                     {[
                        { label: "Email", val: DATA.contact.email, icon: Mail, link: `mailto:${DATA.contact.email}` },
                        { label: "Phone", val: DATA.contact.phone, icon: Phone, link: `tel:${DATA.contact.phone}` },
                        { label: "LinkedIn", val: "sushmita-daivajnya", icon: Linkedin, link: DATA.contact.linkedin }
                     ].map((item, i) => (
                        <motion.a 
                          key={i}
                          href={item.link}
                          target="_blank"
                          whileHover={{ x: 15 }}
                          className="flex items-center gap-6 group"
                        >
                           <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center group-hover:bg-amber-600 border-white/10 transition-all duration-500">
                              <item.icon className="w-5 h-5 text-white/20 group-hover:text-white" />
                           </div>
                           <div className="text-left">
                              <div className="text-[7px] font-mono text-white/30 uppercase tracking-[0.4em] mb-1">{item.label}</div>
                              <div className="text-[11px] font-mono text-slate-500 group-hover:text-white transition-colors uppercase font-bold">{item.val}</div>
                           </div>
                        </motion.a>
                     ))}
                  </div>
              </div>

              <div className="flex-1 w-full max-w-xl">
                 <div className="glass-card p-12 md:p-16 rounded-2xl relative overflow-hidden h-full border-white/5">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-600/5 blur-[100px] pointer-events-none"></div>
                    <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                             <input className="w-full bg-white/[0.02] border border-white/10 rounded-lg py-5 px-8 text-[10px] text-white focus:outline-none focus:border-amber-500/50 transition-all font-mono tracking-widest uppercase" placeholder="Full_Name" />
                          </div>
                          <div className="space-y-2">
                             <input className="w-full bg-white/[0.02] border border-white/10 rounded-lg py-5 px-8 text-[10px] text-white focus:outline-none focus:border-amber-500/50 transition-all font-mono tracking-widest uppercase" placeholder="Mail_Endpoint" />
                          </div>
                       </div>
                       
                       <div className="space-y-2">
                          <select className="w-full bg-white/[0.02] border border-white/10 rounded-lg py-5 px-8 text-[10px] text-white/40 focus:outline-none focus:border-amber-500/50 transition-all font-mono tracking-widest appearance-none cursor-pointer">
                             <option>Select_Query</option>
                             <option>Consultation</option>
                             <option>Opportunity</option>
                             <option>Collaboration</option>
                          </select>
                       </div>

                       <div className="space-y-2">
                          <textarea rows={4} className="w-full bg-white/[0.02] border border-white/10 rounded-xl py-6 px-8 text-[10px] text-white focus:outline-none focus:border-amber-500/50 transition-all font-mono tracking-widest resize-none uppercase" placeholder="Message_Payload..."></textarea>
                       </div>

                       <motion.button 
                        whileHover={{ scale: 1.01, y: -1 }}
                        whileTap={{ scale: 0.99 }}
                        className="w-full bg-amber-600 text-white py-5 rounded-lg font-black uppercase tracking-[0.4em] text-[9px] hover:bg-amber-500 transition-all font-display italic shadow-xl shadow-amber-600/10"
                       >
                         SEND_SIGNAL
                       </motion.button>
                    </form>
                 </div>
              </div>
           </div>
        </motion.section>
         <footer className="pt-40 border-t border-white/5 flex flex-col items-center text-center relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-40 bg-gradient-to-b from-amber-500/10 to-transparent"></div>
            
            <h2 className="text-8xl md:text-[12rem] font-display font-medium text-white/[0.015] uppercase italic mb-32 select-none tracking-tighter leading-none pointer-events-none">
              {DATA.name}
            </h2>
 
            <div className="flex gap-10 mb-40">
               {[
                 { icon: Github, link: DATA.contact.github },
                 { icon: Linkedin, link: DATA.contact.linkedin },
                 { icon: Mail, link: `mailto:${DATA.contact.email}` }
               ].map((s, i) => (
                 <motion.a 
                   key={i}
                   whileHover={{ y: -5, scale: 1.1, color: '#f59e0b' }}
                   href={s.link} 
                   className="text-white/10 transition-all border border-white/5 p-5 rounded-full backdrop-blur-sm"
                 >
                   <s.icon className="w-8 h-8" />
                 </motion.a>
               ))}
            </div>
 
            <div className="font-mono text-[8px] text-white/10 uppercase tracking-[0.6em] font-black leading-loose max-w-xl pb-20 italic px-6">
               "THE ONLY WAY TO DO GREAT WORK IS TO LOVE WHAT YOU DO" <br/>
               <span className="opacity-40 italic mt-8 block tracking-[0.4em]">© 2026 // SECURE_ARCH_ENCRYPTED // ENGINEERED_BY_SUSHMITA</span>
            </div>
         </footer>
      </main>
    </div>
  );
}
