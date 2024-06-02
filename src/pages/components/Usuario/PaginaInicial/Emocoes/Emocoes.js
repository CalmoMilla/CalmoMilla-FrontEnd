
import { BsEmojiFrown } from "react-icons/bs";

export default function Emocoes() {
  return (
    <div className=" w-[90%] h-[90%] flex flex-col items-center justify-center mx-auto ">
      <div className="flex-col flex md:w-[70%] xs:w-[100%] h-full">
        <form className="grid-cols-2 h-[80%]">
          <div className="w-full h-[75%] mt-20 flex">
            <BsEmojiFrown className="w-[25%] h-auto text-amarelo1"/>
            <input
              className="" type="radio" id="email" name="email" required onClick={console.log("oi")}
            />
          </div>
          <div className="w-full justify-center flex ">
            <button className="w-80 h-12 bg-amarelo2 justify-center p-0 rounded-full text-white" type="submit">
              Submeter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
