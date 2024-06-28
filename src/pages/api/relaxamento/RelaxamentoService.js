import axios from "axios";
import Swal from "sweetalert2";

import { url } from "../urls";

export const BuscarRelaxamento = async (endpoint) => {
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
    const relaxamento = await response.json();
    return relaxamento;
  } else {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
};