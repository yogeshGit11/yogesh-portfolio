"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Server,
  Terminal,
  ArrowDown,
  Sparkles,
} from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
  featured: boolean
}

interface Experience {
  id: number
  company: string
  position: string
  duration: string
  description: string[]
  technologies: string[]
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [mobileOpen, setMobileOpen] = useState(false)

  const projects: Project[] = [
    {
      id: 1,
      title: "Healthcare Diagnosis Predictor",
      description:
        "Machine learning project that predicts patient medical conditions using demographic and clinical data with a Random Forest model.",
      technologies: ["Python", "pandas", "scikit-learn"],
      githubUrl: "https://github.com/yogeshGit11/healthcare-diagnosis-predictor",
      featured: true,
    },
    {
      id: 2,
      title: "AI Prompt Review Project",
      description:
        "Evaluated AI-generated responses by providing prompts, reviewing outputs, and giving feedback to improve model performance at Turing.",
      technologies: ["Python", "AI Evaluation", "Prompt Engineering", "Data Analysis"],
      githubUrl: "https://github.com/yourusername/ai-prompt-review",
      featured: true,
    },
    {
      id: 3,
      title: "Task Management System",
      description: "Collaborative task management with real-time updates and team collaboration features",
      technologies: ["Python", "Flask", "SQLAlchemy", "WebSocket", "JWT"],
      githubUrl: "https://github.com/yourusername/task-manager",
      featured: false,
    },
  ]

  const experience: Experience[] = [
    {
      id: 1,
      company: "KOLI Infotech Pvt. Ltd.",
      position: "Backend Developer",
      duration: "2024 - Present",
      description: [
        "Developed ML project that predicts patient medical conditions using demographic and clinical data with Random Forest model",
        "Evaluated AI-generated responses by providing prompts and constructive feedback to improve model performance",
        "Implemented automated testing increasing code coverage to 85 percent",
        "Collaborated with frontend team to integrate APIs seamlessly",
      ],
      technologies: ["Python", "Django", "FastAPI", "PostgreSQL", "Docker", "AWS", "Kubernetes", "DevOps"],
    },
    {
      id: 2,
      company: "Tagline Infotech LLP",
      position: "Junior Python Developer",
      duration: "2023 - 2024",
      description: [
        "Learned Python programming and backend development basics",
        "Worked on small projects to practice data handling and automation",
        "Practiced teamwork and following coding guidelines",
        "Got hands-on experience with microservices concepts through exercises",
      ],
      technologies: ["Python", "Django", "JavaScript", "MySQL", "Git", "Docker"],
    },
  ]

