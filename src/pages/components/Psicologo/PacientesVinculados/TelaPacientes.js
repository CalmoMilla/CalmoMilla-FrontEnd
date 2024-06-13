export default function TelaPacientes() {

    let data = [
      {id: 1, titulo: "Ordem Alfabética", amarelo: true},
      {id: 2, titulo: "Data", amarelo: true},
    ] 
  
    return (
      <div className="mt-32 flex gap-4 flex-col justify-center items-center lg:justify-around lg:items-start lg:flex-row">
        <Filtro data={data}/>
        <PacientesVinculados/>
      </div>
        
    );
  }