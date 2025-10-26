import { MessageSquare, Lightbulb, Code, Rocket } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Discovery',
      description: 'We listen to your needs, understand your goals, and define project requirements.',
    },
    {
      icon: Lightbulb,
      title: 'Design',
      description: 'Our designers create stunning interfaces and user experiences that resonate.',
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Expert developers bring designs to life with clean, efficient, and scalable code.',
    },
    {
      icon: Rocket,
      title: 'Launch',
      description: 'We deploy, test, and support your product to ensure a successful launch.',
    },
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven agile methodology that ensures quality, transparency, and timely delivery.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200 transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-300">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center relative z-10">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
