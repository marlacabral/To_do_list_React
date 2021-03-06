import React from 'react';
import { Link } from 'react-router-dom';
import './TarefaCard.scss';
import '../../structure/TarefaList/TarefaList';


const TarefaCard = (props) => {
  const tarefa = props.tarefa;

  return (
    <Link to={`/view/${tarefa._id}`} className="card">
      <div>
        <p className="card-text">{tarefa.titulo}</p>
        <span className="card-info">{tarefa.descricao}</span>
      </div>
    </Link>
  )
}

export default TarefaCard
