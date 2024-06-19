import axios from "axios";
import Swal from "sweetalert2";

const url = "http://ec2-18-230-88-220.sa-east-1.compute.amazonaws.com:8080/";
const urlLocal = "http://localhost:8080/";
var campos = "";

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
      campos = "";
      const { title, fields } = error.response.data;
      console.log("Title:", title);
      console.log("Fields:", fields);
      for (const campo in fields) {
        campos += `${campo}: ${fields[campo]}`;
      }
      Swal.fire({
        title: title,
        text: campos ? campos : "",
        icon: "warning",
      });
    } else if (error.request) {
      console.error("Erro de requisição:", error.request);
    } else {
      console.error("Erro ao configurar requisição:", error.message);
    }
  }
};

// export const LoginComGoogle = async (usuario, endpoint) => {
//   try {
//     const response = await axios.post(url + endpoint, usuario, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (response.data.token != null) {
//       if (typeof window !== "undefined") {
//         localStorage.setItem("token", response.data.token);
//         BuscarInfoUsuario("pacientes/eu");
//       }
//       return response.data.token;
//     }
//   } catch (error) {
//     console.error("Erro ao fazer requisição para a API:", error);
//   }
// };

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
        icon: "success",
      });
      console.log(response.data);
    }
  } catch (error) {
    if (error.response) {
      campos = "";
      const { title, fields } = error.response.data;
      console.log("Title:", title);
      console.log("Fields:", fields);
      for (const campo in fields) {
        campos += `${campo}: ${fields[campo]}`;
      }
      Swal.fire({
        title: title,
        text: campos ? campos : "",
        icon: "warning",
      });
    } else if (error.request) {
      console.error("Erro de requisição:", error.request);
    } else {
      console.error("Erro ao configurar requisição:", error.message);
    }
  }
};

export const EsqueciASenha = async (email, endpoint) => {
  try {
    const response = await axios.post(url + endpoint, email, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status == 200) {
      Swal.fire({
        title: "Email enviado com sucesso!",
        text: "Acesse o email e siga as instruções!",
        icon: "success",
      });
      console.log(response.data);
    }
  } catch (error) {
    console.log(error);
    if (error.response) {
      let campos = "";
      const { title } = error.response.data;
      console.log("Title:", title);
      Swal.fire({
        title: title,
        text: campos ? campos : "",
        icon: "warning",
      });
    } else if (error.request) {
      console.error("Erro de requisição:", error.request);
    } else {
      console.error("Erro ao configurar requisição:", error.message);
    }
  }
};

export const EnviarQuestionarioDeEmocoes = async (emocoes, endpoint) => {
  try {
    if (typeof window === "undefined") {
      return null;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token found");
    }

    const response = await axios.post(url + endpoint, emocoes, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status == 200) {
      Swal.fire({
        title: "Dados registrados com sucesso!",
        text: `${response.data.mensagem}`,
        icon: "success",
      });
      console.log(response.data);
    }
  } catch (error) {
    if (error.response) {
      campos = "";
      const { title, fields } = error.response.data;
      console.log("Title:", title);
      console.log(response.status);
      console.log("Fields:", fields);
      for (const campo in fields) {
        campos += `${campo}: ${fields[campo]}`;
      }
      Swal.fire({
        title: title,
        text: campos ? campos : "",
        icon: "warning",
      });
    } else if (error.request) {
      console.error("Erro de requisição:", error.request);
    } else {
      console.error("Erro ao configurar requisição:", error.message);
    }
  }
};

export const BuscarInfoEmocoes = async (endpoint) => {
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
    const emocoes = await response.json();
    return emocoes;
  } else {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
};

export const RedefinirSenha = async (redefinir, endpoint) => {
  try {
    const response = await axios.post(url + endpoint, redefinir, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status == 200) {
      Swal.fire({
        title: "Senha redefinida com sucesso!",
        text: "Faça seu login agora!",
        icon: "success",
      });
    }
  } catch (error) {
    if (error.response) {
      campos = "";
      const { title, fields } = error.response.data;
      console.log("Title:", title);
      console.log("Fields:", fields);
      for (const campo in fields) {
        campos += `${campo}: ${fields[campo]}`;
      }
      Swal.fire({
        title: title,
        text: campos ? campos : "",
        icon: "warning",
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
    localStorage.setItem("usuario", JSON.stringify(userInfo));
  } else {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
};

export const BuscarPsicologosSalvos = async (endpoint) => {
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
    return userInfo
  } else {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
};

export const FavoritarPsicologo = async (endpoint, obj) => {
  try {
    if (typeof window === "undefined") {
      return null;
    }
  
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token found");
    }

    const response = await axios.post(url + endpoint, obj, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

  } catch (error) {
    if (error.response) {
      campos = "";
      const { title, fields } = error.response.data;
      console.log("Title:", title);
      console.log("Fields:", fields);
      for (const campo in fields) {
        campos += `${campo}: ${fields[campo]}`;
      }
      Swal.fire({
        title: title,
        text: campos ? campos : "",
        icon: "warning",
      });
    } else if (error.request) {
      console.error("Erro de requisição:", error.request);
    } else {
      console.error("Erro ao configurar requisição:", error.message);
    }
  }
};

export const DeletarPsicologo = async (endpoint, obj) => {

  console.log(obj)

  try {
    if (typeof window === "undefined") {
      return null;
    }
  
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token found");
    }

    const response = await fetch(url + endpoint, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj)
    });


    if (response.status === 204) {
      console.log("deleto")
    }
  } catch (error) {
    console.log(error)
    if (error.response) {
      campos = "";
      const { title, fields } = error.response.data;
      console.log("Title:", title);
      console.log("Fields:", fields);
      for (const campo in fields) {
        campos += `${campo}: ${fields[campo]}`;
      }
      Swal.fire({
        title: title,
        text: campos ? campos : "",
        icon: "warning",
      });
    } else if (error.request) {
      console.error("Erro de requisição:", error.request);
    } else {
      console.error("Erro ao configurar requisição:", error.message);
    }
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

export const BuscarPsicologos = async (endpoint) => {
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
    const psicologos = await response.json();
    return psicologos;
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
