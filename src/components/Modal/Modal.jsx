import css from './modal.module.css';
import sprite from '../../img/symbol-defs.svg';
import { useEffect } from 'react';
import {createPortal} from "react-dom";
const modalRoot = document.querySelector('#modal-root');
const Modal = ({ close, children}) => {
  const closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      close();
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', closeModal);
    return () => document.removeEventListener('keydown', closeModal);
  });

  return (
    createPortal(
    <div className={css.backdrop} onClick={closeModal}>
      <div className={css.modal}>
        <button className={css.closeBtn} onClick={close}>
          <svg className={css.closeIcon}>
            <use href={`${sprite}#icon-x-1`}></use>
          </svg>
        </button>
        {children}
      </div>
    </div>,
    modalRoot
    )
  );
};
export default Modal;
