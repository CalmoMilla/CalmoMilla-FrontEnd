import Image from "next/image";
import PacienteAgendados from "./PacienteAgendados";

export default function EstatisticasPsicologo() {
  return (
    <div className="bg-white w-[100%] h-auto shadow-xl rounded-lg flex flex-col justify-center items-center">
      <div className="bg-white w-[90%] h-fit p-20 drop-shadow-2xl flex flex-row items-center gap-12 rounded-xl m-10">
        <Image
          src={
            "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
          }
          alt={"Imagem do Usuario"}
          width={80}
          height={80}
          className="rounded-full"
        />

        <p className="text-md font-nunito font-semibold ">
          Lorem ipsum dolor sit amet. Et nemo quia est explicabo omnis At
          debitis mollitia qui rerum voluptatem est quibusdam eius sit aliquam
          sapiente ut dolor perspiciatis. Et sint obcaecati et error deserunt
          sed veritatis ipsa ut debitis corporis. A blanditiis dolor eos odit
          sapiente eos voluptas eveniet qui omnis impedit aut voluptatum quaerat
          ut rerum sunt. Quo nulla itaque sed quis odio hic exercitationem
          facilis.
        </p>
      </div>

      <div className="bg-white w-[90%] h-fit p-20 drop-shadow-2xl flex flex-row items-center gap-12 rounded-xl m-16">
        <Image
          src={
            "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
          }
          alt={"Imagem do Usuario"}
          width={80}
          height={80}
          className="rounded-full"
        />

        <p className="text-md font-nunito font-semibold ">
          Lorem ipsum dolor sit amet. Et nemo quia est explicabo omnis At
          debitis mollitia qui rerum voluptatem est quibusdam eius sit aliquam
          sapiente ut dolor perspiciatis. Et sint obcaecati et error deserunt
          sed veritatis ipsa ut debitis corporis. A blanditiis dolor eos odit
          sapiente eos voluptas eveniet qui omnis impedit aut voluptatum quaerat
          ut rerum sunt. Quo nulla itaque sed quis odio hic exercitationem
          facilis.
        </p>
      </div>

      <div className="bg-gray-300 w-[90%] h-1"></div>

      <div className="w-full">
        <p className="text-6xl mt-6 text-center text-amarelo2 font-calistoga pb-10">
          Consultas Agendadas
        </p>
      </div>
      <div className="bg-white w-[80%] h-auto grid lg:grid-cols-3 shadow-2xl m-auto  gap-10 items-center">
        <PacienteAgendados
          nomePaciente="Gabriel Pires"
          horaPaciente="13:00"
          dataPaciente="23/09/2023"
        ></PacienteAgendados>
        <PacienteAgendados
          nomePaciente="Gabriel Pires"
          horaPaciente="13:00"
          dataPaciente="23/09/2023"
        />
        <PacienteAgendados
          nomePaciente="Gabriel Pires"
          horaPaciente="13:00"
          dataPaciente="23/09/2023"
        />
        <PacienteAgendados
          nomePaciente="Gabriel Pires"
          horaPaciente="13:00"
          dataPaciente="23/09/2023"
        />
      </div>
    </div>
  );
}
