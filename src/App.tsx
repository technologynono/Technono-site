import React from 'react';
import { Rocket, Zap, Brain, Shield, Info, Mail, Github, Twitter, Youtube } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Rocket className="text-blue-500" />
          <span className="text-xl font-bold tracking-tight">GravityDefy</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          <a href="#science" className="hover:text-blue-400 transition-colors">Science</a>
          <a href="#tech" className="hover:text-blue-400 transition-colors">Technology</a>
          <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
        </div>
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-blue-900/20">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-6 pt-20 pb-32 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          The Real Science of Defying Gravity
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Explore the fascinating intersection of maglev technology, theoretical physics, and the future of interstellar travel.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-slate-100 text-slate-950 px-8 py-3 rounded-lg font-bold hover:bg-white transition-all flex items-center justify-center gap-2">
            <Zap size={20} /> Watch Lectures
          </button>
          <button className="bg-slate-800 text-white border border-slate-700 px-8 py-3 rounded-lg font-bold hover:bg-slate-700 transition-all flex items-center justify-center gap-2">
            <Info size={20} /> Research Papers
          </button>
        </div>
      </header>

      {/* Featured Topics */}
      <section id="science" className="bg-slate-900/50 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center">Core Research Areas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="text-yellow-500" />}
              title="Maglev Evolution"
              description="From high-speed trains to electromagnetic launch systems, explore how magnetic levitation is revolutionizing transport."
            />
            <FeatureCard
              icon={<Brain className="text-purple-500" />}
              title="Psychic Spacecraft"
              description="Investigating theoretical propulsion methods that interface directly with neural networks and consciousness."
            />
            <FeatureCard
              icon={<Shield className="text-emerald-500" />}
              title="Gravity Shielding"
              description="The experimental quest for materials and fields that can modulate local gravitational effects."
            />
          </div>
        </div>
      </section>

      {/* Multimedia Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="bg-gradient-to-br from-blue-900/20 to-slate-900 border border-slate-800 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6 italic">Listen to the Journey</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Dive deep into our exclusive audio series exploring everything from Maglev systems to the speculative physics of psychic spacecraft. Available in multiple languages.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors cursor-pointer">
                <div className="bg-blue-600 p-2 rounded-lg"><Rocket size={20} /></div>
                <div>
                  <div className="font-bold">From Maglevs to Psychic Spacecraft</div>
                  <div className="text-xs text-slate-500">English • 45 min</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-emerald-500 transition-colors cursor-pointer">
                <div className="bg-emerald-600 p-2 rounded-lg"><Brain size={20} /></div>
                <div>
                  <div className="font-bold text-lg">गुरुत्वाकर्षण को मात देने का असली विज्ञान</div>
                  <div className="text-xs text-slate-500">Hindi • 38 min</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative bg-slate-800 w-full h-full rounded-2xl border border-slate-700 flex items-center justify-center overflow-hidden">
                <div className="flex flex-col items-center gap-2">
                   <div className="flex gap-1">
                    {[1,2,3,4,5].map(i => (
                      <div key={i} className={`w-1 h-${i*4} bg-blue-500 rounded-full animate-bounce`} style={{animationDelay: `${i*0.1}s`}}></div>
                    ))}
                   </div>
                   <span className="text-xs font-mono text-blue-400">PLAYING...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 pt-16 pb-8">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Rocket className="text-blue-500" />
              <span className="text-xl font-bold tracking-tight">GravityDefy</span>
            </div>
            <p className="text-slate-500 max-w-sm mb-6">
              Pushing the boundaries of human knowledge and exploration through rigorous science and visionary engineering.
            </p>
            <div className="flex gap-4">
              <Twitter className="text-slate-400 hover:text-white cursor-pointer" size={20} />
              <Github className="text-slate-400 hover:text-white cursor-pointer" size={20} />
              <Youtube className="text-slate-400 hover:text-white cursor-pointer" size={20} />
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6">Resource</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li className="hover:text-blue-400 cursor-pointer">Whitepapers</li>
              <li className="hover:text-blue-400 cursor-pointer">Open Source</li>
              <li className="hover:text-blue-400 cursor-pointer">Research Lab</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Connect</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer"><Mail size={14}/> Contact Us</li>
              <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer"><Info size={14}/> FAQ</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-6 text-center text-slate-600 text-xs">
          © 2025 Gravity Defying Science. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-slate-800/30 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all group">
      <div className="mb-6 p-3 bg-slate-800 rounded-xl w-fit group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-slate-400 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}

export default App;
