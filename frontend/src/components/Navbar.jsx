import { ShoppingBag, Disc3 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar({ cartCount }) {
  return (
    <nav className="bg-black/30 text-[#fff0f3] shadow-lg sticky top-0 z-50 border-b border-[#fff0f3]/10 backdrop-blur-md transition-all">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-[#fff0f3] blur-lg opacity-20 rounded-full group-hover:opacity-40 transition-opacity duration-500"></div>
            
            <Disc3 
              size={32} 
              className="relative z-10 text-[#fff0f3] group-hover:rotate-180 transition-transform duration-700 ease-in-out" 
            />
          </div>
          
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-tighter italic font-serif leading-none">
              keep it 100!
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#fff0f3]/70 font-sans mt-1">
              Vinil Store
            </span>
          </div>
        </Link>

        <Link to="/cart" className="relative group p-2 rounded-full hover:bg-[#fff0f3]/10 transition-colors">
          <ShoppingBag size={24} className="text-[#fff0f3]" />
          
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-[#fff0f3] text-[#800020] text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md border border-[#800020]">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );

}
