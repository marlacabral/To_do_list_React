import React, {  useState  } from 'react'
import './TarefaAdd.scss';
import { Api } from '../../api/api';
import { Link } from 'react-router-dom';
 

const TarefaAdd = (props) => {
  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const titulo = evento.target.titulo.value;
    const descricao = evento.target.descricao.value;
    const prioridade = evento.target.prioridade.value;
    const status = evento.target.status.value;
    const prazo = evento.target.prazo.value;

    const Tarefa = {
      titulo: titulo,
      descricao: descricao,
      prioridade: prioridade,
      status: status,
      prazo: prazo,
    }

    try {
      const response = await Api.fetchPost(Tarefa);
      const data = await response;
      console.log(data);
      props.history.push("/");
    } catch (error) {
      console.log(error);
    }
  

    
  };

  
  return (
    <section className="add">
      <form className="add-form" onSubmit={handleSubmit}>

        <div className="add-form-group">
          <p><b>Título:</b></p>
          <input type="text" id="Título" name="Título" placeholder="Digite o título da tarefa" className="add-form-group-input"/>
        </div>

        <div className="add-form-group">
          <p><b>Descrição:</b></p>
          <input type="text" id="Descrição" name="Descrição" placeholder="Digite a descrição da tarefa" className="add-form-group-input"/>
        </div>

        <div className="prioridade">
          <p><b>Prioridade:</b></p>
          <label className="add-form-group-label">Alta</label>
          <input type="radio" id="Prioridade" name="Prioridade" className="add-form-group-input"/>
         
          <label className="add-form-group-label">Baixa</label>
          <input type="radio" id="Prioridade" name="Prioridade" className="add-form-group-input"/>
        </div>

        <div className="status">
          <p><b>Status: </b></p >
          <label className="add-form-group-label">Pendente</label>
          <input type="radio" id="Status" name="Status" className="add-form-group-input"/>
          <label className="add-form-group-label">Andamento</label>
          <input type="radio" id="Status" name="Status" className="add-form-group-input"/>
          <label className="add-form-group-label">Concluído</label>
          <input type="radio" id="Status" name="Status" className="add-form-group-input"/>
          <div/>
          
          <div className="add-form-group">
      
          <p><b>Prazo:</b></p>
          <input type="date" id="Prazo" name="Prazo" className="add-form-group-input"/>
        </div>
               
        <div className="add-form-buttons">
          < Link to="/" >
          <button className="add-form-buttons-btn-cancelar">Cancelar</button>
          </ Link>

          <button className="add-form-buttons-btn-enviar" type="submit">Enviar</button>
        </div>
        </div>
      </form>
    </section>
  )
}

export default TarefaAdd
