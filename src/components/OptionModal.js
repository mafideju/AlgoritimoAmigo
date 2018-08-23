import React from 'react';
import Modal from 'react-modal';

const OptionModal = props => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Algoritimo Mandou"
    onRequestClose={props.handleModalClose}
    style={{ backgroundColor: 'red' }}
    className="paiDoModal"
  >
    <div className="selecionada">
      <div className="selecionada__header">
        <p>Minha Sugestão:</p>
        <h3>{props.selectedOption && <p>{props.selectedOption}</p>}</h3>
      </div>
      <button onClick={props.handleModalClose} className="button button__modal">
        Entendi!
      </button>
    </div>
  </Modal>
);
export default OptionModal;
