import React from 'react';
import Modal from 'react-modal';

const OptionModal = props => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Algoritimo Mandou"
    onRequestClose={props.handleModalClose}
  >
    <h6>Algoritimo Mandou:</h6>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleModalClose}>Entendi!</button>
  </Modal>
);
export default OptionModal;
