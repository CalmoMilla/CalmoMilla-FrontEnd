import Image from "next/image"

export default function InfoPsicologo(){
    return (
        <div className="w-[70%] h-fit shadow-2xl flex flex-col px-24 py-10 gap-5">     
            <div className="flex items-center gap-3">
              <Image src={"https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"} alt={"Imagem do Usuario"} width={80} height={80} className="rounded-full"/>
              <div>  
                <p className="font-nunito text-3xl">Nome</p>
                <p className="font-nunito text-xl">Idade</p>
              </div>
            </div>

            <div className="w-[80%] h-[50vh] rounded-2xl bg-preto/20"></div>

            <p className="text-left font-nunito">
            Lorem ipsum dolor sit amet. In eligendi molestiae est quia suscipit hic aspernatur nesciunt aut molestiae laborum. Sit labore quibusdam ut repellendus quod sed rerum accusamus est omnis quos et harum corporis est omnis dolores nam omnis minima. Qui laborum dolore et voluptates maxime qui voluptas repellendus et quos deleniti et inventore quas ut neque galisum. Et quia officiis qui sint inventore qui distinctio praesentium est quia ipsam quo nulla nulla.
            Sit quam quam eos consequatur quae vel deserunt aliquam cum consequuntur iste eum repellat perspiciatis et adipisci deserunt eum iure.
            </p>

        
        </div>
    )
}