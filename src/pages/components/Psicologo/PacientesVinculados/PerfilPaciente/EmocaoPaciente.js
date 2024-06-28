export default function EmocaoPaciente() {
  return (
    <>
      <div className="w-full h-fit flex flex-col gap-4">
        <h2 className="text-amarelo2 text-4xl text-center">Humor de hoje</h2>
        <div className="w-[80%] h-fit border-4 border-preto/10 rounded-3xl flex justify-around items-center mx-auto">
          <p className="text-[4rem] md:text-[7rem]">{ "\u{1F622}" }</p>
          <div className="flex flex-col justify-around">
            <p className="text-center text-2xl md:text-3xl">Fulano está se sentindo</p>  
            <p className="text-center text-2xl md:text-3xl text-verdeagua">Emoção</p>             
          </div>
        </div>
        <div className="w-full h-1 bg-preto/10 rounded-sm my-2"></div>
      </div>
    </>
  )
}