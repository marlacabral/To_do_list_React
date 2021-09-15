import React from 'react';
import TarefaList from '../../components/structure/TarefaList/TarefaList';
import './Home.scss';
import TarefaCard from '../../components/structure/TarefaCard/TarefaCard'

const Home = () => {
  return (
    <section className="content">


      <div className="card">
        <TarefaList />
      
      </div>
      
      <div className="jake">
        
        <div className="face">
          <div className="eye">
            <div className="cheek-left"></div>
          </div>
          <div className="eye">
            <div className="cheek-right"></div>
          </div>
          <div className="mustache">
            <div className="nose"></div>
            <div className="mouth">
              <div className="tooth-left"></div>
              <div className="tooth-center"></div>
              <div className="tooth-right"></div>
              <div className="tongue"></div>
            </div>
            <div className="mustache-cut"></div>
          </div>
        </div>

        <div className="arms">
          <div className="arm">
            <div className="finger-left"></div>
            <div className="finger-center"></div>
            <div className="finger-right"></div>
          </div>
          <div className="arm">
            <div className="finger-left"></div>
            <div className="finger-center"></div>
            <div className="finger-right"></div>
          </div>
        </div>
        
      </div> 
    </section>
  )
}

export default Home
