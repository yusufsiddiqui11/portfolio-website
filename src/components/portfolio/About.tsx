import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Users, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "4+ Years",
    description: "Professional Experience",
  },
  {
    icon: Rocket,
    title: "GenAI",
    description: "LLM & Platform Architecture",
  },
  {
    icon: Users,
    title: "Microservices",
    description: "Distributed Systems",
  },
  {
    icon: Zap,
    title: "Full Stack",
    description: "Java Spring Boot & React",
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="container-padding max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Building the{" "}
            <span className="text-gradient">Future of Web</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a <span className="text-foreground font-medium">Full Stack Software Engineer</span> with 4+ years of experience building scalable microservices and GenAI-powered platforms. 
              I specialize in <span className="text-primary">Java Spring Boot</span>, <span className="text-primary">Python FastAPI</span>, and <span className="text-primary">React.js</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I've successfully architected AI-powered platforms like <span className="text-foreground font-medium">StackInterviewer</span>, 
              built the <span className="text-foreground font-medium">RaaS (Review & Assessment)</span> platform handling complex workflows, 
              and delivered secure, scalable microservices with 25%+ performance improvements. Proficient in LLM integration, distributed systems, and Agile delivery.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My passion lies in architecting elegant, high-performance solutions that scale. 
              I thrive in collaborative environments and love tackling complex technical challenges with production-ready code.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="glass rounded-xl p-6 text-center group hover:glow transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
