import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard'; 
import { Disc3 } from 'lucide-react';

export default function Home({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5274/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (  
      <div className="flex flex-col justify-center items-center h-[60vh] gap-6">
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-[#800020] blur-xl opacity-50 rounded-full animate-pulse"></div>
          
          <Disc3 
            size={80} 
            className="text-[#fff0f3] animate-spin relative z-10 drop-shadow-[0_0_15px_rgba(255,240,243,0.3)]" 
          />
        </div>
        
        <p className="text-[#fff0f3] font-serif italic tracking-widest animate-pulse text-lg">
          Carregando coleção...
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onAddToCart={addToCart} 
        />
      ))}
    </div>
  );
}