import ButtonInteraction from "../ButtonInteraction/ButtonInteraction";
import DownloadInteractionModal from "../DownloadModal/DownloadInteractionModal";
import { useState } from "react";


function MaterialItem(props) {
    const {dictionary} = props;

    const handleDownloadClick = () => {
        setOpenDownload(true);
    };

    const [openDownload, setOpenDownload] = useState(false);
    return (
        
        <div 
            className="gv__material-item-card__container" 
            data-modal="materialItemActivity-ee9f3dc4afe2415d96db4a9d6d9f05b6" 
            aria-expanded="false"
            aria-haspopup="true" 
            data-media-id="ae94f350-1bcb-43a1-ab7d-06aa5c75a856" 
            role="button" 
            title="Go to Article" 
            tabIndex="0" 
            data-material-type="Article"
        >
            <div className="gv__material-item-card" href="/OER-Materials/OER-Media/PDFs/Climate/Unit-1/Eunice-Foote-Graphic-Biography?share=embed&fromlesson=true">
                <div className="gv__material-item-card__content-container">
                    <div className="gv__material-item-card__image-wrapper">
                        <img 
                            src="https://www-uat.oerproject.com/-/media/Climate/Images/Unit1/CP-115-Graphic-Biography--Eunice-Foote-Graphic-Biography.png" 
                            alt="" 
                            className="gv__material-item-card__image media" 
                            data-object-fit=""
                        />
                    </div>
                    <div className="gv__material-item-card__content">
                        <div className="gv__material-item-card__content-details">
                            <div className="gv__material-item-card__type">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 1C1.67157 1 1 1.67157 1 2.5V13.5C1 14.3284 1.67157 15 2.5 15H13.5C14.3284 15 15 14.3284 15 13.5V2.5C15 1.67157 14.3284 1 13.5 1H2.5ZM10 4H4V6H10V4ZM4 7H12V9H4V7ZM12 10H4V12H12V10Z" fill="#213245"/>
                            </svg>
                                <p className="gv__material-item-card__type-name">Article</p>
                            </div>
                            <div className="gv__material-item-card__interactions">
                                <ButtonInteraction handleClick={handleDownloadClick}/>
                            </div>
                        </div>
                        <div>
                            <div className="gv__material-item-card__title">Eunice Foote (Graphic Biography)</div>
                            <div className="gv__material-item-card__summary">
                                <p>Eunice Newton Foote discovered that carbon dioxide traps and holds heat much more than other gases, proving what would become known as the greenhouse effect. However, during her lifetime, Eunice never received credit for her achievement.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {openDownload && <DownloadInteractionModal dictionary={dictionary}/>}
        </div>
    );
}

export default MaterialItem;