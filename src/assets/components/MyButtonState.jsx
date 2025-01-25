import { handleClickState } from "../js/handleClickState";

/**
 * 
 * @param {useState} parametros 
 * @returns {HTMLButtonElement}
 * por ejemplo, a continuación desestructuro los valores enviados desde mi App.jsx, se envian como objetos y los desestructuro en mi función hija.
 */
export function MyButtonState ( {count, setCount} ) {
    

    return (
        <button onClick={ (() => {
            handleClickState(count, setCount);
        }) }>
            Hiciste click { count } veces.
        </button>
    );
}