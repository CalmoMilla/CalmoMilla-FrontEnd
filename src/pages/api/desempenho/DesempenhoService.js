import axios from "axios";
import Swal from "sweetalert2";

const urlLocal = "http://ec2-18-230-88-220.sa-east-1.compute.amazonaws.com:8080/";
const url = "http://localhost:8080/";

export const BuscarDesempenho = async (endpoint) => {
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
    const desempenho = await response.json();
    return desempenho;
  } else {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
};