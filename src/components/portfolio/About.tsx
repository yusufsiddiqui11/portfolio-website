import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Users, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "3+ Years",
    description: "Professional Experience",
  },
  {
    icon: Rocket,
    title: "AI-Powered",
    description: "Platform Architecture",
  },
  {
    icon: Users,
    title: "Agile",
    description: "Team Collaboration",
  },
  {
    icon: Zap,
    title: "Full Stack",
    description: "End-to-End Development",
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
              I'm a <span className="text-foreground font-medium">Software Engineer</span> with 3+ years of experience developing scalable web applications. 
              I specialize in <span className="text-primary">Java Spring Framework</span>, <span className="text-primary">Python FastAPI</span>, and <span className="text-primary">React.js</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I've successfully architected AI-powered platforms like <span className="text-foreground font-medium">StackInterviewer</span>, 
              implemented microservices handling multiple daily transactions, and delivered features with measurable performance improvements in Agile environments.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My passion lies in creating elegant, efficient solutions that make a real impact. 
              I thrive in collaborative environments and am always eager to tackle new challenges.
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
