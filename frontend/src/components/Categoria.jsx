import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // ícones de seta (instale: npm i lucide-react)

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

  return (
    <div className="flex flex-col items-center gap-8">
      {/* 🔹 Botões principais */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* Botão Profissões */}
        <button
          onClick={() => setMostrarProfissoes(!mostrarProfissoes)}
          className="flex items-center gap-2 bg-slate-800 text-white rounded-lg px-5 py-3 transition-all duration-300 hover:bg-amber-600 hover:scale-105"
        >
          Profissões
          {mostrarProfissoes ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        {/* Botão Cidades */}
        <button
          onClick={() => setMostrarCidades(!mostrarCidades)}
          className="flex items-center gap-2 bg-slate-800 text-white rounded-lg px-5 py-3 transition-all duration-300 hover:bg-amber-600 hover:scale-105"
        >
          Cidades
          {mostrarCidades ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        {/* Aplicar Filtros */}
        <button
          onClick={aplicarFiltros}
          className="bg-amber-600 text-white rounded-lg px-6 py-3 transition-all duration-300 hover:bg-amber-700 hover:scale-105"
        >
          Aplicar Filtros
        </button>
      </div>

      {/* 🔹 Lista de Profissões */}
      {mostrarProfissoes && (
        <div className="flex flex-wrap justify-center gap-3 bg-white shadow-md p-4 rounded-xl border border-gray-200 w-full max-w-3xl">
          {categoriasProfissao.map((opcao, index) => (
            <button
              key={index}
              onClick={() => alternarSelecao(opcao, profissoesSelecionadas, setProfissoesSelecionadas)}
              className={`px-4 py-2 rounded-md border transition-all duration-300 ${
                profissoesSelecionadas.includes(opcao)
                  ? "bg-amber-500 text-white border-amber-500"
                  : "bg-gray-100 text-gray-700 hover:bg-amber-100"
              }`}
            >
              {opcao}
            </button>
          ))}
        </div>
      )}

      {/* 🔹 Lista de Cidades */}
      {mostrarCidades && (
        <div className="flex flex-wrap justify-center gap-3 bg-white shadow-md p-4 rounded-xl border border-gray-200 w-full max-w-3xl">
          {categoriasCidade.map((opcao, index) => (
            <button
              key={index}
              onClick={() => alternarSelecao(opcao, cidadesSelecionadas, setCidadesSelecionadas)}
              className={`px-4 py-2 rounded-md border transition-all duration-300 ${
                cidadesSelecionadas.includes(opcao)
                  ? "bg-amber-500 text-white border-amber-500"
                  : "bg-gray-100 text-gray-700 hover:bg-amber-100"
              }`}
            >
              {opcao}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categoria;
