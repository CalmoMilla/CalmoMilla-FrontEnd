import Image from "next/image";
import PacienteAgendados from "./PacienteAgendados";
import FeedbackPsicologo from "./FeedbackPsicologo";
import AtividadesRecentes from "./AtividadesRecentes";
import UltimosPacientes from "./UltimosPacientes";

export default function EstatisticasPsicologo() {
  return (
    <div className="bg-white w-[95%] mx-auto h-auto shadow-xl rounded-lg flex flex-col justify-center items-center">
      <div className="xs:w-[80%] lg:w-[70%] max-h-[600px] overflow-y-scroll  border border-gray-200 ">
        <FeedbackPsicologo feedback="  Olha particularmente as " />
        <FeedbackPsicologo
          feedback="  Lorem ipsum dolor sit amet. In eligendi molestiae est quia suscipit hic aspernatur nesciunt aut molestiae laborum. Sit labore quibusdam ut repellendus quod sed rerum accusamus est omnis quos et harum corporis est omnis dolores nam omnis minima. Qui laborum dolore et voluptates maxime qui voluptas repellendus et quos deleniti et inventore quas ut neque galisum. Et quia officiis qui sint inventore qui distinctio praesentium est quia ipsam quo nulla nulla.
          Sit quam quam eos consequatur quae vel deserunt aliquam cum consequuntur iste eum repellat perspiciatis et adipisci deserunt eum iure."
        />
        <FeedbackPsicologo feedback="  Lorem ipsum dolor sit amet. In eligendi molestiae est quia suscipit hic aspernatur nesciunt aut molestiae laborum. Si" />
      </div>

      <div className="bg-gray-300 w-[90%] h-1 mt-5  lg:mt-8 mb-5  "></div>

      <div className="w-full ">
        <p className="xs:text-5xl md:text-6xl mt-6 text-center text-amarelo2 font-calistoga pb-10">
          Consultas Agendadas
        </p>
      </div>
      <div className="bg-white w-[80%] h-auto grid lg:grid-cols-3 shadow-2xl m-auto max-h-[600px]  overflow-y-scroll   gap-10 items-center">
        <PacienteAgendados
          nomePaciente="Gabriel Pires"
          horaPaciente="13:00"
          dataPaciente="23/09/2024"
        ></PacienteAgendados>
        <PacienteAgendados
          nomePaciente="Ana Mendes"
          horaPaciente="16:00"
          dataPaciente="13/08/2024"
        />
        <PacienteAgendados
          nomePaciente="Arauto"
          horaPaciente="11:00"
          dataPaciente="20/05/2024"
        />
        <PacienteAgendados
          nomePaciente="Gabriel Pires"
          horaPaciente="13:00"
          dataPaciente="23/09/2023"
        />
      </div>
      <div className="w-full ">
        <p className="xs:text-5xl md:text-6xl mt-20 text-center text-roxo font-calistoga pb-10">
          Suas Atividades Recentes
        </p>
      </div>
      <div className="bg-white w-[80%] h-auto shadow-2xl m-auto max-h-[500px]  overflow-y-scroll  items-center">
        <AtividadesRecentes />
        <AtividadesRecentes />
        <AtividadesRecentes />
      </div>
    </div>
  );
}
