import React from 'react';

const Modal = ({ children, active, setActive }) => {
  return (
    <>
      <div className={`modal ${!active ? '' : 'is-active'}`}>
        <header className='modal-header'>
          <button type="button" className="btn modal-close-btn" style={{ backgroundImage: 'url(../images/icons/close-icon.svg)'}} onClick={() => setActive(false)}></button>
        </header>
        <main className='modal-content'>
          {children}
        </main>
      </div>
      <div className={`overlay ${!active ? '' : 'is-active'}`} onClick={() => setActive(false)} />
    </>
  )
}

export default Modal;