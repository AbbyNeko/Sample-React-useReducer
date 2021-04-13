import React, {useReducer, useState} from 'react';

export default function CartForm() {

    const [check, toggle] = useReducer((check) => !check, false);

    const btnFunction = ()=> {
        if(check) {
            setNotifyTxt("Added")
        } else {
            setNotifyTxt("Item was not added. Would you consider getting a Switch instead?");
        } 
    };

    const [notifyTxt, setNotifyTxt] = useState('');

    return (
        <>
        <label for="select-item"><strong>SELECT ITEM</strong></label>
        <input type="checkbox" id="select-item" onChange={toggle}/>
        <button onClick={btnFunction}>Add to Cart</button>
        <p className="notification">{notifyTxt}</p>
        </>
    );

};