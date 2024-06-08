import axios from "axios";
import Swal from "sweetalert2";

const url = "http://ec2-18-230-88-220.sa-east-1.compute.amazonaws.com:8080/";
const urlLocal = "http://localhost:8080/";
var campos = ""

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
        localStorage.setItem("token", response.data.token);
        BuscarInfoUsuario("pacientes/eu");
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
      Swal.fire({
        title: "Cadastro feito!",
        text: "Seu cadastro foi feito com sucesso na plataforma!",
        icon: "success"
      });
      console.log(response.data);
    }
  } catch (error) {
    if (error.response) {
      const { title, fields } = error.response.data;
      console.log("Title:", title);
      console.log("Fields:", fields);
      for (const campo in fields) {
        campos += `${campo}: ${fields[campo]}`
      }
      Swal.fire({
        title: title,
        text: campos ? campos : "",
        icon: "warning"
      });
    } else if (error.request) {
      console.error("Erro de requisição:", error.request);
    } else {
      console.error("Erro ao configurar requisição:", error.message);
    }
  }
};
export const BuscarInfoUsuario = async (endpoint) => {
  if (typeof window === "undefined") {
    return null;
  }

  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No token found");
  }

  const response = await fetch(url + endpoint, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    const userInfo = await response.json();
    console.log(userInfo);
    localStorage.setItem("usuario", JSON.stringify(userInfo));
  } else {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
};

export const BuscarUsuario = async (endpoint, id) => {
  if (typeof window === "undefined") {
    return null;
  }

  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No token found");
  }

  const response = await fetch(url + endpoint + id, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    const userInfo = await response.json();
    return userInfo;
  } else {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
};

export const Atualizar = async (paciente, endpoint) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token found");
    }
    const response = await axios.put(url + endpoint, paciente, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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
