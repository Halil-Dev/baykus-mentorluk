export default function Footer() {
  return (
    <footer className="bg-[#000033] text-white pt-24 pb-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <img src="/logo.jpeg" alt="Logo" className="h-10 brightness-200 invert rounded-md" />
              <span className="text-xl font-black tracking-tighter">BANAKOÇ</span>
            </div>
            <p className="text-slate-400 font-bold text-sm leading-relaxed">
              BanaKoç'la hazır ol, fark yarat. Türkiye'nin en iyi mentörleriyle başarıyı yakala.
            </p>
          </div>
          
          <div>
            <h4 className="font-black mb-8 uppercase text-xs tracking-[0.2em] text-blue-400">Hizmetler</h4>
            <ul className="space-y-4 text-slate-300 font-bold text-sm">
              <li className="hover:text-white transition cursor-pointer">YKS Koçluk</li>
              <li className="hover:text-white transition cursor-pointer">LGS Mentörlük</li>
              <li className="hover:text-white transition cursor-pointer">Deneme Kulübü</li>
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-8 uppercase text-xs tracking-[0.2em] text-blue-400">Kurumsal</h4>
            <ul className="space-y-4 text-slate-300 font-bold text-sm">
              <li className="hover:text-white transition cursor-pointer">Hakkımızda</li>
              <li className="hover:text-white transition cursor-pointer">KVKK</li>
              <li className="hover:text-white transition cursor-pointer">İletişim</li>
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-8 uppercase text-xs tracking-[0.2em] text-blue-400">Bize Ulaşın</h4>
            <div className="flex gap-4">
              <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#0047AB] transition cursor-pointer">IG</div>
              <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#0047AB] transition cursor-pointer">YT</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-10 text-center">
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">
            Copyright © 2026 BanaKoç Mentörlük. Tüm Hakları Saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}