import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const skillDescriptions = {
  "Java": "Strong foundation in Java development with focus on application building",
  ".NET": "Experience with .NET framework for Windows applications",
  "JavaScript": "Frontend and backend development using modern JavaScript",
  "Data Storage & Retrieval": "Knowledge of data structures and retrieval methods",
  "Database Programming": "SQL, NoSQL database management and optimization",
  "UI/UX Design": "Creating user-friendly interfaces with modern design principles",
  "Web Programming": "Full-stack web development with focus on responsiveness",
  "GitHub": "Version control and collaboration using Git and GitHub",
  "NAS/DAS Management": "Network and direct-attached storage management",
  "System Administration": "Managing and maintaining computer systems and servers",
  "IT Support": "Technical assistance and problem resolution for end users",
  "Git Proficiency": "Advanced version control with branching strategies",
  "Database Management": "Design and optimization of database systems",
  "MS Access/Xampp/MySQL": "Experience with multiple database technologies"
};

const MatrixSkills = () => {
  const skills = SKILLS || [
    "JavaScript/TypeScript",
    "React/Next.js", 
    "Node.js",
    "Python",
    "TensorFlow",
    "Three.js",
    "WebGL",
    "Rust",
    "C++", 
    "Cryptography",
    "WebAssembly",
    "MongoDB"
  ];

  return (
    <section id="skills" className="py-24 mb-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-16 matrix-flicker text-[#00ff00] text-center">
          Technical Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="skill-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="skill-content">
                <p className="skill-title">{skill}</p>
                <p className="skill-description">{skillDescriptions[skill] || "Continuous development and improvement"}</p>
                <div className="skill-progress">
                  <div 
                    className="skill-progress-bar" 
                    style={{ width: `${Math.min(90, 65 + Math.random() * 30)}%` }}
                  ></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="matrix-terminal p-6 mt-16">
          <p className="text-[#00ff00] font-mono">
            <span className="matrix-flicker">{">"}</span> Skills continuously upgrading...
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default MatrixSkills; 