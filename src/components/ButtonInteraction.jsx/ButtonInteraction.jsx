
function ButtonInteraction(props) { 
    const {handleClick} = props;

    return (
        <button 
            className=" gv__interaction-btn" 
            aria-expanded="false" 
            aria-haspopup="true" 
            data-content-type="download" 
            data-modal="download-modal-123" 
            title="Share, Embed or Download this lesson material"
            onClick={handleClick}
        >
            <span className="gv__interaction-btn-tooltip">
                Download or save and editable Version
            </span>
            <svg className="gv__interaction__btn-icon gv__interaction__btn-icon-share" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-outside-1_14617_907" maskUnits="userSpaceOnUse" x="0" y="0" width="34" height="34" fill="black">
                    <rect fill="white" width="34" height="34"/>
                    <path d="M1 17C1 8.16344 8.16344 1 17 1C25.8366 1 33 8.16344 33 17C33 25.8366 25.8366 33 17 33C8.16344 33 1 25.8366 1 17Z"/>
                </mask>
                <path d="M1 17C1 8.16344 8.16344 1 17 1C25.8366 1 33 8.16344 33 17C33 25.8366 25.8366 33 17 33C8.16344 33 1 25.8366 1 17Z" fill="white"/>
                <path d="M17 32C8.71573 32 2 25.2843 2 17H0C0 26.3888 7.61116 34 17 34V32ZM32 17C32 25.2843 25.2843 32 17 32V34C26.3888 34 34 26.3888 34 17H32ZM17 2C25.2843 2 32 8.71573 32 17H34C34 7.61116 26.3888 0 17 0V2ZM17 0C7.61116 0 0 7.61116 0 17H2C2 8.71573 8.71573 2 17 2V0Z" fill="#F8F9FA" mask="url(#path-1-outside-1_14617_907)"/>
                <line x1="7" y1="26.1" x2="27" y2="26.1" stroke="#213245" strokeWidth="1.8"/>
                <line x1="16.9" y1="7" x2="16.9" y2="22" stroke="#213245" strokeWidth="1.8"/>
                <line x1="11.6364" y1="16.3636" x2="17.6364" y2="22.3636" stroke="#213245" strokeWidth="1.8"/>
                <line y1="-0.9" x2="8.48528" y2="-0.9" transform="matrix(-0.707107 0.707107 0.707107 0.707107 23 17)" stroke="#213245" strokeWidth="1.8"/>
            </svg>
        </button>
    )
}

export default ButtonInteraction;