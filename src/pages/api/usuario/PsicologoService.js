import axios from "axios";

const urlLocal = "http://ec2-18-230-88-220.sa-east-1.compute.amazonaws.com:8080/";
const url = "http://localhost:8080/";

export const LoginPsicologo = async (login, endpoint) => {
  try {
    const response = await axios.post(url + endpoint, login, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 201) {
      LoginPsicologo(login, endpoint);
    }
    if (response.data.token != null) {
      if (typeof window !== "undefined") {
        localStorage.setItem("token", response.data.token);
        BuscarInfoPsicologo("psicologos/eu");
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

export const CadastroPsicologo = async (psicologo, endpoint) => {
  try {
    const response = await axios.post(url + endpoint, psicologo, {
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


export const BuscarInfoPsicologo = async (endpoint) => {
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

  console.log(token)

  if (response.ok) {
    const userInfo = await response.json();
    console.log(userInfo);
    localStorage.setItem("psicologo", JSON.stringify(userInfo));
  } else {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
};

export const BuscarPsicologo = async (endpoint, id) => {
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

export const Atualizar = async (psicologo, endpoint) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token found");
    }
    const response = await axios.put(url + endpoint, psicologo, {
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
