export default function EsqueciSenha() {
  return (
    <div className=" w-[90%] h-[90%] flex flex-col items-center justify-center mx-auto ">
      <div className="flex-col flex md:w-[70%] xs:w-[100%] h-full">
        <form className="grid-cols-2 h-[80%]">
          <div className="w-full h-[75%] mt-20">
            <div className=" border-b-2  border-black xs:m-auto">
              <label className="flex text-amarelo2 text-lg" htmlFor="email  ">
                Email{" "}
              </label>
              <input
                className="border-none border-b-2  font-nunito   placeholder:text-black   text-md w-full p-2"
                type="text"
                id="email"
                name="email"
                placeholder="Coloque seu Email."
              />
            </div>
          </div>
          <div className="w-full justify-center flex ">
            <button
              className="w-80 h-12 bg-amarelo2 justify-center p-0 rounded-full text-white "
              type="submit"
            >
              Recuperar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
