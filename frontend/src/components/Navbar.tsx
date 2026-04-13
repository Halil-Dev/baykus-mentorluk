import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full">
      {/* Üst Reklam Bandı */}
      <div className="bg-[#000033] text-white py-2.5 text-center overflow-hidden">
        <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] animate-pulse">
          🚀 YKS 2026 Erken Kayıt Avantajlarını Kaçırma! <span className="hidden md:inline ml-2 text-cyan-400">| Sınırlı Kontenjan</span>
        </p>
      </div>
      
      {/* Ana Navbar - Cam Efektli */}
      <nav className="bg-white/90 backdrop-blur-2xl border-b border-slate-100 h-20 w-full transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center justify-between">
          
          {/* Logo Alanı */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative h-10 w-10 md:h-12 md:w-12 overflow-hidden rounded-xl shadow-sm border border-slate-50 transition-transform group-hover:scale-105">
                <img 
                  src="/logo.jpeg" 
                  alt="Banakoc" 
                  className="h-full w-full object-cover"
                />
            </div>
            <span className="text-xl font-black text-[#000033] tracking-tighter hidden sm:block">
                BANAKOÇ
            </span>
          </Link>
          
          {/* Orta Linkler - Başına "/" ekleyerek dizin sorununu çözdük */}
          <div className="hidden lg:flex items-center gap-10 font-black text-slate-500 text-[11px] uppercase tracking-[0.15em]">
            <Link href="/#mentors" className="hover:text-[#0047AB] transition-all relative group">
                Koçluk
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0047AB] transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/#paketler" className="hover:text-[#0047AB] transition-all relative group">
                Paketler
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0047AB] transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/#lgs" className="flex items-center gap-1.5 bg-orange-500 text-white px-4 py-1.5 rounded-full text-[9px] hover:bg-orange-600 shadow-md shadow-orange-100 transition-all active:scale-95">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></span>
                LGS MENTÖR
            </Link>
          </div>

          {/* Sağ Butonlar - Alfa/Baykuş Tarzı Uçuş Efektli */}
          <div className="flex items-center gap-3 md:gap-6">
            
            {/* 1. GİRİŞ YAP BUTONU - Altı Çizilen Modern Tasarım */}
            <button className="text-[11px] md:text-[12px] font-black text-slate-400 uppercase tracking-widest hover:text-[#000033] transition-colors duration-300 relative group">
              Giriş Yap
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0047AB] transition-all duration-300 group-hover:w-full"></span>
            </button>
            
            {/* 2. SATIN AL BUTONU - Alfa Tarzı Derin Gölge ve Yukarı Zıplama */}
            <button className="bg-[#0047AB] text-white px-6 md:px-10 py-3 rounded-[2rem] font-black text-[11px] md:text-[12px] uppercase tracking-widest shadow-[0_12px_24px_-8px_rgba(0,71,169,0.3)] hover:bg-blue-800 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-10px_rgba(0,71,169,0.4)] transition-all duration-500 ease-out active:scale-95">
              Satın Al
            </button>
          </div>

        </div>
      </nav>
    </header>
  );
}