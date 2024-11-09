import React, {useState, useEffect} from "react";
// import { shape, string, bool, object } from "prop-types";
import { useMediaQuery } from 'react-responsive';
import { Modal} from "react-modal";
import DownloadSelections from "./DownloadSelections.jsx";

const DownloadInteractionModal = props => {
  const {dictionary, triggerButton, fromReact, setShowShare} = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState(dictionary.ModalTitle);
  const [step, setStep] = useState(0);
  const isSmallTabletorMobile = useMediaQuery({ query: '(max-width: 780px)' });
  const [noteMessage, setNoteMessage] = useState(dictionary.DownloadData?.HeaderText)

console.log("download interaction modal");
  const openModal = (e, button) => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    //double check html body knows the modal is closed. 
    if(document.querySelector("body").classList.contains("gv__modal__body--modal-open")){
      document.querySelector("body").classList.remove("gv__modal__body--modal-open");
    }
    
    if(fromReact){
      setShowShare(false);
    }
    
  };
  
  
  if(!fromReact){
    triggerButton?.addEventListener("click", (e) => openModal(e));
  }

  useEffect(()=>{
    
    openModal();

    
  },[]);


  return (<Modal isOpen={isModalOpen}
    bodyOpenClassName={null}
    overlayClassName="gv__modal"
    className="gv__modal-interaction"
    onRequestClose={closeModal}
    shouldCloseOnOverlayClick={true}>
      <div className="gv__modal-v2-body gv__modal-download">
          <div className="gv__manual-modal__header">
            <div className="gv__manual-modal__modal-label">
            {step > 0 && (
              <button 
                className="gv__manual-modal-share__back gv__back-button" 
                onClick={() => setStep(step - 1)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M25.6836 27.65L18.0503 20L25.6836 12.35L23.3336 10L13.3336 20L23.3336 30L25.6836 27.65Z" fill="white" />
                </svg>
              </button>
            )}
              <span>{modalTitle}</span>
            </div>
            <button className="gv__manual-modal-v2__close js-close-manual-modal" type="button" onClick={() => closeModal() }>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M7 7L17 17L7 7Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
          </div>
          <div className="gv__manual-modal__container">
              <DownloadSelections step={step} 
              setStep={setStep} 
              downloadSelections={dictionary.DownloadData.Data.DownloadSelections} 
              noteMessage={noteMessage}
              setNoteMessage={setNoteMessage}
              downloadData={dictionary.DownloadData}/>
          </div>
      </div>
    </Modal>
  );
};



export default DownloadInteractionModal;