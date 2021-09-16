import React from 'react';
import './return.scss';

const Return = () => {
    return (
        <div>
            <div className="content">

                <button className="btn" onclick="openModal('dv-modal')">Abrir modal</button>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, vero corporis amet impedit veniam rerum
                    maxime doloribus adipisci perferendis explicabo sequi. Suscipit cumque eius alias necessitatibus consectetur
                    quasi tempora temporibus.</p>

        </div>

        <div id="dv-modal" className="modal">
        <div className="modal-content">
            <div className="modal-header">
                <h1>Meu modal com HTML</h1>
            </div>

    <div className="modal-body">
        <p>Integer in augue felis. Quisque bibendum luctus sapien in egestas. Proin ullamcorper tempus eleifend.
            Sed at sollicitudin libero. Maecenas sodales condimentum sapien vel mattis. Nam lacinia risus vel
            nisl venenatis rhoncus. Duis sit amet massa maximus, mollis mi ac, pellentesque purus. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc dictum neque
            faucibus fringilla pellentesque. Phasellus malesuada aliquet augue. Mauris at eleifend risus, sit
            amet scelerisque augue.</p>

           
    </div>

    <div className="modal-footer">
        <button className="btn" onclick="closeModal('dv-modal')">Fechar</button>
    </div>
</div>
</div>

        </div>
    )
}

export default Return

