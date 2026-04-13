export default function Hero() {
  return (
    <section className="relative pt-32 pb-12 px-4 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
      {/* 装饰 Objeler: Baykuş tarzı hareketlilik */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-orange-400 rounded-full blur-[90px] opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-10 right-20 w-32 h-32 bg-cyan-400 rounded-full blur-[100px] opacity-20"></div>

      {/* Ana Banner Kutusu  */}
      <div className="max-w-7xl mx-auto bg-[#000033] rounded-[2.5rem] overflow-hidden min-h-[500px] flex flex-col md:flex-row items-center relative shadow-2xl shadow-blue-900/10 border border-slate-900/10">
        
        {/* Sol Taraf: Metin İçeriği */}
        <div className="flex-1 p-12 md:p-20 z-10 text-center md:text-left">
          <div className="inline-block px-4 py-1.5 mb-8 bg-indigo-500/20 text-indigo-300 rounded-full text-[10px] font-black tracking-[0.2em] uppercase">
             🚀 YKS 2026 Erken Kayıt Başladı!
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8 tracking-tighter animate-fade-in">
            Sana Özel <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-100">Bire Bir Koçluk</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-md mb-12 leading-relaxed font-medium">
            Derece yapmış koçlar, uzman danışmanlar ve Türkiye'nin en iyi sınav App'i ile işini şansa bırakma, bilimsel yöntemlerle başarıya ulaş.
          </p>
          <button className="bg-indigo-600 text-white px-10 py-5 rounded-[2rem] text-lg font-black shadow-xl shadow-indigo-900/50 hover:bg-indigo-700 hover:-translate-y-1 transition-all flex items-center gap-3 active:scale-95 group mx-auto md:mx-0">
            <span className="text-2xl group-hover:animate-bounce">📹</span>
            <span>Ücretsiz Tanıtım Görüşmesi</span>
          </button>
        </div>

        {/* Sağ Taraf: Renkli Mentör Fotoğrafları */}
        <div className="flex-1 relative h-full w-full hidden md:flex justify-end p-10 gap-6">
           {/* Örnek Mentör 1 */}
           <div className="w-56 h-72 bg-slate-800 rounded-[2rem] rotate-3 border-4 border-indigo-500/10 overflow-hidden shadow-2xl shadow-slate-950 hover:-rotate-1 transition-transform duration-500 hover:border-indigo-500">
              <img 
                src="/mentor1.jpg" 
                alt="Mentor"
                className="w-full h-full object-cover transition duration-700" 
              />
           </div>
           {/* Örnek Mentör 2 */}
           <div className="w-56 h-72 bg-slate-800 rounded-[2rem] -rotate-3 mt-16 border-4 border-cyan-500/10 overflow-hidden shadow-2xl shadow-slate-950 hover:rotate-1 transition-transform duration-500 hover:border-cyan-500">
              <img 
                src="/mentor2.jpg" 
                alt="Mentor"
                className="w-full h-full object-cover transition duration-700"
              />
           </div>
        </div>

      </div>
    </section>
  );
}