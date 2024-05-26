import Header from "../../Header/Header";
import Funcionalidades from "../../Home/Funcionalidade/Funcionalidades";
import CaixaNoticia from "./CaixaNoticia/CaixaNoticia";
import OutrasMaterias from "./OutrasMaterias/OutrasMaterias";
 
export default function Materia(){
  return (
    <div className="h-fit w-full bg-gray-200 pb-10">
      <Header/>
 
      <div className="pt-40 flex justify-around">
        <CaixaNoticia titulo={"Insira seu título"} nome={"Ruth Barbosa"} profissao={"Psicologo"}
          texto={"Lorem ipsum dolor sit amet. Eos laboriosam nesciunt vel aliquam harum est voluptates natus est officiis voluptas. Qui eveniet rerum ut officia dolores et odit autem ad dicta quia nam fuga nihil et internos reiciendis est asperiores aperiam! Ut blanditiis ducimus est libero pariatur sit saepe quia hic sunt doloribus. Et assumenda repudiandae sed necessitatibus voluptas et officia temporibus quo aliquid ratione At officiis officiis. Sit magni tempora et architecto dolore eum distinctio quasi ut laboriosam totam eos dignissimos tempora non natus aliquam! Ut laudantium itaque est architecto debitis sit accusantium beatae sed nisi iure sed consequatur iure quo quis voluptates ea nemo quae. Sed animi reiciendis ex possimus unde sed veniam repudiandae" +
          "Qui excepturi dolorum ut omnis dolor non labore deserunt est quos quia vel quod debitis. Qui repellat delectus qui similique culpa sed voluptas illum vel unde consequatur aut officia corporis hic dolor quas vel molestias fuga. Qui cumque deleniti a harum adipisci hic placeat iste est quibusdam magni 33 aspernatur galisum? A autem porro eos voluptate aperiam qui consequatur labore non sunt ipsum est molestiae repellat ab vero ipsam. Aut expedita neque ad accusamus eaque aut cupiditate rerum" +
          "Eum incidunt Quis ex debitis suscipit est consequatur modi aut voluptatem perspiciatis sed minima possimus eos atque aspernatur! Et magnam fugit eos repellat voluptates et quas molestiae. Qui cumque sint aut voluptatem maiores ex eius nisi qui consectetur sunt At quia praesentium? Est consequatur rerum et repellendus excepturi eum neque minus ea quis voluptatem. Eos dolor maiores aut accusamus obcaecati aut commodi reprehenderit aut maxime consectetur eos aliquam cupiditate ab molestiae provident a cumque debitis."}
        />

        <OutrasMaterias/>

 
      </div>
 
    </div>
  )
}