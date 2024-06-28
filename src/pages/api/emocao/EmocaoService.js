import axios from "axios";
import Swal from "sweetalert2";

import { url } from "../urls";

export const BuscarEmocaoId = async (endpoint, id) => {
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