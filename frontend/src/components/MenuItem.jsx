import React, { useState } from "react";
import { Mail, ThumbsUp, X } from "lucide-react";

const MenuItem = ({
  nome,
  img,
  descricao,
  categoria,
  cidade,
  experiencia,
  habilidades,
  softskills,
  hobbies,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* 🔹 Card principal */}
      <article
        onClick={() => setShowModal(true)}
        className="cursor-pointer bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
      >
        <img
          src={img}
          alt={nome}
          className="w-full h-52 object-cover rounded-t-xl"
        />
        <div className="p-5 flex flex-col flex-grow">
          <header className="flex justify-between items-baseline border-b-2 border-orange-400 pb-2 mb-4">
            <h4 className="text-xl text-slate-800 font-medium">{nome}</h4>
          </header>
          <p className="text-base text-gray-700 flex-grow font-bold">
            Cargo desejado: {categoria}
          </p>
          <p className="text-base text-gray-700 flex-grow">{descricao}</p>
        </div>
      </article>

      {/* 🔹 Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-11/12 md:w-3/5 max-h-[90vh] overflow-y-auto relative p-6">
            {/* Botão de fechar */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Cabeçalho */}
            <div className="flex flex-col md:flex-row gap-6 mb-4">
              <img
                src={img}
                alt={nome}
                className="w-40 h-40 object-cover rounded-xl shadow-md"
              />
              <div className="flex flex-col justify-between text-gray-700">
                <h2 className="text-2xl font-bold text-slate-800">{nome}</h2>
                <p className="text-orange-600 font-semibold text-lg">
                  {categoria}
                </p>
                <p className="text-sm text-gray-600">{cidade}</p>
                <p className="mt-2"><strong>Experiência:</strong> {experiencia}</p>
                <p className="mt-1"><strong>Descrição:</strong> {descricao}</p>
              </div>
            </div>

            {/* Conteúdo */}
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">
                  🧠 Habilidades Técnicas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {habilidades.map((h, i) => (
                    <span
                      key={i}
                      className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">
                  🤝 Soft Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {softskills.map((s, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">
                  🎯 Hobbies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {hobbies.map((h, i) => (
                    <span
                      key={i}
                      className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Botões */}
            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => alert(`Mensagem enviada para ${nome}`)}
                className="flex items-center bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg transition-colors"
              >
                <Mail className="mr-2 h-4 w-4" /> Enviar Mensagem
              </button>

              <button
                onClick={() => alert(`Você recomendou ${nome}!`)}
                className="flex items-center bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <ThumbsUp className="mr-2 h-4 w-4" /> Recomendar Profissional
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuItem;
