
import React, { useState } from 'react';
import { getMarketAdvisory } from '../services/geminiService';

const Advisory: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const handleAsk = async () => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const res = await getMarketAdvisory(query);
      setResponse(res);
    } catch (error) {
      setResponse("Could not reach the expert. Check connection.");
    } finally {
      setLoading(false);
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // In a real app, this would trigger Bhashini or Browser Speech API
    if (!isRecording) {
      setTimeout(() => {
        setQuery("What are the current trends for potato prices in Uttar Pradesh?");
        setIsRecording(false);
      }, 2000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 animate-in fade-in duration-500">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Voice-First Expert Advisory</h1>
        <p className="text-slate-500">Ask any agricultural question in your local language.</p>
      </div>

      <div className="glass p-8 rounded-[40px] border border-slate-200 shadow-2xl space-y-8">
        <div className="flex gap-4 items-center">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                <i className="fa-solid fa-language text-xl"></i>
            </div>
            <p className="text-sm font-medium text-slate-500">Translation active: Hindi/English/Tamil</p>
        </div>

        <div className="relative">
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="E.g., How can I improve my wheat yield this season?"
            className="w-full h-40 bg-slate-50 border-none rounded-3xl p-6 text-lg focus:ring-2 focus:ring-emerald-500 resize-none transition-all shadow-inner"
          />
          <button 
            onClick={toggleRecording}
            className={`absolute bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center transition-all ${isRecording ? 'bg-red-500 animate-pulse' : 'bg-emerald-600 hover:scale-110 shadow-lg shadow-emerald-500/30'} text-white`}
          >
            <i className={`fa-solid ${isRecording ? 'fa-stop' : 'fa-microphone'} text-xl`}></i>
          </button>
        </div>

        <button 
          onClick={handleAsk}
          disabled={loading || !query}
          className="w-full bg-slate-900 text-white py-5 rounded-3xl font-extrabold text-lg hover:bg-slate-800 transition disabled:opacity-50"
        >
          {loading ? "Consulting AI Experts..." : "Get Expert Advice"}
        </button>

        {response && (
          <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100 animate-in slide-in-from-top-4 duration-300">
            <h4 className="text-emerald-700 font-bold mb-4 flex items-center gap-2">
                <i className="fa-solid fa-robot"></i> Expert Recommendation
            </h4>
            <div className="text-slate-700 leading-relaxed whitespace-pre-wrap">
              {response}
            </div>
          </div>
        )}
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Voice Help', icon: 'fa-ear-listen' },
          { label: 'Weather Alerts', icon: 'fa-cloud-sun' },
          { label: 'Mandi Rates', icon: 'fa-chart-area' }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 p-6 glass rounded-2xl border border-slate-100">
            <div className="text-emerald-600"><i className={`fa-solid ${item.icon} text-2xl`}></i></div>
            <span className="font-bold text-slate-800">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advisory;
