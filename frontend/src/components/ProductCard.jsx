import { Plus } from 'lucide-react';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-black/30 backdrop-blur-md rounded-xl overflow-hidden border border-white/5 transition-all duration-500 flex flex-col h-full group hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]">
      
      <div className="h-56 overflow-hidden relative">
        <img 
          src={product.imageUrl || "https://placehold.co/400x400/1a0508/fff0f3?text=VINYL"} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
        />
      </div>

      <div className="p-5 flex flex-col flex-grow relative">
        <h3 className="text-lg font-bold text-[#fff0f3] mb-1 leading-tight font-serif tracking-wide">
          {product.name}
        </h3>
        <p className="text-xs text-[#fff0f3]/60 mb-6 uppercase tracking-widest">
          Edição Limitada
        </p>
        
        <div className="mt-auto flex justify-between items-center border-t border-[#fff0f3]/10 pt-4">
          <span className="text-xl font-light text-[#fff0f3]">
            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
          </span>
          
          <button 
            onClick={() => onAddToCart(product)}
            className="
              bg-[#fff0f3] text-[#800020] border-2 border-transparent 
              p-2 rounded-full flex items-center gap-2 pr-4 pl-3 shadow-lg 
              transition-all duration-200 
              hover:bg-[#ffe0e6] hover:scale-105
              active:bg-transparent active:border-[#fff0f3] active:text-[#fff0f3] active:scale-95
            "
          >
            <Plus size={16} strokeWidth={3} />
            <span className="text-xs font-black uppercase tracking-wider">Adicionar</span>
          </button>
        </div>
      </div>
    </div>
  );
}