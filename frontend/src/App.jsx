import { useState } from "react"
import Menu from './components/Menu'
import Categoria from  './components/Categoria'
import bancoDados from "../../backend/data/dados"
//Lista todas as categorias do menu e adicionando "todos" no inicio
const todasCategorias=["Todos",...new Set(bancoDados.map((item)=>item.categoria))]

function App() {

  // HOOK- useState - manipulao estado da variavel
  const [menuItems, setMenuItems]= useState(bancoDados);
  const [categorias]=useState(todasCategorias);

  //Função filtrar items

  const filtrarItems=(opcao)=>{
    if(opcao ==="Todos"){
      setMenuItems(bancoDados); // mostra todos os items
    }else {
      const novoItem = bancoDados.filter((item)=>item.categoria === opcao);
      setMenuItems(novoItem); // mostra apenas o item filtrado
    }
  }
 

  return (
    <div className="min-h-screen bg-gray-100 tex-gray-700 flex flex-col">
      <header className="py-12 bg-white shadow-sm">
        <div className="mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-3xl text-slate-700 font-bold uppercase mb-2">MEU TRAMPO</h1>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>
      </header>
      <main className="flex-grow py-10 px-4">
        <section>
          <Categoria categorias={categorias} filtroItems={filtrarItems}/>
          <Menu items={menuItems}/>
        </section>
      </main>
      <footer className="bg-slate-800 text-white text-center p-5 mt-10">
        <p>&copy;-2025 -todos os direitos reservados</p>
      </footer>
     
    </div>
  )
}

export default App