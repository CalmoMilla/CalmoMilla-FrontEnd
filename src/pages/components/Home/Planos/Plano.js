export default function Plano(props) {
  return (
    <div className="flex flex-col justify-center items-center ">
      <h3 className="text-center text-5xl font-calistoga text-preto pb-10">{props.titulo}</h3>
      <div className="xs:mb-20  xs:mt-10 lg:mb-0 xs: w-[80%] sm:w-auto shadow-2xl rounded-2xl">
        <div className="w-fill h-auto py-10 xs:px-16 sm:px-32 bg-branco shadow-2xl rounded-2xl">
          <h3 className="text-center text-5xl font-calistoga text-preto">{props.plano}</h3>
          <p className="w-full text-3xl text-center pt-32 pb-10 font-nunito">Apenas <br />{props.preco}</p>
          <button className="bg-verde2 hover:bg-verde1 text-branco mx-auto block text-2xl px-10 py-3 font-nunito duration-500 ease-in-out rounded-2xl">Assinar</button>
        </div>
      </div>
    </div>
  )
}