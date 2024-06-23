export default function CacaPalavras() {

  let cacaPalavras = [
    {jogo: <iframe style={{maxWidth: "100%"}} src="https://wordwall.net/pt/embed/e3ebf1f338c846958edf2826b3061e34?themeId=51&templateId=10&fontStackId=0" width="700" height="500" frameborder="0" allowfullscreen></iframe> },
    {jogo: <iframe style={{maxWidth: "100%"}} src="https://wordwall.net/pt/embed/e3ebf1f338c846958edf2826b3061e34?themeId=50&templateId=10&fontStackId=0" width="700" height="500" frameborder="0" allowfullscreen></iframe> },
  ]

  const cacaPalavraEscolhido = () => {

    // Gera um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * cacaPalavras.length);
  
    // Retorna a cor aleatória
    return cacaPalavras[indiceAleatorio].jogo;
  }

  return (
    <div className="w-full h-[100vh] bg-roxo flex justify-center items-center">
      {cacaPalavraEscolhido()}
    </div>

  )
}