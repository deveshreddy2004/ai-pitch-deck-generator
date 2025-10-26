import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack marketplace with real-time inventory, payment integration, and analytics.',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Healthcare Mobile App',
      description: 'Telemedicine platform connecting patients with doctors for virtual consultations.',
      tech: ['React Native', 'Firebase', 'WebRTC'],
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Financial Dashboard',
      description: 'Enterprise analytics tool for tracking KPIs, revenue, and business insights.',
      tech: ['Vue.js', 'Python', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Social Learning Platform',
      description: 'Educational network enabling course creation, student engagement, and progress tracking.',
      tech: ['Next.js', 'Supabase', 'TailwindCSS'],
      image: 'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real solutions that deliver real results for our clients across various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 font-semibold transition-colors">
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
