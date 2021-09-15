import React from 'react'
import './TarefaAdd.scss';
import { Api } from '../../api/api'

const TarefaAdd = () => {
  const handleSubmit = async (evento) => {
    evento.preventDefault();
    console.log(evento.target.nome.value);
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

    const response = await Api.fetchPost(Tarefa);
    const data = await response;
    
    console.log(data);
  };

  return (
    <section className="add">
      <form className="add-form" onSubmit={handleSubmit}>
        <div className="add-form-group">
          <label htmlFor="Título" className="add-form-group-label">Título</label>
          <input type="text" id="Título" name="Título" className="add-form-group-input"/>
        </div>
        <div className="add-form-group">
          <label htmlFor="Descrição" className="add-form-group-label">Descrição</label>
          <input type="text" id="Descrição" name="Descrição" className="add-form-group-input"/>
        </div>
        <div className="add-form-group">
          <label htmlFor="Prioridade" className="add-form-group-label">Prioridade</label>
          <input type="text" id="Prioridade" name="Prioridade" className="add-form-group-input"/>
        </div>
        <div className="add-form-group">
          <label htmlFor="Status" className="add-form-group-label">Status</label>
          <input type="checkbox" id="Status" name="Status" className="add-form-group-input"/>
        </div>
        <div className="add-form-group">
          <label htmlFor="Prazo" className="add-form-group-label">Prazo</label>
          <input type="checkbox" id="Prazo" name="Prazo" className="add-form-group-input"/>
        </div>
       
        <div className="add-form-buttons">
          <button className="add-form-buttons-btn-cancelar">Cancelar</button>
          <button className="add-form-buttons-btn-salvar" type="submit">Enviar</button>
        </div>
      </form>
    </section>
  )
}

export default TarefaAdd
