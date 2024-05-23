export default function CaixaImagem(props) {
    return (
        <div className="flex flex-col justify-center items-center py-5">
            <div className={`w-[90%] ${props.altura} bg-gray-200 pt-10 rounded-lg`} >
                <h2 className="text-xl relative top-[50%]">Insira uma imagem</h2>
            </div>
        </div>
    )
}