  const skills: Record<string, string[]> = {
    "Programming Languages": ["Python", "JavaScript", "SQL"],
    "Front-End Development": ["HTML", "CSS", "Bootstrap", "React"],
    "Web Frameworks": ["Django", "FastAPI", "Flask"],
    Databases: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
    "Version Control": ["Git", "GitHub", "GitLab"],
    "Cloud & Infrastructure": ["AWS", "Linux", "Terraform", "Ansible"],
    Containerization: ["Docker", "Kubernetes"],
    "Development Practices": ["REST APIs", "GraphQL", "Microservices", "CI/CD", "Testing", "Postman"],
  }

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = ["about", "experience", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-x-hidden">
      {/* Animated Background Elements */}
  <div className="fixed inset-0 overflow-hidden pointer-events-none">
  <div className="absolute -top-48 -right-48 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-duration-8000"></div>
  <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-1500 animation-duration-10000"></div>
  <div className="absolute top-48 left-48 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-3000 animation-duration-12000"></div>
</div>



      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              <span>{"<Yogesh Chaudhari />"}</span>
            </div>

            {/* Hamburger for small screens */}
            <button
              className="md:hidden p-2 rounded text-slate-300 hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              ☰
            </button>

            <div className="hidden md:flex space-x-8">
              {["about", "experience", "projects", "skills", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 relative group ${
                    activeSection === section ? "text-cyan-400 font-medium" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {section}
                  <span
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transform transition-transform duration-300 ${
                      activeSection === section ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </button>
              ))}
            </div>
          </div>
          {/* Mobile menu */}
          <div className={`md:hidden ${mobileOpen ? "block" : "hidden"} px-4 pb-4`}>
            <div className="flex flex-col space-y-2">
              {["about", "experience", "projects", "skills", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => { setMobileOpen(false); scrollToSection(section); }}
                  className={`w-full text-left py-2 px-2 rounded ${
                    activeSection === section ? "text-cyan-400 font-medium" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center py-20">
              {/* <div
                className={`mb-8 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6 animate-spin-slow shadow-2xl shadow-purple-500/25">
                  <Code className="w-16 h-16 text-white animate-pulse" />
                </div>
              </div> */}
              <div
  className={`mb-12 transform transition-all duration-1000 ${
    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
  }`}
>
  <div className="relative w-68 h-64 mx-auto mb-6">
    {/* Gradient rotating ring */}
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-full animate-spin-slow"></div>

    {/* Inner profile image container */}
    <div className="absolute inset-[6px] bg-white dark:bg-gray-900 rounded-full overflow-hidden flex items-center justify-center shadow-2xl shadow-purple-500/25 animate-float">
      <img
        src="/ypc.jpeg"
        alt="Yogesh Chaudhari - Python Developer"
        className="w-full h-full object-cover rounded-full border-4 border-white animate-pulse-slow"
      />
    </div>
  </div>
</div>

<div
  className={`transform transition-all duration-1000 delay-300 ${
    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
  }`}
>
  <h1
    className="text-4xl md:text-5xl font-bold text-center 
               bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 
               bg-clip-text text-transparent 
               mb-5 
               animate-pulse hover:scale-105 transition-transform duration-100"
  >
    Yogesh Chaudhari
  </h1>
</div>





<div
  className={`transform transition-all duration-1000 delay-500 ${
    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
  }`}
>
  <p className="font-sans text-lg md:text-xl text-slate-300 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed text-center">
    Experienced   <span
    className="text-2xl md:text-2xl font-semibold text-center
               bg-gradient-to-r from-yellow-400 via-yellow-400 to-yellow-400
               bg-clip-text text-transparent 
               mt-2 animate-gradient-x hover:scale-105 transition-transform duration-700"
  >
    Python Developer
  </span> with 2+ years of building scalable web applications and APIs. 
    Passionate about solving technical challenges, optimizing performance, and delivering innovative solutions. Self-taught developer.
  </p>
</div>


<div
  className={`flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mb-8 
              transform transition-all duration-1000 delay-700 
              ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
>
  {/* View My Work - Cyan-Purple Gradient with Glow */}
  <Button
    onClick={() => scrollToSection("projects")}
    size="lg"
    className="flex items-center bg-gradient-to-r from-cyan-500 to-purple-500 
               hover:from-cyan-400 hover:to-purple-600 
               transform hover:scale-105 transition-all duration-300 
               shadow-lg shadow-cyan-500/30 text-white font-semibold animate-pulse-slow"
  >
    <Sparkles className="w-5 h-5 mr-2 animate-spin-slow" />
    View My Work
  </Button>

  {/* Get In Touch - Purple Outline with Fade Background */}
<Button
  variant="outline"
  size="lg"
  onClick={() => scrollToSection("contact")}
  className="flex items-center border-pink-500 text-pink-500 
             hover:bg-pink-500 hover:text-white 
             transform hover:scale-105 transition-all duration-300 
             bg-transparent font-semibold animate-fade-in"
>
  {/* Mail/Message Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 mr-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z"
    />
  </svg>

  Get In Touch
</Button>


  {/* View Resume - Green Gradient with Slide Animation */}
<Button
  variant="outline"
  size="lg"
  onClick={() => window.open("/path-to-your-resume.pdf", "_blank")}
  className="flex items-center border-yellow-400 text-yellow-400 
             hover:bg-gradient-to-r hover:from-yellow-400 hover:to-teal-400 
             hover:text-black transform hover:scale-105 transition-all duration-300 
             bg-transparent font-semibold animate-gradient-x"
>
  {/* Download Icon */}
  <svg
    className="h-5 w-5 mr-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v8m0 0l-4-4m4 4l4-4M12 4v8" />
  </svg>

  View Resume
</Button>


</div>


            <div
              className={`flex justify-center space-x-6 transform transition-all duration-1000 delay-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <a
                href="https://github.com/yogeshGit11"
                className="text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="www.linkedin.com/in/yogesh-chaudhari-29ab70219"
                className="text-slate-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:ymali2434@gmail.com"
                className="text-slate-400 hover:text-pink-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                aria-label="Email Contact"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ArrowDown className="w-6 h-6 text-purple-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-12 animate-fade-in">
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card
                key={exp.id}
                className="border-l-4 border-l-cyan-500 bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10 animate-slide-in-left"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div>
                      <CardTitle className="text-xl text-white">{exp.position}</CardTitle>
                      <CardDescription className="text-lg font-medium text-cyan-400">{exp.company}</CardDescription>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none w-fit"
                    >
                      {exp.duration}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-slate-300 hover:text-white transition-colors duration-300">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-105"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-500 transform hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:shadow-purple-500/20 animate-slide-in-up group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex justify-between items-start gap-2">
                    <CardTitle className="text-xl text-white group-hover:text-purple-400 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    {project.featured && (
                      <Badge className="bg-gradient-to-r from-cyan-500 to-purple-600 animate-pulse">Featured</Badge>
                    )}
                  </div>
                  <CardDescription className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-slate-700 text-slate-300 hover:bg-slate-600 transition-all duration-300 transform hover:scale-105"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 bg-transparent"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        asChild
                        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-12">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card
                key={category}
                className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 animate-slide-in-up group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {category === "Programming Languages" && <Code className="w-5 h-5 mr-2 text-cyan-400" />}
                    {category === "Databases" && <Database className="w-5 h-5 mr-2 text-purple-400" />}
                    {category === "Web Frameworks" && <Server className="w-5 h-5 mr-2 text-pink-400" />}
                    {category === "Version Control" && <Terminal className="w-5 h-5 mr-2 text-cyan-400" />}
                    {category === "Cloud & Infrastructure" && <Code className="w-5 h-5 mr-2 text-purple-400" />}
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="border-slate-600 text-slate-300 hover:border-purple-400 hover:text-purple-400 hover:bg-purple-400/10 transition-all duration-300 transform hover:scale-110 animate-fade-in"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-8">
            Let’s Build Something Great
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
I’m always seeking new challenges and opportunities. Let’s connect and create solutions together!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-pink-500/25"
            >
              <a href="mailto:ymali2434@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-purple-500/20 text-slate-300 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            &copy; 2025 Yogesh Chaudhari. Open to new opportunities
          </p>
        </div>
      </footer>
    </div>
  )
}
