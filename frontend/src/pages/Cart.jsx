import { useState } from 'react';
import { Trash2, Plus, Minus, ArrowLeft, Disc3 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'; 

export default function Cart({ cart, updateQuantity, removeFromCart, clearCart }) {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("Pix");

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  
  const isPix = paymentMethod === "Pix";
  const discount = isPix ? subtotal * 0.05 : 0;
  const totalFinal = subtotal - discount;

  const paymentLabels = {
    "Pix": "Pix",
    "Cartao_Credito": "Cartão de Crédito",
    "Boleto": "Boleto Bancário"
  };

  const handleCheckout = async () => {
    if (cart.length === 0) return;

    const orderData = {
      items: cart.map(item => ({
        productId: item.id,
        productName: item.name,
        unitPrice: item.price,
        quantity: item.quantity
      })),
      paymentMethod: paymentMethod,
      totalAmount: totalFinal 
    };

    try {
      const response = await fetch('http://localhost:5274/api/cart/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      });

      if (!response.ok) {
        throw new Error('Falha ao processar pedido'); 
      }

      const friendlyName = paymentLabels[paymentMethod];
      
toast.success(`Pedido confirmado via ${friendlyName}!`, {
        icon: (
          <Disc3 
            size={28} 
            className="animate-spin text-[#800020]" 
          />
        ),
        style: {
           backgroundColor: '#fff0f3', 
           color: '#800020', 
           fontWeight: 'bold',
           border: '2px solid #800020'
        },
        duration: 2500, 
      });
      
      clearCart();
      navigate('/');

    } catch (error) {
      console.error("Erro na comunicação com a API:", error);
      toast.error("Erro de conexão com o servidor. Verifique se o backend está rodando.");
    }
  };

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-4">
        <div className="bg-[#fff0f3]/5 p-6 rounded-full border border-[#fff0f3]/10">
          <Trash2 size={48} className="text-[#fff0f3]/40" />
        </div>
        <h2 className="text-2xl font-bold text-[#fff0f3]">Seu carrinho está vazio</h2>
        <p className="text-[#fff0f3]/60">Adicione itens para começar suas compras.</p>
        <Link to="/" className="text-[#fff0f3] hover:text-[#fff0f3]/80 underline flex items-center gap-2 font-serif italic">
          <ArrowLeft size={16} /> Voltar para a loja
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-[#fff0f3] font-serif tracking-wide italic">Seu Carrinho</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="bg-black/30 backdrop-blur-md p-4 rounded-xl shadow-sm border border-[#fff0f3]/10 flex items-center gap-4 group hover:border-[#fff0f3]/30 transition-colors">
              <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-md opacity-90 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex-grow">
                <h3 className="font-bold text-lg text-[#fff0f3] font-serif">{item.name}</h3>
                <p className="text-[#fff0f3]/60 text-sm">
                  {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price)} unitário
                </p>
              </div>

              <div className="flex items-center gap-3 bg-[#fff0f3]/5 rounded-lg p-1 border border-[#fff0f3]/5">
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="p-1 hover:bg-[#fff0f3]/20 rounded-md transition-colors text-[#fff0f3]"
                >
                  <Minus size={16} />
                </button>
                <span className="font-bold w-4 text-center text-[#fff0f3]">{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="p-1 hover:bg-[#fff0f3]/20 rounded-md transition-colors text-[#fff0f3] disabled:opacity-30"
                  disabled={item.quantity >= 10}
                >
                  <Plus size={16} />
                </button>
              </div>

              <div className="text-right min-w-[80px]">
                <p className="font-bold text-[#fff0f3]">
                  {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price * item.quantity)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-black/30 backdrop-blur-md p-6 rounded-xl shadow-lg h-fit border border-[#fff0f3]/10 sticky top-24">
          <h2 className="text-xl font-bold mb-4 border-b border-[#fff0f3]/10 pb-2 text-[#fff0f3] font-serif">Resumo do Pedido</h2>
          
          <div className="space-y-2 mb-4 text-[#fff0f3]/80">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(subtotal)}</span>
            </div>

            {isPix && (
              <div className="flex justify-between text-[#fff0f3] font-medium animate-pulse">
                <span>Desconto Pix (5%)</span>
                <span>-{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(discount)}</span>
              </div>
            )}

            <div className="flex justify-between">
              <span>Frete</span>
              <span className="text-[#fff0f3] font-medium">Grátis</span>
            </div>
          </div>

          <div className="flex justify-between text-xl font-bold text-[#fff0f3] border-t border-[#fff0f3]/10 pt-4 mb-6">
            <span>Total</span>
            <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalFinal)}</span>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-[#fff0f3]/80 mb-2 uppercase tracking-wider text-xs">Forma de Pagamento</label>
            <select 
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full p-2.5 bg-[#1a0508] border border-[#fff0f3]/20 rounded-lg text-[#fff0f3] focus:ring-1 focus:ring-[#fff0f3] focus:border-[#fff0f3] outline-none"
            >
              <option value="Pix">Pix (5% de desconto)</option>
              <option value="Cartao_Credito">Cartão de Crédito</option>
              <option value="Boleto">Boleto Bancário</option>
            </select>
          </div>

          <button 
            onClick={handleCheckout}
            className="w-full bg-[#fff0f3] hover:bg-[#ffe0e6] text-[#800020] font-bold py-3 rounded-lg transition-all shadow-lg active:scale-95 uppercase tracking-widest text-sm"
          >
            Finalizar Compra
          </button>
          
          <Link to="/" className="block text-center mt-4 text-xs text-[#fff0f3]/60 hover:text-[#fff0f3] hover:underline uppercase tracking-widest transition-colors">
            Continuar Comprando
          </Link>
        </div>
      </div>
    </div>
  );
}