import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/nturukunga/repos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const sortedProjects = data.sort((a, b) => 
          new Date(b.updated_at) - new Date(a.updated_at)
        );
        setProjects(sortedProjects);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching GitHub repos:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="projects" className="py-24 mb-24">
        <div className="matrix-terminal p-6 text-center">
          <p className="matrix-flicker">Loading repositories...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-24 mb-24">
        <div className="matrix-terminal p-6 text-center">
          <p>Error loading GitHub repositories: {error}</p>
          <p className="mt-4">Displaying fallback project data instead.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-24 mb-24 section-spacing">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-16 matrix-flicker text-[#00ff00] text-center">
          GitHub Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-2 text-[#00ff00]">{project.name}</h3>
              <p className="mb-4 text-sm text-[#00ff00]">
                {project.description || "No description available."}
              </p>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center text-xs text-[#00ff00]">
                  <span className="mr-2">⭐ {project.stargazers_count}</span>
                  <span>🍴 {project.forks_count}</span>
                </div>
                <a 
                  href={project.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-transparent text-[#00ff00] text-xs border border-[#00ff00] hover:bg-[#00ff00] hover:text-[#000] transition-all rounded"
                >
                  View Code
                </a>
              </div>
              
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 border border-[#00ff00] rounded bg-transparent">
                  {project.language || "N/A"}
                </span>
                <span className="text-xs px-2 py-1 border border-[#00ff00] rounded bg-transparent">
                  Updated: {new Date(project.updated_at).toLocaleDateString()}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="matrix-terminal p-6 mt-16 text-center">
          <p className="text-[#00ff00]">
            <span className="matrix-flicker">{">"}</span> View more on my 
            <a 
              href="https://github.com/nturukunga" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-2 underline hover:text-white"
            >
              GitHub profile
            </a>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects; 