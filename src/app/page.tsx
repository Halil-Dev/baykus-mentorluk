"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Pricing from "@/components/Pricing";
import MentorCard from "@/components/MentorCard";
import Footer from "@/components/Footer";

export default function Home() {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/mentors")
      .then((res) => res.json())
      .then((data) => setMentors(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <main className="min-h-screen bg-white relative">
      <Navbar />

      {/* Sizi Arayalım Sabit Etiketi */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[90] hidden md:block">
        <button className="bg-[#4F46E5] text-white py-6 px-3 rounded-l-2xl shadow-2xl flex flex-col items-center gap-4 hover:bg-indigo-700 transition-all group border-y border-l border-white/20">
          <span className="[writing-mode:vertical-lr] font-black uppercase tracking-widest text-[11px]">Sizi Arayalım</span>
          <span className="text-xl group-hover:scale-125 transition">📞</span>
        </button>
      </div>

      <div className="pt-2"> {/* Navbar reklam bandı olduğu için mesafe azaldı */}
        <Hero />
        
        <div className="max-w-7xl mx-auto">
          <Stats />
          
          <section id="mentors" className="py-24 px-8">
            <div className="flex justify-between items-end mb-16 px-4">
              <div className="text-left">
                <h2 className="text-4xl font-black text-slate-900 mb-2 tracking-tight">Uzman Koçlarımız</h2>
                <p className="text-slate-500 font-medium italic">Hedefine giden yolda sana en uygun koçu seç.</p>
              </div>
              <button className="text-[#0047AB] font-black border-b-4 border-blue-600/30 hover:border-blue-600 transition-all pb-2 uppercase tracking-widest text-xs">Tümünü Gör</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {mentors.map((m: any) => (
                <MentorCard key={m.id} mentor={m} />
              ))}
            </div>
          </section>

          <Pricing />
        </div>
        <Footer />
      </div>
    </main>
  );
}