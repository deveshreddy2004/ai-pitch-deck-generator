export default function Technologies() {
  const techStack = [
    { name: 'React', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Next.js', category: 'Framework' },
    { name: 'Vue.js', category: 'Frontend' },
    { name: 'Kotlin', category: 'Mobile' },
    { name: 'Flutter', category: 'Mobile' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technology <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We master the latest technologies to build robust, scalable, and future-proof solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 hover:border-blue-300"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"></div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{tech.name}</h3>
                <p className="text-sm text-gray-500">{tech.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
