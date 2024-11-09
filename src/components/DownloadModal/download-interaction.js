// import React from "react";
// import {render} from "react-dom";
// import DownloadInteractionModal from "./DownloadInteractionModal.jsx";
//   // var modalAttr;
  

//   const triggerButtons = document.querySelectorAll(".js-download-modal-toggle");

//   const renderShare = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     var button = e.currentTarget;

//     const modalId = e.currentTarget.dataset.modal;
//     const expanded = e.currentTarget.setAttribute("aria-expanded", "true");
//     const modal = document.querySelector(`#${modalId}`);
    
//     const dictionary = modal.getAttribute("data-dictionary");

//     var props = {
//       dictionary: JSON.parse(dictionary) || null,
//       triggerButton: e.currentTarget
//     };

//     render(<DownloadInteractionModal {...props} />, modal);
    
//   }

//   triggerButtons.forEach(button => {
//     button.addEventListener("click", (e) => renderShare(e));
//   });