const MenuItem = ({titulo,preco,img,descricao}) => {
  return (
    <article className="bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      <img src={img} alt={titulo} className="w-full h-52 object-cover rounded-t-xl"/>
      <div className="p-5 flex flex-col flex-grow">
        <header className="flex justify-between items-baseline border-b-2 border-orange-400 pb-2 mb-4">
          <h4 className="text-xl text-slate-800 font-medium">{titulo}</h4>
          <p className="text-xl text-orange-600 font-bold">R$ {preco.toFixed(2)}</p>
        </header>
        <p className="text-base text-gray-700 flex-grow">{descricao}</p>
      </div>
    </article>
  )
}

export default MenuItem