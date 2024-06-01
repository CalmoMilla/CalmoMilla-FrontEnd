"use client"
import Image from "next/image"
import { useState } from "react";

export default function InfoConta(props) {

  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    handleUpload()

  };

  const handleUpload = async () => {
    if (!file) return;

    const { name, type } = file;

    console.log(file)

    const res = await fetch('/api/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, type }),
    });

    if (!res.ok) {
      console.error('Failed to get signed URL');
      return;
    }

    const { url } = await res.json();

    const uploadRes = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': type,
        'x-amz-acl': 'public-read',
      },
      body: file,
    });

    if (uploadRes.ok) {
    
      console.log('Upload successful!');
    } else {
      console.error('Upload failed.');
    }
  };


  return (
    <>
      <div className="w-[100%] h-[30%] flex md:flex-row flex-col justify-around items-center pt-10">
        <Image onClick={handleUpload} className="w-60 h-60 rounded-full" src={props.usuario ? props.usuario.foto : ""} alt="Foto do Usuário" width={400} height={400}/>
        <input type="file" onChange={handleFileChange} />
        <div className="md:pt-0 pt-10 text-center md:text-left w-fit h-[100%]">
          <p className="text-3xl font-nunito pb-10">Olá, {props.usuario ? props.usuario.nome : ""}</p>
          <p className="text-2xl font-nunito">Aqui estão suas informações pessoais na plataforma</p>
        </div>
      </div>
      <div className="pl-8 lg:pl-28 pt-20">
        <h1 className="text-3xl py-5">Informações da conta</h1>
        <div className="lg:w-[30%] w-[80%] md:flex-row flex-col md:items-center flex justify-between py-5">
          <p className="text-xl">Email </p>
          <p className="text-xl"> {props.usuario ? props.usuario.email : ""}</p>
        </div>
        <div className="lg:w-[30%] w-[80%] md:flex-row flex-col flex justify-between md:items-center py-5">
          <p className="text-xl">Senha</p>
          <p className="text-xl">**********</p>
        </div>
        <h2 className="text-2xl text-amarelo1 py-2">Mudar o email</h2>
        <h2 className="text-2xl text-amarelo1 py-2">Mudar a senha</h2>
      </div>
      <div className="py-5 flex justify-center items-center">
        <div className="w-[95%] h-1 bg-gray-300 rounded-md"></div>
      </div>
    </>
  )
}