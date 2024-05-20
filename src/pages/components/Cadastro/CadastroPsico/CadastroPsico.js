export default function CadastroPsico() {
  return (
    <>
      <form action="post" onSubmit={onSubmit}>
        <div className="bg-roxo p-5">
          <label htmlFor="nome">nome </label>
          <input type="text" id="nome" name="nome" />
        </div>
        <div className="bg-roxo p-5">
          <label htmlFor="email">email </label>
          <input type="text" id="email" name="email" />
        </div>
        <div className="bg-roxo p-5">
          <label htmlFor="senha">senha </label>
          <input type="password" id="senha" name="senha" />
        </div>
        <div className="bg-roxo p-5">
          <label htmlFor="cpf">cpf </label>
          <input type="text" id="cpf" name="cpf" />
        </div>
        <div className="bg-roxo p-5">
          <label htmlFor="telefone">telefone </label>
          <input type="text" id="telefone" name="telefone" />
        </div>
        <div className="bg-roxo p-5">
          <label htmlFor="datanasc">data nasc </label>
          <input type="date" id="datanasc" name="datanasc" />
        </div>
        <div className="bg-roxo p-5">
          <select name="genero" id="genero">
            <option value="m">Masculino</option>
            <option value="f">Feminino</option>
            <option value="o">Outros</option>
          </select>
        </div>
        <div className="bg-roxo p-5">
          <button type="submit" className="bg-branco cursor-pointer">
            Entrar
          </button>
        </div>
      </form>
    </>
  );
}
