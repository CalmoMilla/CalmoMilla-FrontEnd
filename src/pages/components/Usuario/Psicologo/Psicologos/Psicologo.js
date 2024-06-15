import Image from "next/image"

export default function Psicologo({nome, idade, cidade, funcao}) {

    function abbreviateName(name, maxLength = 15) {
        if (!name || name.length <= maxLength) {
          return name
        }

        const truncatedName = name.substring(0, maxLength);
      
        return `${truncatedName}...`;
    }
    
    const nomeAbreviado = abbreviateName(nome);
 

    return (
      <div className="w-[90%] h-full shadow-2xl rounded-xl mx-auto hover:scale-110 hover:cursor-pointer duration-500 ease-in-out" onClick={funcao}>
        <div className="w-full h-[55%] bg-preto/20 flex justify-start items-end p-5 rounded-t-lg">
            <Image src={"https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"} alt={"Imagem do Usuario"} width={100} height={100} className="rounded-full"/>
        </div>
        <div className="w-full h-[45%] py-2 px-5">
          <h2 className={`font-nunito text-3xl`}>{nomeAbreviado}</h2>
          <p className="font-nunito text-xl">{idade ? idade : ""}</p>
          <p className="font-nunito text-xl">{cidade ? cidade : ""}</p>
        </div>
      </div>
    )
}