export default function MateriaLink(props) {

  return(
    <div className={`w-[25%] h-[80vh] hover:scale-110 transition duration-500 ease-in-out bg-cover bg-no-repeat rounded-xl`} style={{backgroundImage: `url(${props.src})`}}>
      
      <div className="h-full w-full bg-preto/30 rounded-xl">
         <p className={`text-branco text-2xl font-bold font-nunito pl-10 ${props.baixo ? "pt-[120%]" : "pt-[15%]"}`}>{props.text}</p>
      </div>
    </div>
  )
}

