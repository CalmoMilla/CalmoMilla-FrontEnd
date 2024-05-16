import Image from "next/image"

export default function Blog() {
  return (
    <>
      <h2 className="text-amarelo1 text-7xl font-calistoga text-center py-20">Blog</h2>
      <div className="flex justify-center items-center flex-col">
        <p className="w-[80%] md:w-[50%] font-nunito text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolorum ad tempore illo illum? Veniam, magni. Eos assumenda pariatur, exercitationem repellat quam laudantium amet, veniam velit enim asperiores facilis in accusantium illum quia. Aut at vitae harum! Esse, animi totam?</p>
        <div data-aos='fade-up' className="md:w-auto w-[80%]">
          <Image className="hover:scale-110 transition duration-500 ease-in-out" width={500} height={500} src={"/assets/home/blog/blog1.png"} alt=""/>
        </div>
        <p className="w-[80%] md:w-[50%] font-nunito text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolorum ad tempore illo illum? Veniam, magni. Eos assumenda pariatur, exercitationem repellat quam laudantium amet, veniam velit enim asperiores facilis in accusantium illum quia. Aut at vitae harum! Esse, animi totam?</p>
        <div data-aos="fade-up" className="md:w-auto w-[80%]">
          <Image className="hover:scale-110 transition duration-500 ease-in-out" width={500} height={500} src={"/assets/home/blog/blog2.png"} alt=""/>
        </div>
      </div>
    </>
  )
}