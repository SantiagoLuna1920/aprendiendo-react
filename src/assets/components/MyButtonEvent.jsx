import { handleClick } from "../js/handleClick";


export function MyButtonEvent () {
    return (
        //¡Nota que onClick={handleClick} no tiene paréntesis al final! No llames a la función controladora de evento: solamente necesitas pasarla hacia abajo. React llamará a tu controlador de evento cuando el usuario haga clic en el botón. Una alternativa es usar funciones anónimas, por ejemplo: <button onClick={(()=> handleClick())}>
            // Hazme click.
            // </button>
        <button onClick={handleClick}>
            Hazme click.
        </button>
    );
}