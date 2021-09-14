import React from 'react';
import TarefaList from '../../components/structure/TarefaList/TarefaList';
import './Home.scss';

const Home = () => {
  return (
    <section className="content">

      <h1 className="content-title">To Do List</h1>

      <div className="circulo1"></div>
      <div className="circulo2"></div>
      <div className="circulo3"></div>
      <div className="circulo4"></div>
      <div className="circulo5"></div>
      <div className="circulo6"></div>

      {/* <div className="content-list">
        <h1>To do List</h1>
        <TarefaList />
      </div> */}

    </section>
  )
}

export default Home
