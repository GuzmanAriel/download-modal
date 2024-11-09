import dictionary from "../../JSON/material-item.json";
import dictionaryOne from "../../JSON/material-item-one.json";

import MaterialItem from "../MaterialItem/MaterialItem";

function Container(props) {
    return (
        <div className="gv__session-container gv__session-container-material-item-promo" style={{ marginTop: '100px' }}>
            <div className="gv__session-container__inner">
                <div className="gv__session-container__col">
                    <MaterialItem dictionary={dictionary}/>
                    <MaterialItem dictionary={dictionaryOne}/>
                </div>
            </div>
        </div>
    );
}

export default Container;