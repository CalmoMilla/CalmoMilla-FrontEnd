import Image from "next/image"

export default function RelaxamentoEscolhido() {
  return (
    <>
      <div className="w-full h-fit bg-roxo py-10 flex justify-around items-center">
      <Image src={"/assets/usuario/relaxamento/relaxamentoescolhido.png"} width={400} height={400} alt="..." className="hover:scale-110 duration-500 ease-in-out" />
        <div className="w-[50%] h-fit">
          <h1 className="text-7xl text-branco font-calistoga text-center">Relaxamento</h1>
          <h2 className="text-3xl text-branco font-nunito text-center" >A alma parece-me apenas uma simples respiração do corpo</h2>
        </div>
      </div>
      <div className="w-full h-fit bg-verdeagua py-10">
        <h2 className="text-7xl font-calistoga text-center text-branco my-8">Digite algo</h2>
        <p className="text-xl w-[80%] font-calistoga text-left text-branco my-8 mx-auto block">Lorem ipsum dolor sit amet. Aut quia ratione est dolores aspernatur aut nulla dolor et distinctio sapiente ut aperiam rerum. Sed molestiae aperiam in rerum iste qui rerum dignissimos.
        Et quia voluptas aut corrupti incidunt vel quos dolores. In officiis ducimus eos pariatur nesciunt et placeat rerum.
        Ab nostrum aliquam sed rerum iusto aut delectus deleniti qui possimus quia 33 enim culpa. Ut beatae harum qui expedita dolor et perferendis provident vel repellendus numquam qui veniam praesentium et veritatis repellendus. Cum corrupti asperiores est eligendi dicta ab illo perferendis rem omnis sequi 33 ipsa quia cum pariatur enim in dolores reprehenderit. Ad obcaecati inventore et ullam molestiae At accusantium nemo qui quisquam odit.</p>
      </div>
    </>
  )
}