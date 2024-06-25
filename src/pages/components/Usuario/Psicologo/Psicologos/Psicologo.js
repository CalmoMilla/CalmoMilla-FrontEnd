import Image from "next/image"

export default function Psicologo({psi, guardarInfo, funcao}) {

  const corPsicologo = () => {
    const cores = ["bg-amarelo1/80", "bg-verde2/80", "bg-roxo/80", "bg-verdeagua/80", "bg-roxo/80"]; // Array de cores disponíveis

    // Gera um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * cores.length);
  
    // Retorna a cor aleatória
    return cores[indiceAleatorio];
  }

  function abbreviateName(name, maxLength = 15) {
    if (!name || name.length <= maxLength) {
      return name
    }

    const truncatedName = name.substring(0, maxLength);
  
    return `${truncatedName}...`;
  }
    
  const nomeAbreviado = abbreviateName(psi && psi.nome);

  // para mostrar as informacoes do psicologo e guardar ela
  const onClickPsicologo = () => {
    guardarInfo(psi)
    funcao()
  }

  const anoNascimento = psi && psi.dataNasc[0];
  const mesNascimento = psi && psi.dataNasc[1];
  const diaNascimento = psi && psi.dataNasc[2];

  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();
  const mesAtual = dataAtual.getMonth() + 1;
  const diaAtual = dataAtual.getDate();

  let diferencaAnos = anoAtual - anoNascimento;

  if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
    diferencaAnos--;
  }

  const idade = diferencaAnos;

  const especializacoes = psi && psi.especializacoes
  let primeiraEspecializacao = especializacoes && especializacoes[0]
  if (primeiraEspecializacao == "PSICOLOGIA_GERAL") {
    primeiraEspecializacao = "Psicologia Geral"
  }
  if (primeiraEspecializacao == "PSICOLOGIA_CLINICA") {
    primeiraEspecializacao = "Psicologia Clínica"
  }
  if (primeiraEspecializacao == "PSICOLOGIA_ESCOLAR") {
    primeiraEspecializacao = "Psicologia Escolar"
  }

  return (
    <div className="w-[90%] h-full shadow-2xl rounded-xl mx-auto hover:scale-110 hover:cursor-pointer duration-500 ease-in-out" onClick={onClickPsicologo}>
      <div className={`w-full h-[55%] ${corPsicologo()}  flex justify-start items-end p-5 rounded-t-lg`}>
          <Image src={psi && psi.foto} alt={"Imagem do Usuario"} width={100} height={100} className="rounded-full"/>
      </div>
      <div className="w-full h-[45%] py-2 px-5">
        <h2 className={`font-nunito text-3xl`}>{nomeAbreviado}</h2>
        <p className="font-nunito text-xl">{primeiraEspecializacao}</p>
        <p className="font-nunito text-xl">{idade}</p>
        {/* <p className="font-nunito text-xl">{cidade ? cidade : ""}</p> */}
      </div>
    </div>
  )
}