import React, { useEffect, useState } from 'react'
import './TarefaView.scss';
import { Link } from 'react-router-dom';
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
  
  }

  

  return (
    <section className="view">
       
        <div className="view-info">
          <p className="view-info-text"><b>Titulo:</b> { tarefa.titulo }</p>
          <p className="view-info-text"><b>Descrição:</b> { tarefa.descricao }</p>
          <p className="view-info-text"><b>Prioridade:</b> { tarefa.prioridade }</p>
          <p className="view-info-text"><b>Status:</b> { tarefa.status }</p>
          <p className="view-info-text"><b>Prazo:</b> { tarefa.prazo }</p>
          </div>
        
              
    </section>
  )
}

export default TarefaView
