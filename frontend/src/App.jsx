import { useState, useEffect } from "react";
import Menu from "./components/Menu";
import Categoria from "./components/Categoria";
import bancoDados from "../../backend/data/dados";

const todasProfissoes = [...new Set(bancoDados.map((item) => item.categoria))];
const todasCidades = [...new Set(bancoDados.map((item) => item.cidade))];

function App() {
  const [menuItems, setMenuItems] = useState(bancoDados);
  const [darkMode, setDarkMode] = useState(false);

  // Efeito para carregar preferência salva
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedMode !== null) {
      setDarkMode(JSON.parse(savedMode));
    } else if (prefersDark) {
      setDarkMode(true);
    }
  }, []);

  // Efeito para aplicar modo escuro
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const filtrarItems = (profissoes, cidades) => {
    let filtrado = bancoDados;

    if (profissoes.length > 0) {
      filtrado = filtrado.filter((item) => profissoes.includes(item.categoria));
    }

    if (cidades.length > 0) {
      filtrado = filtrado.filter((item) => cidades.includes(item.cidade));
    }

    setMenuItems(filtrado);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 text-gray-100' 
        : 'bg-gradient-to-br from-gray-50 via-orange-50 to-amber-100 text-gray-800'
    }`}>
      {/* Header */}
      <header className={`${
        darkMode 
          ? 'bg-gray-800/90 backdrop-blur-sm shadow-lg border-gray-700' 
          : 'bg-white/90 backdrop-blur-sm shadow-md border-amber-300'
      } py-8 sticky top-0 z-40 border-b transition-colors duration-300`}>
        <div className="max-w-6xl mx-auto px-4 text-center relative">
          <button 
            onClick={toggleDarkMode}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-all duration-300 ${
              darkMode 
                ? 'bg-amber-400 text-gray-900 hover:bg-amber-300' 
                : 'bg-gray-800 text-white hover:bg-gray-700'
            } shadow-lg hover:scale-110`}
            aria-label={darkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          
          <h1 className={`text-4xl md:text-5xl font-extrabold tracking-wide uppercase drop-shadow-sm ${
            darkMode ? 'text-amber-400' : 'text-amber-600'
          }`}>
            MEU TRAMPO
          </h1>
          <p className={`mt-2 text-lg italic ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Conectando talentos a oportunidades.
          </p>
          <div className={`w-20 h-1 mx-auto mt-4 rounded-full ${
            darkMode ? 'bg-amber-400' : 'bg-amber-500'
          }`}></div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-grow py-12 px-6 md:px-10">
        <section className="max-w-6xl mx-auto">
          <Categoria
            categoriasProfissao={todasProfissoes}
            categoriasCidade={todasCidades}
            filtroItems={filtrarItems}
            darkMode={darkMode}
          />
          <div className="transition-all duration-500 mt-10">
            <Menu items={menuItems} darkMode={darkMode} />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`${
        darkMode 
          ? 'bg-gray-900 text-gray-200 shadow-inner' 
          : 'bg-slate-900 text-gray-200 shadow-inner'
      } py-6 mt-16 transition-colors duration-300`}>
        <div className="text-center text-sm tracking-wide">
          <p className="font-medium">&copy; 2025 — Meu Trampo</p>
          <p className={darkMode ? "text-gray-400" : "text-gray-400"}>
            Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;