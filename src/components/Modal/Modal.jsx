import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css'

const modal = document.getElementById('modal-root');

class Modal extends Component{

  componentDidMount() {
    document.addEventListener('keydown',this.keyModalClose)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown',this.keyModalClose)
  }

  keyModalClose = (event) =>{
    if(event.target === event.currentTarget){
      this.props.modalClose()
    }

    if(event.code === 'Escape'){
      this.props.modalClose();
    }
  }

  render() {
    return createPortal(
      <div className={css.Overlay}  onClick={this.keyModalClose}>
        <div className={css.Modal}>
          {this.props.children}
        </div>
      </div>,
      modal
    )
  }
};

export default Modal;
