import React from "react";

const Modal = ({ closeModal, modalState, information }) => {
  if (!modalState) {
    return null;
  }

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{information.label}</p>
          <button className="delete" onClick={closeModal} />
        </header>
        <section className="modal-card-body">
          <div className="content">
            <p>Test</p>
            {JSON.stringify(information)}
          </div>
        </section>
        <footer className="modal-card-foot">
          <a className="button" onClick={closeModal}>
            Close
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
