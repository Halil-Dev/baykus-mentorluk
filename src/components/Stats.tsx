export default function Stats() {
  const stats = [
    { label: "Derece Koçu", value: "50+", icon: "🎓" },
    { label: "Mutlu Öğrenci", value: "1.200+", icon: "🎯" },
    { label: "Yıllık Tecrübe", value: "8 Yıl", icon: "⏳" },
    { label: "Başarı Oranı", value: "%98", icon: "📈" },
  ];

  return (
    // 'py-20' olan yeri 'py-8' yaparak alt/üst boşluğu ciddi oranda daralttık
    // '-mt-16' (veya duruma göre -mt-20) ekleyerek Hero banner'ın üzerine hafifçe bindirdik
    <section className="py-8 bg-white relative z-20 -mt-16 md:-mt-20">
      <div className="max-w-6xl mx-auto px-8"> {/* 'max-w-7xl'den 'max-w-6xl'e çekerek biraz küçülttük */}
        
        {/* Daha ince ve zarif Stats Kutusu */}
        <div className="bg-white/80 backdrop-blur-md rounded-[3rem] border border-slate-100 p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative overflow-hidden">
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group">
                {/* İkon Dairesini küçülttük (w-12 -> w-10) */}
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110 duration-300">
                  <span className="text-lg">{stat.icon}</span>
                </div>
                
                {/* Sayı Değerini küçülttük (text-5xl -> text-3xl) */}
                <div className="text-3xl md:text-4xl font-black text-[#000033] tracking-tighter mb-1 italic">
                  {stat.value}
                </div>
                
                {/* Başlık */}
                <div className="text-[10px] font-black text-[#0047AB] uppercase tracking-[0.15em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}