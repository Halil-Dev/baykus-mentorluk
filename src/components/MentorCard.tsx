import Link from 'next/link';

export default function MentorCard({ mentor }: any) {
  return (
    <div className="bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 group flex flex-col h-full">
      <div className="h-24 bg-gradient-to-r from-blue-50 to-cyan-50"></div>
      <div className="px-8 pb-8 flex flex-col items-center text-center -mt-12 flex-1">
        <img 
          src={mentor.imageUrl || "/placeholder-avatar.png"} 
          className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-lg mb-4"
          alt="Mentor"
        />
        <h3 className="text-xl font-black text-slate-800">{mentor.university}</h3>
        <p className="text-[#0047AB] font-bold text-xs uppercase tracking-widest mb-4">{mentor.department}</p>
        <div className="bg-blue-50 text-[#0047AB] text-[10px] font-black px-4 py-1 rounded-full mb-6 border border-blue-100 italic">
           {mentor.ranking}
        </div>
        <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3 italic">"{mentor.bio}"</p>
        <Link 
          href={`/mentor/${mentor.id}`}
          className="w-full mt-auto bg-[#0047AB] text-white font-black py-4 rounded-xl shadow-lg shadow-blue-50 hover:bg-blue-800 transition uppercase tracking-widest text-[10px]"
        >
          Profili İncele
        </Link>
      </div>
    </div>
  );
}