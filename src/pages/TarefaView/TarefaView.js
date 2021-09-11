import React, { useEffect, useState } from 'react'
import './TarefaView.scss';
import { Api } from '../../api/api'

const TarefaView = (props) => {
  const [tarefa, setTarefa] = useState({});
  
  useEffect(() => {
    getTarefaById();
  }, [])

  // pegar o id e  chamar a api na url http://localhost:3002/musicas/FindById/
  // passando o id que eu recebi
  const id = props.match.params.id;
  
  const getTarefaById = async () => {
    const response = await Api.fetchGetById(id);
    const data = await response.json();
    setTarefa(data);
    console.log(tarefa);
  }

  return (
    <section className="view">
      <div className="view-img">
        <img src={tarefa.capa} alt={tarefa.nome}/>
      </div>
      <div className="view-info">
        <p className="view-info-text"><b>Nome:</b> { tarefa.nome }</p>
        <p className="view-info-text"><b>Autor:</b> { tarefa.autor }</p>
        <p className="view-info-text"><b>Letra:</b> { tarefa.letra }</p>
        <p className="view-info-text"><b>Duracao:</b> { tarefa.duracao }</p>
        <p className="view-info-text"><b>Data Criacao:</b> { tarefa.dataCriacao }</p>
        <button className="btn btn-success">Editar</button>
        <button className="btn btn-danger">Excluir</button>
      </div>
    </section>
  )
}

export default TarefaView
