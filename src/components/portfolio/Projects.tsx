import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "StackInterviewer",
    subtitle: "AI Mock Interview Platform",
    description:
      "Full-stack AI platform with dynamic question generation, generating instant feedback for users. Architected using Python FastAPI backend with OpenAI GPT-4 integration.",
    techStack: ["Python FastAPI", "React.js", "OpenAI GPT-4", "RabbitMQ", "MongoDB"],
    featured: true,
    year: "2024",
  },
  {
    title: "CredWiz",
    subtitle: "Digital Wallet Application",
    description:
      "Web application enabling users to manage and perform transactions with a digital wallet. Developed responsive React.js interface improving user satisfaction by 30% through real-time updates.",
    techStack: ["Java", "Spring Boot", "React.js", "MySQL", "REST APIs"],
    featured: false,
  },
  {
    title: "CasaVenturo",
    subtitle: "Service Marketplace",
    description:
      "Full-stack application helping users manage household tasks and book vendors based on specific needs. Designed intuitive interface enhancing user experience and engagement.",
    techStack: ["Java", "Spring Boot", "React.js", "MongoDB"],
    featured: false,
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container-padding max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`glass rounded-2xl p-6 md:p-8 group transition-all duration-300 hover:shadow-elevated ${
                project.featured ? "ring-1 ring-primary/20 glow" : ""
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    {project.featured && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                        <Sparkles className="h-3 w-3" />
                        Featured
                      </span>
                    )}
                    {project.year && (
                      <span className="text-xs text-muted-foreground">{project.year}</span>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-primary/80 font-medium mb-4">{project.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
