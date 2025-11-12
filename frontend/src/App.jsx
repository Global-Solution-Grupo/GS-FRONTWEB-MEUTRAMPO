import { useState } from "react";
import Menu from "./components/Menu";
import Categoria from "./components/Categoria";
import bancoDados from "../../backend/data/dados";

const todasCategorias = ["Todos", ...new Set(bancoDados.map((item) => item.categoria))];

function App() {
  const [menuItems, setMenuItems] = useState(bancoDados);
  const [categorias] = useState(todasCategorias);

  const filtrarItems = (opcao) => {
    if (opcao === "Todos") {
      setMenuItems(bancoDados);
    } else {
      const novoItem = bancoDados.filter((item) => item.categoria === opcao);
      setMenuItems(novoItem);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-orange-50 to-amber-100 text-gray-800">
      
      {/* 🔹 Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-md py-8 sticky top-0 z-40 border-b border-amber-300">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-amber-600 tracking-wide uppercase drop-shadow-sm">
            MEU TRAMPO
          </h1>
          <p className="mt-2 text-gray-600 text-lg italic">
            Conectando talentos a oportunidades.
          </p>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>
      </header>

      {/* 🔹 Main */}
      <main className="flex-grow py-12 px-6 md:px-10">
        <section className="max-w-6xl mx-auto">
          {/* Filtros */}
          <div className="mb-10">
            <Categoria categorias={categorias} filtroItems={filtrarItems} />
          </div>

          {/* Cards */}
          <div className="transition-all duration-500">
            <Menu items={menuItems} />
          </div>
        </section>
      </main>

      {/* 🔹 Footer */}
      <footer className="bg-slate-900 text-gray-200 py-6 mt-16 shadow-inner">
        <div className="text-center text-sm tracking-wide">
          <p className="font-medium">&copy; 2025 — Meu Trampo</p>
          <p className="text-gray-400">Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;