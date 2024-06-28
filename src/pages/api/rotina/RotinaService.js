import axios from "axios";
import Swal from "sweetalert2";

import { url } from "../urls";

export const AtualizarRotina = async (rotina, endpoint) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token found");
    }
    const response = await axios.put(url + endpoint, rotina, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status == 200) {
      console.log("Rotina atualizada com sucesso");
      return response.data
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

export const BuscarRotina = async (endpoint) => {
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