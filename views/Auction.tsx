
import React, { useState } from 'react';
import { CropListing } from '../types';

const MOCK_LISTINGS: CropListing[] = [
  {
    id: '1',
    name: 'Basmati Rice (A-Grade)',
    farmer: 'Rajesh Kumar',
    location: 'Punjab, IN',
    quantity: '500 KG',
    basePrice: 42,
    currentBid: 58,
    qualityScore: 92,
    image: 'https://picsum.photos/seed/rice/400/300',
    verified: true
  },
  {
    id: '2',
    name: 'Organic Red Onions',
    farmer: 'Sita Devi',
    location: 'Maharashtra, IN',
    quantity: '1.2 Tons',
    basePrice: 22,
    currentBid: 29,
    qualityScore: 88,
    image: 'https://picsum.photos/seed/onions/400/300',
    verified: true
  },
  {
    id: '3',
    name: 'Golden Wheat',
    farmer: 'Amit Singh',
    location: 'Haryana, IN',
    quantity: '2.5 Tons',
    basePrice: 19,
    currentBid: 24,
    qualityScore: 85,
    image: 'https://picsum.photos/seed/wheat/400/300',
    verified: false
  }
];

const Auction: React.FC = () => {
  const [listings] = useState(MOCK_LISTINGS);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Live Crop Auction</h1>
          <p className="text-slate-500">Transparent direct-to-wholesaler bidding platform.</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-white px-4 py-2 rounded-xl border border-slate-200 flex items-center gap-2">
            <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-bold text-slate-600">42 Active Bids</span>
          </div>
          <button className="bg-emerald-600 text-white px-6 py-2 rounded-xl font-bold text-sm hover:bg-emerald-700 transition shadow-lg shadow-emerald-600/20">
            List My Crop
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {listings.map((item) => (
          <div key={item.id} className="glass rounded-3xl border border-slate-200 overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div className="relative h-48">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-800">
                {item.location}
              </div>
              {item.verified && (
                <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                  <i className="fa-solid fa-certificate"></i> AI Verified
                </div>
              )}
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">{item.name}</h3>
                  <p className="text-slate-400 text-sm">By {item.farmer} • {item.quantity}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-slate-400 uppercase">Current Bid</p>
                  <p className="text-2xl font-extrabold text-emerald-600">₹{item.currentBid}<span className="text-xs font-medium">/kg</span></p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6 bg-slate-50 p-4 rounded-2xl">
                <div className="flex-1">
                  <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase mb-1">
                    <span>Quality Index</span>
                    <span>{item.qualityScore}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500" style={{ width: `${item.qualityScore}%` }}></div>
                  </div>
                </div>
                <div className="text-center px-3 border-l border-slate-200">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Starts</p>
                  <p className="text-sm font-bold">₹{item.basePrice}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="py-3 bg-slate-100 text-slate-700 rounded-xl font-bold text-sm hover:bg-slate-200 transition">View Details</button>
                <button className="py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition">Place Bid</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Auction;
