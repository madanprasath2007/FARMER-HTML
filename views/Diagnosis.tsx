
import React, { useState, useRef } from 'react';
import { analyzeCropImage } from '../services/geminiService';
import { DiagnosisResult } from '../types';

const Diagnosis: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DiagnosisResult | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = (reader.result as string).split(',')[1];
        setPreview(reader.result as string);
        processImage(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const processImage = async (base64: string) => {
    setLoading(true);
    try {
      const data = await analyzeCropImage(base64);
      setResult(data);
    } catch (error) {
      console.error(error);
      alert("Error processing diagnosis. Check API key.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 animate-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">AI Crop Health Diagnosis</h1>
        <p className="text-slate-500">Upload a photo of your crop to identify diseases and get treatment advice.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="aspect-square bg-white border-2 border-dashed border-slate-300 rounded-3xl flex flex-col items-center justify-center cursor-pointer hover:border-emerald-500 transition-colors relative overflow-hidden group"
          >
            {preview ? (
              <img src={preview} className="absolute inset-0 w-full h-full object-cover opacity-80" alt="Preview" />
            ) : (
              <div className="text-center p-8">
                <i className="fa-solid fa-camera text-4xl text-slate-300 mb-4 group-hover:text-emerald-500 transition-colors"></i>
                <p className="text-slate-500 font-medium">Click to upload or take photo</p>
              </div>
            )}
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              className="hidden" 
              accept="image/*" 
            />
          </div>
          
          <button 
            disabled={loading}
            onClick={() => fileInputRef.current?.click()}
            className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold hover:bg-emerald-700 transition disabled:opacity-50"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <i className="fa-solid fa-spinner animate-spin"></i> Analyzing...
              </span>
            ) : "Scan New Crop"}
          </button>
        </div>

        <div className="space-y-6">
          {result ? (
            <div className="glass p-8 rounded-3xl border border-emerald-100 shadow-xl animate-in fade-in duration-500">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1">Diagnosis Result</h3>
                  <h2 className="text-2xl font-bold text-slate-900">{result.disease}</h2>
                </div>
                <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold">
                  {Math.round(result.confidence)}% Confidence
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-slate-800 flex items-center gap-2 mb-2">
                    <i className="fa-solid fa-prescription-bottle-medical text-emerald-600"></i>
                    Immediate Treatment
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{result.treatment}</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 flex items-center gap-2 mb-2">
                    <i className="fa-solid fa-shield-halved text-emerald-600"></i>
                    Prevention Plan
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{result.prevention}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full border-2 border-slate-100 rounded-3xl flex items-center justify-center bg-slate-50 p-12 text-center">
              <div className="text-slate-400">
                <i className="fa-solid fa-microscope text-5xl mb-4 opacity-20"></i>
                <p className="italic">Analysis results will appear here after scanning.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Diagnosis;
