import { Linkedin, Github, Heart, Music2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-md border-t border-[#fff0f3]/10 text-[#fff0f3] mt-12">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-serif italic tracking-tighter text-[#fff0f3]">
              keep it 100!
            </h3>
            <p className="text-sm text-[#fff0f3]/60 leading-relaxed max-w-xs">
              Sua curadoria exclusiva de itens de colecionador. 
              De fãs para fãs, celebrando as histórias que giram em 13 rotações.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#fff0f3]/40 uppercase tracking-widest mt-4">
              <Music2 size={12} />
              <span>Est. 2026 • Lagoa Santa, MG</span>
            </div>
          </div>

        <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#800020]">Desenvolvedor</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/matheusdiasti/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#fff0f3]/10 p-2 rounded-full hover:bg-[#0077b5] hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>

              <a 
                href="https://github.com/mathdsena" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#fff0f3]/10 p-2 rounded-full hover:bg-black hover:text-white transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
            
            <div className="pt-4 border-t border-[#fff0f3]/10 mt-4">
              <p className="text-xs text-[#fff0f3]/40 flex items-center gap-1">
                Feito com <Heart size={10} className="fill-[#800020] text-[#800020]" /> e muito café.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center text-[10px] text-[#fff0f3]/20 mt-12 uppercase tracking-[0.2em]">
          © 2026 Keep It 100! Projeto exclusivo e sem fins lucrativos.
        </div>
      </div>
    </footer>
  );
}