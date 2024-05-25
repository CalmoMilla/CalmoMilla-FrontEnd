import { FaUser } from "react-icons/fa"

export default function SecaoPsicologo() {
  return (
    <div className="w-[50%] h-auto bg-branco shadow-2xl flex flex-col justify-center pl-10">
        <div className="flex gap-4 items-center py-6">
          <div className="w-fit h-fit bg-gray-200 p-3 rounded-full">
            <FaUser className="text-5xl cursor-pointer text-branco"/>
          </div>
          <div>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum.</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pr-10 pb-10">
          <div className="w-[100%] h-[20rem] bg-gray-200 pt-10 flex items-center justify-center rounded-lg" >
          </div>
        </div>
        <p className="w-[95%]">Lorem ipsum dolor sit amet. In eligendi molestiae est quia suscipit hic aspernatur nesciunt aut molestiae laborum. Sit labore quibusdam ut repellendus quod sed rerum accusamus est omnis quos et harum corporis est omnis dolores nam omnis minima. Qui laborum dolore et voluptates maxime qui voluptas repellendus et quos deleniti et inventore quas ut neque galisum. Et quia officiis qui sint inventore qui distinctio praesentium est quia ipsam quo nulla nulla.
        Sit quam quam eos consequatur quae vel deserunt aliquam cum consequuntur iste eum repellat perspiciatis et adipisci deserunt eum iure.</p>
        <div className="-ml-10 py-20">
          <div className="flex justify-center items-center">
            <button className="bg-verde2 px-4 py-2 rounded-full transition duration-300 ease-out text-2xl text-branco w-[80%] mx-auto">Contatar profissional</button>
          </div>
        </div>
      

    </div>
  )
}