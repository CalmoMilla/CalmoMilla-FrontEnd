import Image from "next/image"

export default function MateriaFinal({funcao}) {
    return(
        <div className="flex lg:items-start items-center justify-center m-auto lg:space-x-7 lg:space-y-7 space-y-3 pt-10 pb-12 flex-col lg:flex-row xl:flex-row 2xl:flex-row w-11/12">
            <div className="w-[70%] lg:w-[400%] 2xl:w-[150%] hover:cursor-pointer" onClick={funcao}>
                <Image width={1200} height={800} src={"/assets/usuario/materiablog/materia5.png"} alt="Imagem da matéria final"/>
            </div>
            <div className="space-y-6 lg:pb-36 text-center lg:text-left xl:text-left">
                <h2 className="font-calistoga text-4xl ">Lorem ipsum dolor sit amet. </h2>
                <p className="font-nunito text-lg  ">Lorem ipsum dolor sit amet. In eligendi molestiae est quia suscipit hic aspernatur nesciunt aut molestiae laborum. Sit labore quibusdam ut repellendus quod sed rerum accusamus est omnis quos et harum corporis est omnis dolores nam omnis minima. Qui laborum dolore et voluptates maxime qui voluptas repellendus et quos deleniti et inventore quas ut neque galisum. Et quia officiis qui sint inventore qui distinctio praesentium est quia ipsam quo nulla nulla.
                Sit quam quam eos consequatur quae vel deserunt aliquam cum consequuntur iste eum repellat perspiciatis et adipisci deserunt eum iure repellat. </p>
            </div>
        </div>
    )
}