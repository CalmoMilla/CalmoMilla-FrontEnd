"use client";
import Image from "next/image";
import { useState } from "react";
import { Atualizar } from "../../../../api/usuario/UsuarioService";
export default function InfoConta(props) {
  const [file, setFile] = useState(null);
  const [btn, setBtn] = useState(true);

  const handleFileChange = (e) => {
    setBtn(false)
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    const fileExtension = selectedFile.name.split(".").pop();
    const newFilename = `${props.usuario.id}.${fileExtension}`;

    setFile({
      name: newFilename,
      type: selectedFile.type,
      file: selectedFile,
    });
    console.log(`File name set to: ${newFilename}`);
  };

  const handleUpload = async () => {
    setBtn(true)
    if (!file) return;

    const { name, type, file: selectedFile } = file;

    const res = await fetch("/api/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, type }),
    });

    if (!res.ok) {
      console.error("Failed to get signed URL");
      return;
    }

    const { url } = await res.json();

    const uploadRes = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": type,
        "x-amz-acl": "public-read",
      },
      body: selectedFile,
    });

    if (uploadRes.ok) {
      console.log("Upload successful!");
      props.usuario.foto =
        "https://calmomilla-fotos.s3.sa-east-1.amazonaws.com/" + file.name;
      console.log(file.name);
      Atualizar(props.usuario, "pacientes");
      console.log("Imagem atualizada com sucesso");
    } else {
      console.error("Upload failed.");
    }
  };

  return (
    <>
      <div className="w-[100%] h-[30%] flex lg:flex-row flex-col justify-around items-center pt-10">
        <div className="flex flex-col items-center relative">
          <Image
            onClick={handleUpload}
            className="w-60 h-60 rounded-full items-center"
            src={props.usuario ? props.usuario.foto : ""}
            alt="Foto do Usuário"
            width={400}
            height={400}
          />
          <label htmlFor="imagem-user" className="hover:bg-preto/30 duration-500 transition ease-in-out h-60 w-60 absolute top-0 rounded-full text-center text-branco z-50"></label>
          <input type="file" className="mt-5 font-nunito w-auto hidden" id="imagem-user" onChange={handleFileChange} />
          {btn ? 
            <h2 className="font-nunito text-xl pt-5">Clique na imagem para trocar sua foto</h2>
            :
            <button onClick={handleUpload} className="bg-amarelo1 mt-5 py-2 rounded-xl text-xl hover:bg-amarelo2 duration-500 transition ease-in-out">Fazer upload da imagem</button>
          }
          
          {/* <Image
          className="w-60 h-60 rounded-full"
          src={props.usuario ? props.usuario.foto : ""}
          alt="Foto do Usuário"
          width={400}
          height={400}
        /> */}
        </div>
        <div className="lg:pt-0 pt-10 text-center lg:text-left w-fit h-[100%] ml">
          <p className="text-3xl font-nunito pb-10">
            Olá, {props.usuario ? props.usuario.nome : ""}
          </p>
          <p className="text-2xl font-nunito">
            Aqui estão suas informações pessoais na plataforma
          </p>
        </div>
      </div>
      <div className="pl-8 lg:pl-32 pt-20">
        <h1 className="text-3xl py-5">Informações da conta</h1>
        <div className="lg:w-[90%] w-[80%] md:flex-row flex-col md:items-center flex justify-between py-5">
          <p className="text-xl">Email </p>
          <p className="text-xl"> {props.usuario ? props.usuario.email : ""}</p>
        </div>
        <div className="lg:w-[90%] w-[80%] md:flex-row flex-col flex justify-between md:items-center py-5">
          <p className="text-xl">Senha</p>
          <p className="text-xl">**********</p>
        </div>
      </div>
      <div className="py-5 flex justify-center items-center">
        <div className="w-[95%] h-1 bg-gray-300 rounded-md"></div>
      </div>
    </>
  );
}
