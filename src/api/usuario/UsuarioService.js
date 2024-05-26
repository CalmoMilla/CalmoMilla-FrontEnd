import axios from "axios";
import { use } from "i18next";
import { redirect } from 'next/navigation'

const url = "http://ec2-18-230-88-220.sa-east-1.compute.amazonaws.com:8080/";

export const LoginUsuario = async (login, endpoint) => {
  try {
    const response = await axios.post(url + endpoint, login, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 201) {
      LoginUsuario(login, endpoint);
    }
    if (response.data.token != null) {
      if (typeof window !== "undefined") {
       localStorage.setItem("token",response.data.token)
        BuscarInfoUsuario()
    }
    return response.data.token;
   
    }
  } catch (error) {
    if (error.response) {
      const { title, fields } = error.response.data;
      console.log("Title:", title);
      console.log("Fields:", fields);
    } else if (error.request) {
      console.error("Erro de requisição:", error.request);
    } else {
      console.error("Erro ao configurar requisição:", error.message);
    }
  }
};

export const LoginComGoogle = async (usuario, endpoint) => {
  try {
    const response = await axios.post(url + endpoint, usuario, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status == 201) {
      LoginComGoogle(usuario);
    }

    if (response.data.token != null) {
      console.log(response.data);
    }
  } catch (error) {
    console.error("Erro ao fazer requisição para a API:", error);
  }
};

export const Cadastro = async (paciente, endpoint) => {
  try {
    const response = await axios.post(url + endpoint, paciente, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status == 201) {
      console.log("Cadastro feito com sucesso");
      console.log(response.data);
    }
  } catch (error) {
    if (error.response) {
      const { title, fields } = error.response.data;
      console.log("Title:", title);
      console.log("Fields:", fields);
    } else if (error.request) {
      console.error("Erro de requisição:", error.request);
    } else {
      console.error("Erro ao configurar requisição:", error.message);
    }
  }
};

async function BuscarInfoUsuario() {
  if (typeof window === "undefined") {
    return null;
  }

  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('No token found');
  }

  const response = await fetch(url+'pacientes/eu', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (response.ok) {
    const userInfo = await response.json();
    console.log(userInfo)
    localStorage.setItem("usuario", JSON.stringify(userInfo))
  } else {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
}
