const Categoria = ({ titulo, opcoes, selecionados, aoClicar }) => {
  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold text-slate-800 mb-4">{titulo}</h2>
      <nav className="flex justify-center flex-wrap gap-3">
        {opcoes.map((opcao, index) => {
          const ativo = selecionados.includes(opcao);
          return (
            <button
              key={index}
              onClick={() => aoClicar(opcao)}
              className={`px-5 py-2 rounded-lg text-sm font-medium border transition-all duration-300 ${
                ativo
                  ? "bg-amber-600 text-white border-amber-600 shadow-md scale-105"
                  : "bg-white text-slate-700 border-gray-300 hover:bg-amber-100"
              }`}
            >
              {opcao}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Categoria;