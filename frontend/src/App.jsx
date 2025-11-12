import { useState } from "react";
import Menu from "./components/Menu";
import Categoria from "./components/Categoria";
import bancoDados from "../../backend/data/dados";

// 🔹 Extrai todas as profissões e cidades únicas do banco
const todasProfissoes = [...new Set(bancoDados.map((item) => item.categoria))];
const todasCidades = [...new Set(bancoDados.map((item) => item.cidade))];

function App() {
  const [menuItems, setMenuItems] = useState(bancoDados);

  // Estados para filtros múltiplos
  const [filtroProfissoes, setFiltroProfissoes] = useState([]);
  const [filtroCidades, setFiltroCidades] = useState([]);

  // 🔹 Atualiza seleção de filtros
  const alternarFiltro = (tipo, valor) => {
    if (tipo === "profissao") {
      setFiltroProfissoes((prev) =>
        prev.includes(valor)
          ? prev.filter((item) => item !== valor)
          : [...prev, valor]
      );
    } else if (tipo === "cidade") {
      setFiltroCidades((prev) =>
        prev.includes(valor)
          ? prev.filter((item) => item !== valor)
          : [...prev, valor]
      );
    }
  };

  // 🔹 Filtra com base nas seleções
  const aplicarFiltros = () => {
    let filtrado = bancoDados;

    if (filtroProfissoes.length > 0) {
      filtrado = filtrado.filter((item) =>
        filtroProfissoes.includes(item.categoria)
      );
    }

    if (filtroCidades.length > 0) {
      filtrado = filtrado.filter((item) =>
        filtroCidades.includes(item.cidade)
      );
    }

    setMenuItems(filtrado);
  };

  // 🔹 Limpar filtros
  const limparFiltros = () => {
    setFiltroProfissoes([]);
    setFiltroCidades([]);
    setMenuItems(bancoDados);
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
          <div className="mb-10 space-y-8">
            <Categoria
              titulo="Profissões"
              opcoes={todasProfissoes}
              selecionados={filtroProfissoes}
              aoClicar={(valor) => alternarFiltro("profissao", valor)}
            />

            <Categoria
              titulo="Cidades"
              opcoes={todasCidades}
              selecionados={filtroCidades}
              aoClicar={(valor) => alternarFiltro("cidade", valor)}
            />

            <div className="flex justify-center gap-4">
              <button
                onClick={aplicarFiltros}
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-semibold transition-transform duration-200 hover:scale-105"
              >
                Aplicar Filtros
              </button>
              <button
                onClick={limparFiltros}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-lg font-semibold transition-transform duration-200 hover:scale-105"
              >
                Limpar
              </button>
            </div>
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