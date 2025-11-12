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
        <Filter className="text-amber-600" size={22} />
        <h2 className="text-lg font-semibold text-slate-700 uppercase tracking-wide">
          Filtrar por
        </h2>
      </div>

      {/* 🔹 Botões principais */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* Profissões */}
        <button
          onClick={() => setMostrarProfissoes(!mostrarProfissoes)}
          className="group flex items-center gap-2 bg-white shadow-md border border-gray-300 text-slate-800 rounded-xl px-6 py-3 font-medium transition-all duration-300 hover:bg-amber-50 hover:border-amber-400 hover:shadow-lg"
        >
          Profissões
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
          className="group flex items-center gap-2 bg-white shadow-md border border-gray-300 text-slate-800 rounded-xl px-6 py-3 font-medium transition-all duration-300 hover:bg-amber-50 hover:border-amber-400 hover:shadow-lg"
        >
          Cidades
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
          className="bg-amber-600 text-white font-semibold rounded-xl px-6 py-3 transition-all duration-300 hover:bg-amber-700 hover:scale-105 shadow-md"
        >
          Aplicar Filtros
        </button>

        {/* Limpar */}
        <button
          onClick={limparFiltros}
          className="bg-gray-200 text-slate-700 font-medium rounded-xl px-6 py-3 transition-all duration-300 hover:bg-gray-300 hover:scale-105 shadow-sm"
        >
          Limpar
        </button>
      </div>

      {/* 🔹 Seção Profissões */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          mostrarProfissoes ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } w-full`}
      >
        <div className="flex flex-wrap justify-center gap-3 bg-white shadow-inner p-5 rounded-2xl border border-gray-200 mt-3 max-w-4xl mx-auto">
          {categoriasProfissao.map((opcao, index) => (
            <button
              key={index}
              onClick={() =>
                alternarSelecao(opcao, profissoesSelecionadas, setProfissoesSelecionadas)
              }
              className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-300 ${
                profissoesSelecionadas.includes(opcao)
                  ? "bg-amber-500 text-white border-amber-500 shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-amber-100 hover:border-amber-300"
              }`}
            >
              {opcao}
            </button>
          ))}
        </div>
      </div>

      {/* 🔹 Seção Cidades */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          mostrarCidades ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } w-full`}
      >
        <div className="flex flex-wrap justify-center gap-3 bg-white shadow-inner p-5 rounded-2xl border border-gray-200 mt-3 max-w-4xl mx-auto">
          {categoriasCidade.map((opcao, index) => (
            <button
              key={index}
              onClick={() =>
                alternarSelecao(opcao, cidadesSelecionadas, setCidadesSelecionadas)
              }
              className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-300 ${
                cidadesSelecionadas.includes(opcao)
                  ? "bg-amber-500 text-white border-amber-500 shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-amber-100 hover:border-amber-300"
              }`}
            >
              {opcao}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categoria;
