export default function Pricing() {
  const plans = [
    {
      name: "Deneme Kulübü",
      price: "1.199",
      period: "4 Hafta",
      features: ["Haftalık Analiz", "Video Çözüm", "Online Gözetmenlik"],
      popular: false,
    },
    {
      name: "YKS Koçluk",
      price: "45.000",
      period: "Sezonluk",
      features: ["Derece Koçu Desteği", "Günlük Program Takibi", "Haftada 2 Canlı Görüşme", "BanaKoç App Sınırsız"],
      popular: true,
    },
    {
      name: "Full Paket",
      price: "4.399",
      period: "4 Hafta",
      features: ["Tüm Koçluk Hizmetleri", "Deneme Kulübü Üyeliği", "Veli Görüşme Desteği"],
      popular: false,
    },
  ];

  return (
    <section id="paketler" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Başlık Alanı */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Üyelik Paketleri
          </h2>
          <p className="text-slate-500 font-bold max-w-2xl mx-auto italic uppercase text-[12px] tracking-widest">
            Sana en uygun olanı seç ve hemen çalışmaya başla.
          </p>
        </div>

        {/* Paketler Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative p-10 rounded-[3.5rem] flex flex-col transition-all duration-500 hover:-translate-y-2 ${
                plan.popular
                  ? "border-2 border-[#0047AB] shadow-[0_30px_60px_-15px_rgba(0,71,169,0.2)] bg-white z-10 scale-105"
                  : "border-2 border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#FFD700] text-black text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-tighter shadow-md">
                  En Çok Tercih Edilen
                </div>
              )}

              <h3 className="text-2xl font-black mb-1 italic text-slate-900">
                {plan.name}
              </h3>
              
              <div className="mt-8 mb-10">
                <span className="text-5xl font-black text-[#0047AB] tracking-tighter italic">
                  {plan.price} ₺
                </span>
                <span className="text-slate-400 text-sm font-bold block mt-2 uppercase tracking-widest">
                  / {plan.period}
                </span>
              </div>

              <ul className="space-y-5 mb-12 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-600 font-bold text-[13px]">
                    <span className="flex-shrink-0 w-5 h-5 bg-blue-50 text-[#0047AB] rounded-full flex items-center justify-center text-[10px]">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Alfa Tarzı Dinamik Buton */}
              <button
                className={`w-full py-5 rounded-[2rem] font-black text-[12px] uppercase tracking-[0.2em] transition-all duration-300 active:scale-95 ${
                  plan.popular
                    ? "bg-[#0047AB] text-white shadow-[0_10px_20px_rgba(0,71,169,0.3)] hover:bg-blue-800 hover:shadow-[0_15px_30px_rgba(0,71,169,0.4)]"
                    : "bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                Satın Al
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}