import React, {useState, useEffect} from "react";

function DownloadAction (props) { 
const {files, hasMultipleFiles, isGoogleDoc} = props;
const [isReady, setIsReady] = useState(false);

const renderGoogleDriveLinks = () => {
  // window.gapi && window.gapi.savetodrive.go();
};

const setDriveButton = () => {
  // gapi.savetodrive.render('savetodrive-div', {
  //              src: hasMultipleFiles === true ? files.url.trim() : files[0].url.trim(),
  //              filename: hasMultipleFiles === true ? files["download-title"].trim() : files[0]["download-title"].trim(),
  //              sitename: hasMultipleFiles === true ? files["download-title"].trim() : files[0]["download-title"].trim()
  //            });
   
 }

useEffect(()=>{
    setIsReady(true);
  
},[isReady]);

if(isReady){
  renderGoogleDriveLinks();
  setDriveButton();
}
  return (
   ( 
    
     <ul className="gv__modal__option-list">
        <li className="gv__modal__option-list-item gv__modal__option-list-item-google">
          <div id="savetodrive-div"></div>
          <span className="g-savetodrive-text">to Google Drive</span>
        </li>

        <li className="gv__modal__option-list-item gv__modal__option-list-item-download">
          <a className="actionable"
                            download
                            href={hasMultipleFiles === true ? files.url : files[0].url} target="_blank"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 22C5.45 22 4.97917 21.8042 4.5875 21.4125C4.19583 21.0208 4 20.55 4 20V4C4 3.45 4.19583 2.97917 4.5875 2.5875C4.97917 2.19583 5.45 2 6 2H14L20 8V14H18V9H13V4H6V20H15V22H6ZM21.95 22.375L19 19.425V21.65H17V16H22.65V18H20.4L23.35 20.95L21.95 22.375Z" fill="#213245"/>
            </svg>
            <span>Download to My Computer</span>
          </a>
        </li>
    </ul>
   )
    
    
  );
}


export default DownloadAction;