# 🛒 DevStore - Fullstack E-commerce Challenge

Este projeto é uma aplicação de e-commerce completa, desenvolvida como um desafio técnico. O objetivo foi criar uma experiência de compra fluida, desde a listagem de produtos até a simulação de checkout com diferentes métodos de pagamento.

## 🚀 Tecnologias Utilizadas

### Backend
- **.NET 8/9**
- **Entity Framework Core**
- **SQLite**

### Frontend
- **React (Vite)**
- **Tailwind CSS**: Para estilização e responsividade através de classes utilitárias.
- **Lucide React**: Biblioteca de ícones para melhorar a experiência visual.

## 🧠 Decisões de Arquitetura

1. **Persistência Local**: Implementação do uso de `localStorage` no frontend para garantir que o carrinho de compras do usuário persista mesmo após o fechamento da aba ou atualização da página.
2. **Validação de Negócio**: No backend, o sistema valida se o carrinho contém itens antes de processar o checkout, retornando mensagens claras de erro ou sucesso.
3. **Simulação de Pagamento**: Adicionei um seletor dinâmico de métodos de pagamento (Pix, Cartão, Boleto) para tornar o fluxo de checkout o mais próximo possível de um cenário real.

## 🛠️ Como Executar o Projeto

### Pré-requisitos
- .NET SDK instalado
- Node.js (v18+) instalado

### Rodando o Backend
1. Navegue até `backend/TechChallengeApi`
2. Execute `dotnet run`
3. A API estará disponível em `http://localhost:5274`

### Rodando o Frontend
1. Navegue até `frontend`
2. Execute `npm install` e depois `npm run dev`
3. Acesse o endereço indicado no terminal (geralmente `http://localhost:5173`)

---
Desenvolvido por Matheus Dias como parte de um processo seletivo técnico.