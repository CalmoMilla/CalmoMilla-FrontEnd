import { FaUser } from "react-icons/fa"

export default function ProfissionalSalvo({nome, especialidade}) {
  return (
    <div className="flex gap-4 items-center py-6">
      <div className="w-fit h-fit bg-gray-200 p-3 rounded-full">
        <FaUser className="text-3xl cursor-pointer text-branco"/>
      </div>
      <div>
        <p>{nome}</p>
        <p>{especialidade}</p>
      </div>
    </div>
  )
}