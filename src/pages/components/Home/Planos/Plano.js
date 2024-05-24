export default function Plano(props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-center text-5xl font-calistoga text-preto pb-10">{props.titulo}</h3>
      <div className="w-fill h-auto py-10 px-32 bg-branco shadow-2xl rounded-2xl">
        <h3 className="text-center text-5xl font-calistoga text-preto">{props.plano}</h3>
        <p className="w-full text-3xl text-center pt-32 pb-10">Apenas <br />{props.preco}</p>
        <button className="bg-verde2 hover:bg-verde1 text-branco mx-auto block text-2xl px-7 py-2 font-nunito duration-500 ease-in-out ">Assinar</button>
      </div>
    </div>
  )
}