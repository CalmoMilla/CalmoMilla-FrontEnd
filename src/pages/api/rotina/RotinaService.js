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