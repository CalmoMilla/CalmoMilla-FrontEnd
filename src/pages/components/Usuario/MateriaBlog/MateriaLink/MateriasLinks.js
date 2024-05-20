import MateriaLink from "./MateriaLink";

export default function MateriasLinks() {
  return (
    <div className="flex justify-around py-20">
      <MateriaLink src={'/assets/usuario/materiablog/materia1.png'} baixo={true} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} />
      <MateriaLink src={'/assets/usuario/materiablog/materia2.png'} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
      <MateriaLink src={'/assets/usuario/materiablog/materia3.png'} baixo={true} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
    </div>
  )
}