import { Target, Users, Award, Lightbulb } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Client-Centric',
      description: 'Your success is our mission. We build solutions tailored to your unique needs.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Leveraging cutting-edge technologies to keep you ahead of the competition.',
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Rigorous testing and best practices ensure reliable, scalable solutions.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled developers, designers, and strategists dedicated to your project.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">AppDost</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded in 2025, we're a passionate team of innovators committed to delivering
            world-class digital solutions that transform businesses and delight users.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold mb-2">50+</p>
              <p className="text-blue-100">Projects Delivered</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">30+</p>
              <p className="text-blue-100">Happy Clients</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">15+</p>
              <p className="text-blue-100">Team Members</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
