
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero */}
      <header className="gradient-bg text-white py-24 px-4 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest uppercase">
            Transforming Indian Agriculture • AI-Enabled
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight">
            Smart Crop Advisory <br /> & Auction System
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-10">
            A seed-to-sale digital infrastructure empowering India's 86% smallholder farmers through multilingual AI intelligence and direct market competition.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#/auction" className="bg-white text-emerald-900 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-emerald-50 transition-all hover:scale-105">Explore Auction</a>
            <a href="#/diagnosis" className="bg-emerald-800/40 border border-white/30 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-800/60 transition-all">AI Crop Health</a>
          </div>
        </div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </header>

      {/* Abstract */}
      <section id="abstract" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 w-12 bg-emerald-600 rounded-full"></div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-600">The Problem</h2>
          </div>
          <p className="text-2xl md:text-3xl font-light text-slate-700 leading-snug">
            Small and marginal farmers face a massive <span className="text-emerald-600 font-semibold">information-to-income</span> gap. Our ecosystem handholds farmers from planting to profit, using Edge-AI for diagnosis and a transparent digital auction to eliminate middlemen.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">The Four Pillars</h2>
            <p className="text-slate-500 mt-2">Integrating high-tech AI into simple rural workflows.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'fa-mobile-screen', color: 'bg-emerald-100 text-emerald-600', title: 'The Dashboard', desc: 'Voice-driven interface providing end-to-end guidance and real-time alerts.' },
              { icon: 'fa-microscope', color: 'bg-blue-100 text-blue-600', title: 'AI Diagnosis', desc: 'Edge-AI system identifying crop diseases instantly via mobile camera.' },
              { icon: 'fa-gavel', color: 'bg-amber-100 text-amber-600', title: 'Smart Auction', desc: 'Live bidding platform where wholesalers compete directly for fresh harvest.' },
              { icon: 'fa-certificate', color: 'bg-indigo-100 text-indigo-600', title: 'AI Verification', desc: 'Computer vision grades harvest quality automatically for digital trust.' }
            ].map((p, i) => (
              <div key={i} className="glass p-8 rounded-3xl border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all">
                <div className={`w-12 h-12 flex items-center justify-center rounded-xl mb-6 ${p.color}`}>
                  <i className={`fa-solid ${p.icon} text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{p.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 px-4 bg-emerald-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-10">Social & Economic Impact</h2>
              <div className="space-y-8">
                {[
                  { title: 'Eliminating Middlemen', desc: 'Removes agents taking 10-20% commission, returning full market value to farmers.' },
                  { title: 'Yield Loss Prevention', desc: 'Early AI detection cuts down the 25% annual loss from late-stage disease discovery.' },
                  { title: 'Radical Accessibility', desc: 'Voice-first AI in local dialects allows even non-literate farmers to trade globally.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-emerald-800 rounded-full flex-shrink-0 flex items-center justify-center text-emerald-400">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl floating">
                <img src="https://picsum.photos/seed/agri/800/600" alt="Agriculture Impact" className="w-full object-cover h-[400px]" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-[220px] border border-slate-100 text-slate-900">
                <p className="text-emerald-600 text-xs font-bold uppercase mb-1">Income Growth</p>
                <p className="font-extrabold text-3xl">30%+</p>
                <p className="text-slate-500 text-xs">Expected increase in net farmer profits within first year.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
