import Image from "next/image"

export default function Parceiros() {
  return (
    <div className="pb-80">
      <h2 className="text-verde2 text-7xl font-calistoga text-center py-20">Nossos parceiros</h2>
      <div className="flex xl:flex-row flex-col justify-around items-center">
        <div className="xl:w-[25%] w-[80%]">
          <div className="flex flex-col justify-center items-center">
            <div data-aos="fade-up">
              <Image width={300} height={300} src={"/assets/home/parceiros/proa.png"} alt="" className=" transition duration-500 ease-out hover:scale-110"/>
            </div>
            <p className="text-justify text-xl font-nunito font-medium w-full">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, minima laudantium. Iure, fugiat tempora minima, magnam quasi sunt odit, nemo ex eligendi nesciunt molestias. Laudantium repudiandae dolorem minima necessitatibus sint.</p>
          </div>
        </div>
        <div className="xl:block hidden">
          <div className="flex flex-col items-center justify-center">
            <Image width={500} height={500} src={"/assets/home/parceiros/img-parceiros.png"} alt=""/>
            <button className="bg-verde1 hover:bg-verde2 px-8 py-3 rounded-full transition duration-300 ease-out text-3xl">Seja nosso parceiro!</button>
          </div>
        </div>
        <div className="xl:w-[25%] w-[80%]">
          <div>
          <div className="flex flex-col justify-center items-center">
            <div data-aos="fade-up">
              <Image width={300} height={300} src={"/assets/home/parceiros/senac.png"} alt="" className="py-20 transition duration-500 ease-out hover:scale-110"/>
            </div>
            <p className="text-justify text-xl font-nunito font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, minima laudantium. Iure, fugiat tempora minima, magnam quasi sunt odit, nemo ex eligendi nesciunt molestias. Laudantium repudiandae dolorem minima necessitatibus sint.</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}