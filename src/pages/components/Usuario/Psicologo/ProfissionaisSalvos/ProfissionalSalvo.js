import { FaUser } from "react-icons/fa"

export default function ProfissionalSalvo() {
  return (
    <div className="flex gap-4 items-center py-6">
      <div className="w-fit h-fit bg-gray-200 p-3 rounded-full">
        <FaUser className="text-3xl cursor-pointer text-branco"/>
      </div>
      <div>
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem ipsum.</p>
      </div>
    </div>
  )
}