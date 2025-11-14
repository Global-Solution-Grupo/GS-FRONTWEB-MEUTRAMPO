import { useState } from "react";
import { ChevronDown, ChevronUp, Filter } from "lucide-react";

const Categoria = ({ categoriasProfissao, categoriasCidade, filtroItems }) => {
  const [profissoesSelecionadas, setProfissoesSelecionadas] = useState([]);
  const [cidadesSelecionadas, setCidadesSelecionadas] = useState([]);
  const [mostrarProfissoes, setMostrarProfissoes] = useState(false);
  const [mostrarCidades, setMostrarCidades] = useState(false);

  const alternarSelecao = (valor, lista, setLista) => {
    if (lista.includes(valor)) {
      setLista(lista.filter((item) => item !== valor));
    } else {
      setLista([...lista, valor]);
    }
  };

  const aplicarFiltros = () => {
    filtroItems(profissoesSelecionadas, cidadesSelecionadas);
  };

  const limparFiltros = () => {
    setProfissoesSelecionadas([]);
    setCidadesSelecionadas([]);
    filtroItems([], []);
  };

  return (
    <div className="flex flex-col items-center gap-8">
      {/* 🔹 Cabeçalho de Filtros */}
      <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
        <Filter className="text-amber-600 dark:text-amber-400" size={22} />
        <h2 className="text-lg font-semibold text-slate-700 dark:text-gray-700 uppercase tracking-wide">
          Filtrar por
        </h2>
      </div>

      {/* 🔹 Botões principais */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {/* Profissões */}
        <button
          onClick={() => setMostrarProfissoes(!mostrarProfissoes)}
          className="group flex items-center gap-2 bg-white dark:bg-gray-800 shadow-md border border-gray-300 dark:border-gray-600 text-slate-800 dark:text-gray-300 rounded-xl px-5 py-3 font-medium transition-all duration-300 hover:bg-amber-500 hover:text-white dark:hover:bg-amber-500 hover:border-amber-500 dark:hover:border-amber-500 hover:shadow-lg"
        >
          💼 Profissões
          <span
            className={`transition-transform duration-300 ${
              mostrarProfissoes ? "rotate-180" : "rotate-0"
            }`}
          >
            {mostrarProfissoes ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </span>
        </button>

        {/* Cidades */}
        <button
          onClick={() => setMostrarCidades(!mostrarCidades)}
          className="group flex items-center gap-2 bg-white dark:bg-gray-800 shadow-md border border-gray-300 dark:border-gray-600 text-slate-800 dark:text-gray-300 rounded-xl px-5 py-3 font-medium transition-all duration-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg"
        >
          📍 Cidades
          <span
            className={`transition-transform duration-300 ${
              mostrarCidades ? "rotate-180" : "rotate-0"
            }`}
          >
            {mostrarCidades ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </span>
        </button>

        {/* Aplicar */}
        <button
          onClick={aplicarFiltros}
          className="bg-amber-600 dark:bg-amber-500 text-white font-semibold rounded-xl px-5 py-3 transition-all duration-300 hover:bg-amber-700 dark:hover:bg-amber-600 hover:scale-105 shadow-md"
        >
          Aplicar Filtros
        </button>

        {/* Limpar */}
        <button
          onClick={limparFiltros}
          className="bg-gray-200 dark:bg-gray-700 text-slate-700 dark:text-gray-300 font-medium rounded-xl px-5 py-3 transition-all duration-300 hover:bg-red-500 hover:text-white dark:hover:bg-red-500 hover:scale-105 shadow-sm"
        >
          Limpar
        </button>
      </div>

      {/* 🔹 Seção Profissões com Scroll */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden w-full max-w-6xl ${
          mostrarProfissoes ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl border border-gray-200 dark:border-gray-700 mt-3 p-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 text-center">
            💼 Selecione as Profissões
          </h3>
          <div className="max-h-[280px] overflow-y-auto pr-2 custom-scrollbar">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {categoriasProfissao.map((opcao, index) => (
                <button
                  key={index}
                  onClick={() =>
                    alternarSelecao(opcao, profissoesSelecionadas, setProfissoesSelecionadas)
                  }
                  className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all duration-300 text-left ${
                    profissoesSelecionadas.includes(opcao)
                      ? "bg-amber-500 dark:bg-amber-400 text-white border-amber-500 dark:border-amber-400 shadow-md transform scale-105"
                      : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-amber-500 hover:text-white dark:hover:bg-amber-500 hover:border-amber-500 dark:hover:border-amber-500 hover:shadow-md"
                  }`}
                >
                  {opcao}
                </button>
              ))}
            </div>
          </div>
          
          {/* Contador de profissões selecionadas */}
          {profissoesSelecionadas.length > 0 && (
            <div className="mt-4 text-center">
              <span className="text-sm text-amber-600 dark:text-amber-400 font-medium">
                {profissoesSelecionadas.length} profissão(ões) selecionada(s)
              </span>
            </div>
          )}
        </div>
      </div>

      {/* 🔹 Seção Cidades com Scroll */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden w-full max-w-6xl ${
          mostrarCidades ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl border border-gray-200 dark:border-gray-700 mt-3 p-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 text-center">
            📍 Selecione as Cidades
          </h3>
          <div className="max-h-[180px] overflow-y-auto pr-2 custom-scrollbar">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {categoriasCidade.map((opcao, index) => (
                <button
                  key={index}
                  onClick={() =>
                    alternarSelecao(opcao, cidadesSelecionadas, setCidadesSelecionadas)
                  }
                  className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all duration-300 text-center ${
                    cidadesSelecionadas.includes(opcao)
                      ? "bg-blue-500 dark:bg-blue-400 text-white border-blue-500 dark:border-blue-400 shadow-md transform scale-105"
                      : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md"
                  }`}
                >
                  {opcao}
                </button>
              ))}
            </div>
          </div>
          
          {/* Contador de cidades selecionadas */}
          {cidadesSelecionadas.length > 0 && (
            <div className="mt-4 text-center">
              <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                {cidadesSelecionadas.length} cidade(s) selecionada(s)
              </span>
            </div>
          )}
        </div>
      </div>

      {/* 🔹 Filtros Ativos */}
      {(profissoesSelecionadas.length > 0 || cidadesSelecionadas.length > 0) && (
        <div className="w-full max-w-4xl">
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
            <h4 className="font-semibold text-amber-800 dark:text-amber-300 mb-2 text-center">
              Filtros Ativos:
            </h4>
            <div className="flex flex-wrap justify-center gap-2">
              {profissoesSelecionadas.map((profissao, index) => (
                <span
                  key={`p-${index}`}
                  className="bg-amber-500 dark:bg-amber-400 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1"
                >
                  💼 {profissao}
                  <button
                    onClick={() => alternarSelecao(profissao, profissoesSelecionadas, setProfissoesSelecionadas)}
                    className="ml-1 hover:text-amber-200"
                  >
                    ×
                  </button>
                </span>
              ))}
              {cidadesSelecionadas.map((cidade, index) => (
                <span
                  key={`c-${index}`}
                  className="bg-blue-500 dark:bg-blue-400 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1"
                >
                  📍 {cidade}
                  <button
                    onClick={() => alternarSelecao(cidade, cidadesSelecionadas, setCidadesSelecionadas)}
                    className="ml-1 hover:text-blue-200"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categoria;