"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MentorDetail() {
  const { id } = useParams();
  const [mentor, setMentor] = useState<any>(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/mentors`)
      .then(res => res.json())
      .then(data => {
        const found = data.find((m: any) => m.id.toString() === id);
        setMentor(found);
      });
  }, [id]);

  if (!mentor) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-12 h-12 border-4 border-[#0047AB] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-28">
        {/* Üst Kısım: Profil Banner */}
        <section className="bg-gradient-to-r from-slate-900 to-[#000033] py-20 px-8 text-white">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-[3.5rem] blur opacity-30"></div>
              <img 
                src={mentor.imageUrl || "/placeholder-avatar.png"} 
                className="relative w-56 h-56 rounded-[3rem] object-cover border-4 border-white/10 shadow-2xl"
              />
            </div>
            <div className="text-center md:text-left space-y-4">
              <h1 className="text-5xl font-black tracking-tight">{mentor.university}</h1>
              <p className="text-cyan-400 font-black uppercase tracking-[0.3em] text-sm">{mentor.department}</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                <span className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-2xl text-xs font-black uppercase border border-white/10">
                  🏆 Derece: {mentor.ranking}
                </span>
                <span className="bg-green-500/20 backdrop-blur-md text-green-400 px-6 py-2 rounded-2xl text-xs font-black border border-green-500/20">
                  ⭐ 4.9 (Onaylı Koç)
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* İçerik Alanı */}
        <section className="py-24 px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="lg:col-span-2 space-y-16">
            {/* Hakkımda */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-2 h-10 bg-[#0047AB] rounded-full"></div>
                <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Koçluk Yaklaşımım</h2>
              </div>
              <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
                <p className="text-slate-600 leading-[1.8] text-xl italic font-medium">
                  "{mentor.bio} Sınav maratonunda sadece ders değil, mental dayanıklılık ve stratejik planlama ile fark yaratacağız."
                </p>
              </div>
            </div>
            
            {/* Takvim Alanı (Gelişmiş Görünüm) */}
            <div className="bg-[#0047AB]/5 p-12 rounded-[4rem] border-2 border-[#0047AB]/10 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                  <span className="text-9xl font-black italic">B</span>
               </div>
               <h3 className="text-2xl font-black text-[#0047AB] mb-6 uppercase tracking-tighter">Müsaitlik Takvimi</h3>
               <p className="text-slate-500 text-lg mb-8 max-w-md">Koçunun boş zamanlarını incele ve sana en uygun saati hemen rezerve et.</p>
               <div className="h-64 bg-white/50 rounded-3xl border-2 border-dashed border-blue-200 flex items-center justify-center text-blue-300 font-bold italic uppercase tracking-widest text-sm">
                  Takvim Modülü Yükleniyor...
               </div>
            </div>
          </div>

          {/* Sağ Panel: Randevu Kartı */}
          <div className="lg:col-span-1">
            <div className="bg-white border-2 border-slate-100 p-10 rounded-[3.5rem] shadow-2xl sticky top-32 transition-all hover:border-blue-200">
              <div className="text-xs font-black text-slate-400 mb-2 uppercase tracking-widest">Seans Ücreti</div>
              <div className="text-5xl font-black text-[#0047AB] mb-10 tracking-tighter italic">{mentor.hourlyRate} ₺ <span className="text-sm text-slate-400 not-italic font-medium">/ 60 dk</span></div>
              
              <div className="space-y-4 mb-10 text-slate-600 font-bold text-sm">
                <div className="flex items-center gap-3">✅ <p>Bire Bir Görüşme</p></div>
                <div className="flex items-center gap-3">✅ <p>Haftalık Analiz Desteği</p></div>
                <div className="flex items-center gap-3">✅ <p>Soru-Cevap Sınırsız</p></div>
              </div>

              <button className="w-full bg-[#0047AB] text-white py-6 rounded-[2rem] font-black uppercase tracking-widest shadow-2xl shadow-blue-200 hover:bg-blue-800 hover:-translate-y-1 transition-all active:scale-95">
                Randevu Oluştur
              </button>
              
              <div className="mt-8 flex items-center justify-center gap-3 opacity-40 grayscale">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Iyzico_logo.png" className="h-4" alt="iyzico" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}