import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>Your Complete IT Solution Partner</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Building Digital
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                {' '}Excellence{' '}
              </span>
              That Transforms
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              We craft innovative web solutions, mobile apps, and enterprise software that drive growth
              and deliver exceptional user experiences. Your vision, our expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center space-x-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
              >
                <span>View Projects</span>
              </a>
            </div>

            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">100%</p>
                  <p className="text-sm text-gray-600">Client Satisfaction</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">24/7</p>
                  <p className="text-sm text-gray-600">Support Available</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-400 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white rounded-full"></div>
                    <div className="flex-1">
                      <div className="h-3 bg-white/50 rounded w-3/4 mb-2"></div>
                      <div className="h-2 bg-white/30 rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-white/40 rounded"></div>
                    <div className="h-2 bg-white/40 rounded w-5/6"></div>
                    <div className="h-2 bg-white/40 rounded w-4/6"></div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="h-8 bg-white/50 rounded-lg flex-1"></div>
                    <div className="h-8 bg-white rounded-lg w-24"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-10 -right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 left-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
