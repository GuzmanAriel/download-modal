import React, {useState, useEffect} from "react";

import DownloadAction from "./DownloadAction.jsx";
import DownloadFileSelection from "./DownloadFileSelection.jsx";

const DownloadSelections = props => {
  const {dictionary, downloadData, downloadSelections, step, setStep, noteMessage, setNoteMessage} = props;
  const [hasMultipleSelections, setHasMultipleSelections] = useState(downloadSelections.length > 1);
  const [hasMultipleFiles, setHasMultipleFiles] = useState(false);
  const [isGoogleDoc, setIsGoogleDoc] = useState(false);
  const [selectedOption, setSelectedOption] = useState();
  const [secondSelectedOption, setSecondSelectedOption] = useState();
  const [hasError, setHasError] = useState(false);
  const [saveChecked, setSaveChecked] = useState({
    firstSelection: "",
    secondSelection: ""
  });
  

  const handleDownloadSelection = (e, option) => {
 
    e.stopPropagation();
    e.preventDefault();
  
  
    setSaveChecked((prevState) => ({
      ...prevState,
      firstSelection: step === 0 ? option.title : prevState.firstSelection,
      secondSelection: step === 1 ? option.title : prevState.secondSelection,
    }));
  
    if (step === 0) {
      setSelectedOption(option);
      setHasMultipleFiles(option.files.length > 1);
  
      setStep((prevStep) => prevStep + 1);
    } else if (step === 1) {
      setSecondSelectedOption(option);
      setStep(step + 1);
    }
  
    setHasError(false);
  };
  
  const stepDisplay = () => {
    // Handle state updates outside of the return statement
    if (step === 0) {

      if (!hasMultipleSelections) {
        if (!hasMultipleFiles) {
          // Set note message only if the state needs to change
          if (noteMessage !== downloadData.ThirdStepHeaderText) {
            setNoteMessage(downloadData.ThirdStepHeaderText);
          }
          
          //TODO: If if it a google doc then we go to downloadFileSelection
          // if (downloadSelections.key === "") {

          // }
          // Return DownloadAction when no multiple files
          return (
            <DownloadAction 
              files={downloadSelections[0].files}
              hasMultipleFiles={hasMultipleFiles}
            />
          );

        } else {
          // Return DownloadFileSelection when there are multiple files
          return (
            <DownloadFileSelection 
              files={downloadSelections[0].files}
              handleDownloadSelection={handleDownloadSelection}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              saveChecked={saveChecked.firstSelection}
              step={step}
              setStep={setStep}
            />
          );
        }
      } else {
        // Set message for multiple selections
        if (noteMessage !== downloadData.SecondStepHeaderText) {
          setNoteMessage(downloadData.SecondStepHeaderText);
        }
  
        // Return DownloadFileSelection for multiple selections
        return (
          <DownloadFileSelection
            files={downloadSelections}
            handleDownloadSelection={handleDownloadSelection}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            saveChecked={saveChecked.firstSelection}
            step={step}
            setStep={setStep}
          />
        );
      }
    }
  
    if (step === 1) {
      if (downloadSelections.length === 1 && hasMultipleFiles) {
        // Set note message for single selection with multiple files
        if (noteMessage !== downloadData.ThirdStepHeaderText) {
          setNoteMessage(downloadData.ThirdStepHeaderText);
        }
  
        // Return DownloadAction for step 1
        return (
          <DownloadAction
            hasMultipleFiles={hasMultipleFiles}
            files={selectedOption}
          />
        );
      } else {
        if (hasMultipleFiles) {
          // Set message for multiple files in step 1
          if (noteMessage !== downloadData.SecondStepHeaderText) {
            setNoteMessage(downloadData.SecondStepHeaderText);
          }
  
          // Return DownloadFileSelection for step 1 with multiple files
          return (
            <DownloadFileSelection
              files={selectedOption.files}
              handleDownloadSelection={handleDownloadSelection}
              selectedOption={selectedOption}
              setSecondSelectedOption={setSecondSelectedOption}
              saveChecked={saveChecked.secondSelection}
              step={step}
              setStep={setStep}
            />
          );
        } else {
          // Set note message when no multiple files
          if (noteMessage !== downloadData.ThirdStepHeaderText) {
            setNoteMessage(downloadData.ThirdStepHeaderText);
          }
  
          // Return DownloadAction for step 1 with no multiple files
          return (
            <DownloadAction
              hasMultipleFiles={hasMultipleFiles}
              files={selectedOption.files}
            />
          );
        }
      }
    }

    if (step === 2) {
      return (
        <DownloadAction
          hasMultipleFiles={hasMultipleFiles}
          files={secondSelectedOption}
        />
      );
    }
  
    return null; // Handle case where step is not 0 or 1
  };
  

  const handleError = () => {
    setHasError(true);
  }

  useEffect(()=>{
    if(!hasMultipleSelections){
      if (downloadSelections[0].files.length > 1) {
        setHasMultipleFiles(true);
      }
    }
    
  }, []);

  return (

    <div className="gv__modal__download">
      <div className="gv__modal__download"></div>
      <div className="gv__modal__options gv__modal__options-full">
          {
            stepDisplay()
          }
          { hasError  && <div className="gv__modal__options-error">Please select and option to continue</div> }

      </div>
    </div>
  );
};

export default DownloadSelections;