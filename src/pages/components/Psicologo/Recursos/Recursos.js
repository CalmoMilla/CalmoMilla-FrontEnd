"use client"

import MateriaRecurso from "./MateriaRecurso"
import JogoDispRecurso from "./JogoDispRecurso"
import { useState } from "react"
import BeneficioJogo from "./BeneficioJogo"

export default function Recursos() {

  const [showBeneficio, setShowBeneficio] = useState(false)
  const [beneficio, setBeneficio] = useState(null)

  let jogos = [
    {id:1, nome:"Jogo da Memória", foto: "/assets/psicologo/recursos/jogomemoria.png", fonte: "Fonte: https://urllongaparadedéuaqui.com.br (Acesso em 00/00/0000)", desc: "O Jogo da Memória, um clássico atemporal, transcende gerações e culturas, convidando jogadores de todas as idades a embarcarem em uma empolgante jornada de memória, raciocínio e estratégia. Sua história, rica e envolvente, entrelaça-se com o desenvolvimento da cognição humana e a busca incessante por formas lúdicas de aprimorar a mente. As origens do jogo remontam ao início do século XX, com diversas versões surgindo na Europa e nos Estados Unidos. Uma das primeiras referências documentadas data de 1908, com o jogo Memória da empresa inglesa Selchow & Righter. Outra versão popular, Parcheesi, foi introduzida pela Parker Brothers em 1918. Com o passar do tempo, o Jogo da Memória ganhou popularidade global, assumindo diferentes formas e temáticas. As cartas, inicialmente ilustradas com figuras simples, evoluíram para designs vibrantes e criativos, explorando desde animais e objetos até personagens de desenhos animados e temas históricos. A importância do Jogo da Memória reside em seus diversos benefícios para o desenvolvimento cognitivo, especialmente para crianças. O jogo estimula a memória de curto prazo, a atenção, a concentração e a capacidade de processamento de informações. Além disso, promove a criatividade, a resolução de problemas e a tomada de decisões estratégicas. Para jogar, basta embaralhar as cartas e colocá-las viradas para baixo sobre uma superfície plana. Cada jogador, por sua vez, revela duas cartas em busca de pares com imagens iguais. Ao encontrar um par, o jogador o retira da mesa e ganha a chance de jogar novamente. O objetivo é acumular o maior número de pares ao final da partida.O Jogo da Memória se destaca por sua simplicidade e versatilidade, podendo ser adaptado para diferentes faixas etárias e necessidades. Para crianças pequenas, por exemplo, é possível utilizar um número menor de cartas e temáticas mais simples. Já para jogadores mais experientes, podem ser introduzidas cartas com imagens mais complexas e regras adicionais."},

    {id:2, nome:"Sudoku", foto: "/assets/psicologo/recursos/sudoku.jpg", fonte: "Fonte: https://urllongaparadedéuaqui.com.br (Acesso em 00/00/0000)", desc: "O Sudoku, um enigma numérico que conquistou o mundo, convida jogadores de todas as idades a embarcarem em uma empolgante jornada de lógica, raciocínio e perspicácia. Sua história, intrigante e envolvente, entrelaça-se com o desenvolvimento do pensamento lógico e a busca por desafios intelectuais estimulantes. Embora o nome Sudoku seja de origem japonesa, suas raízes remontam ao quadrado latino, uma estrutura matemática criada pelo matemático suíço Leonhard Euler no século XVIII. No entanto, a versão moderna do jogo como a conhecemos hoje foi idealizada por Howard Garns, um arquiteto aposentado americano, e publicada pela primeira vez em 1979 na revista Dell Pencil Puzzles & Word Games sob o nome Number Place. Em 1984, o jogo chegou ao Japão, onde foi rebatizado como Sudoku, que significa número único em japonês. Lá, o Sudoku ganhou grande popularidade e se tornou um passatempo nacional. Em 1997, Wayne Gould, um juiz aposentado da Nova Zelândia, descobriu o jogo durante uma viagem ao Japão e ficou fascinado por ele. Ao retornar ao seu país, Gould se dedicou a popularizar o Sudoku no mundo ocidental, criando software para gerar tabuleiros e divulgando o jogo em jornais e revistas. O objetivo do Sudoku é preencher uma grade de 9x9 quadrados com números de 1 a 9, de forma que cada linha, coluna e bloco 3x3 contenha cada número apenas uma vez. Apesar da simplicidade das regras, o Sudoku oferece diversos níveis de dificuldade, desafiando jogadores de todas as habilidades. Para solucionar o enigma, é necessário utilizar técnicas de lógica e raciocínio dedutivo. Ao analisar os números já preenchidos na grade, o jogador deve identificar as possibilidades para cada quadrado vazio, eliminando as opções que já estão presentes em sua linha, coluna ou bloco. Com atenção e perspicácia, é possível desvendar o Sudoku e completar a grade com sucesso."},

    {id:3, nome:"Quiz", foto: "/assets/psicologo/recursos/quiz.jpg", fonte: "Fonte: https://urllongaparadedéuaqui.com.br (Acesso em 00/00/0000)", desc: "O Quiz, um jogo milenar que transcende culturas e gerações, convida jogadores de todas as idades a embarcarem em uma empolgante jornada de conhecimento, diversão e aprendizado. Sua história, rica e envolvente, entrelaça-se com a busca incessante por formas lúdicas de testar e aprimorar os conhecimentos sobre os mais diversos temas. As origens do Quiz remontam à Grécia Antiga, onde eram realizados concursos de perguntas e respostas para avaliar o conhecimento de filósofos e estudantes. Com o passar do tempo, o Quiz evoluiu e se adaptou a diferentes culturas e contextos, assumindo diversas formas e formatos. Na Idade Média, por exemplo, os trivia quizzes testavam o conhecimento geral dos participantes sobre diversos assuntos. Na era moderna, o Quiz ganhou grande popularidade com o advento da televisão e do rádio. Programas de perguntas e respostas se tornaram um grande sucesso, atraindo milhões de espectadores e consagrando gênios do conhecimento. No Brasil, programas como Caldeirão do Huck, Show do Milhão e Quem Sabe Mais? marcaram época e fizeram do Quiz um verdadeiro fenômeno cultural."},


    {id:4, nome:"Caça Palavras", foto: "/assets/psicologo/recursos/cacapalavras.jpg", fonte: "Fonte: https://urllongaparadedéuaqui.com.br (Acesso em 00/00/0000)", desc: "O caça-palavras, também conhecido como sopa de letras, é mais do que um simples passatempo. É uma aventura intelectual que te convida a desvendar segredos escondidos em um mar de letras. Sua história remonta a tempos ancestrais, com raízes em enigmas e jogos de palavras do antigo Egito. No entanto, foi em 1913 que o caça-palavras ganhou a forma que conhecemos hoje. Arthur Wynne, um jornalista do New York World, publicou um enigma intitulado Word Game, desafiando seus leitores a encontrar as palavras escondidas em uma grade de letras. O sucesso foi instantâneo, e logo o jogo se espalhou pelo mundo, conquistando fãs de todas as idades. No Brasil, o caça-palavras chegou em 1925, publicado no jornal carioca A Noite. Desde então, se tornou um passatempo querido por muitos, presente em jornais, revistas, livros e até mesmo online."},
  ]

  const onClickBeneficio = () => {
    setShowBeneficio(true)
  }

  const onClickVoltar = () => {
    setShowBeneficio(false)
  }

  return (
    <>
      {showBeneficio ? 
        <BeneficioJogo funcao={onClickVoltar} jogo={beneficio}/>
        :
        <div className="w-full h-fit flex flex-col gap-8">
          <h1 className="font-calistoga text-7xl text-roxo text-center">Recursos</h1>
          <p className="font-nunito text-xl text-preto text-center w-[90%] md:w-[33%] mx-auto">[Nome do profissional], encontre aqui recursos interessantes que podem te agregar novos conhecimentos e conheça melhor os jogos que disponibilizamos aos nossos usuários e seus benefícios.</p>
          <div className="w-[90%] md:w-[35%] h-fit bg-roxo rounded-3xl mx-auto py-2">
            <h2 className="font-calistoga text-xl text-branco text-center">Nosso Blog</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 w-[70%] h-fit mx-auto md:gap-0 gap-4">
            <MateriaRecurso/>
            <MateriaRecurso/>
            <MateriaRecurso/>
          </div>
          <div className="w-[90%] md:w-[25%] h-fit bg-roxo rounded-3xl mx-auto p-4">
            <h2 className="font-calistoga text-xl text-branco text-center">Conferir todas as matérias</h2>
          </div>
          <div className="w-[90%] md:w-[35%] h-fit bg-roxo rounded-3xl mx-auto py-2 my-6">
            <h2 className="font-calistoga text-xl text-branco text-center">Sobre nossos jogos disponíveis </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] md:w-[70%] xl:w-[50%] h-fit mx-auto gap-8">
            {jogos.map((jogo) => (
              <JogoDispRecurso key={jogo.id} nome={jogo.nome} foto={jogo.foto} funcao={onClickBeneficio} funcao2={setBeneficio} jogo={jogo}/>
            ))}
          </div>
        </div>
      }
    </>
  )
}