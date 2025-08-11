"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex items-start md:items-center justify-center bg-background text-foreground font-sans">
      <div className="w-full max-w-3xl px-5 py-10 md:py-16 space-y-14">
        
        {/* Header */}
        <motion.header 
          className="space-y-3"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Hi, I’m <span className="text-blue-500">Amitoj Singh</span>
          </h1>
          <p className="opacity-80 text-lg">
            Welcome to my portfolio website built with Next.js, Tailwind CSS, and Framer Motion.
          </p>
        </motion.header>

        {/* About */}
        <motion.section 
          className="space-y-3"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-xl md:text-2xl font-semibold border-l-4 border-blue-500 pl-3">About Me</h2>
          <p className="opacity-80 leading-relaxed">
            I am a student at Humber College (Computer Programming). I love learning modern web 
            technologies and building creative projects that solve real-world problems. My focus is 
            on clean design, smooth user experience, and functional code.
          </p>
        </motion.section>

        {/* Projects */}
        <motion.section 
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-xl md:text-2xl font-semibold border-l-4 border-blue-500 pl-3">Projects</h2>
          <div className="grid gap-5">
            {[
              { title: "Portfolio Website", desc: "Built with Next.js and Tailwind CSS.", link: "#" },
              { title: "recipe app", desc: "for college project", link: "#" },
              { title: "Lab Assignments", desc: "Work from CPAN 212 course.", link: "#" },
            ].map((proj, idx) => (
              <a
                key={idx}
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="block p-5 rounded-lg border border-foreground/20 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition"
              >
                <h3 className="font-semibold text-lg">{proj.title}</h3>
                <p className="text-sm opacity-70 mt-1">{proj.desc}</p>
              </a>
            ))}
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section 
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-xl md:text-2xl font-semibold border-l-4 border-blue-500 pl-3">Contact</h2>
          <p className="opacity-80">
            Email:{" "}
            <a href="mailto:lehalamitoj8@gmail.com" className="hover:text-blue-500 transition">
              lehalamitoj8@gmail.com
            </a>
          </p>
          <p className="opacity-80">
            GitHub:{" "}
            <a href="https://github.com/amitojlehal" target="_blank" className="hover:text-blue-500 transition">
              github.com/amitojlehal
            </a>
          </p>
        </motion.section>

        <div className="h-px bg-foreground/20" />

        {/* Footer */}
        <footer className="text-xs opacity-60 text-center">
          © {new Date().getFullYear()} Amitoj Singh
        </footer>
      </div>
    </main>
  );
}
