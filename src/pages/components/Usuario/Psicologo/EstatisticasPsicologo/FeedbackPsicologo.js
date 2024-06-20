import Image from "next/image";
export default function FeedbackPsicologo(props) {
  return (
    <div className="bg-white  w-[90%] lg:w-[70%] mx-auto  min-h-[150px]  p-6 lg:p-12 drop-shadow-2xl flex flex-col xl:flex-row items-center gap-12 rounded-xl m-16">
      <Image
        src={
          "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
        }
        alt={"Imagem do Usuario"}
        width={80}
        height={80}
        className="rounded-full"
      />

      <p className="text-md font-nunito font-semibold ">{props.feedback}</p>
    </div>
  );
}
