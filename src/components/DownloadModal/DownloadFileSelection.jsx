import React, {useState, useRef, useEffect} from "react";
import {string, bool, object, number, func} from "prop-types";

function DownloadFileSelection (props) { 
const {files, selectedOption, handleDownloadSelection, setSelectedOption, step, setStep, saveChecked, isGoogleDoc} = props;
const [checked, setChecked] = useState();
const [hasMultipleGoogleFiles, setHasMultipleGoogleFiles] = useState(false);
const firstOption = useRef();


const handleKeyboard = (e, selection) => {
  switch (e.key) {
    case " ":
    case "SpaceBar":
    case "Enter":
      handleDownloadSelection(e, selection);
      setChecked(selection.title);
      e.current.focus();
    case "ArrowUp":
      if(e.target.classList.contains('dropdown-item-0')){
        firstOption.current.focus();
      } else {
        e.current.previousSibling.focus();
      }
      break;
    case "ArrowDown":
      if(e.target.classList.contains('dropdown-item-last')){
        firstOption.current.focus();
      } else {
        e.current.nextSibling.focus();
      }
      break;
    default:
      break;
  }
}

useEffect(()=>{
    
  const googleFiles = files.find((file)=> file.Key === "googledoc")

  if (googleFiles) {
    setHasMultipleGoogleFiles(googleFiles.files.length > 1);
  }
  


},[]);


const handleExternalLink = (e, target) => {

  if(hasMultipleGoogleFiles) {
    window.open(target.url);
  } else {
    window.open(target.files[0].url);
  }
  
}

const displayFiles = () => {
  if (files) {
    return files.map((target, i) => {
      return (
        <div 
          className={`gv__modal__option-list-item radio-button dropdown-item-${i} ${i === files.length - 1 ? "dropdown-item-last" : ""}`} 
          key={`download-option-${i}`} 
          ref={i === 0 ? firstOption : null}
          onClick={(e) => {
            (target.Key === "googledoc" && !hasMultipleGoogleFiles && step === 0) || (selectedOption?.Key === "googledoc" && hasMultipleGoogleFiles && step === 1) ? handleExternalLink(e, target) : handleDownloadSelection(e, target);
            setChecked(target.title);
          }} 
          onKeyDown={(e) => {(target.Key === "googledoc" && !hasMultipleGoogleFiles && step === 0) || (selectedOption?.Key === "googledoc" && hasMultipleGoogleFiles && step === 1) ? handleExternalLink(e, target) : handleKeyboard(e, target)}}
          aria-checked={checked === target.title ? "true" : "false"} 
          tabIndex="0"
        >
          <input 
            id={`download-option-${i}`} 
            type="radio" 
            name="radio-button" 
            value={`download-option-${i}`} 
            defaultChecked={checked === target.title} 
          /> 
          <label htmlFor={`download-option-${i}`}>
            <img src={target.icon} alt={target.iconAlt} />
            <span>{target.title}</span>
          </label>

          {/* Google Drive Icon Handling */}
          {(target.Key === "googledoc" && !hasMultipleGoogleFiles && step === 0) || (selectedOption?.Key === "googledoc" && hasMultipleGoogleFiles && step === 1) ? (
            <svg className="download-next-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M1.63636 2.18197C1.33512 2.18197 1.09091 2.42618 1.09091 2.72743V10.3638C1.09091 10.665 1.33512 10.9092 1.63636 10.9092H9.27273C9.57397 10.9092 9.81818 10.665 9.81818 10.3638V6.60118H10.9091V10.3638C10.9091 11.2675 10.1765 12.0002 9.27273 12.0002H1.63636C0.732625 12.0002 0 11.2675 0 10.3638V2.72743C0 1.82369 0.732625 1.09106 1.63636 1.09106H5.62601V2.18197H1.63636Z" fill="#0058DC"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M11.6809 1.09073L5.45498 7.31666L4.68359 6.54527L10.9095 0.319336L11.6809 1.09073Z" fill="#0058DC"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M10.9094 1.09091H8.18213V0H12.0003V3.81818H10.9094V1.09091Z" fill="#0058DC"/>
            </svg>
          ) : (
            <svg className="download-next-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="5.98505" x2="11.25" y2="5.98505" stroke="#333333" strokeWidth="1.13" />
              <line x1="7.10225" y1="10.1023" x2="11.6023" y2="5.60225" stroke="#333333" strokeWidth="1.125" />
              <line y1="-0.5625" x2="6.36396" y2="-0.5625" transform="matrix(0.707107 0.707107 0.707107 -0.707107 7.5 1.5)" stroke="#333333" strokeWidth="1.125" />
            </svg>
          )}
        </div>
      );
    });
  }
};


useEffect(()=>{
  setChecked(saveChecked);
  
},[saveChecked]);
  
  return (
    <form className="gv__modal__option-list">
        {displayFiles()}
    </form> 
  );
}


export default DownloadFileSelection;