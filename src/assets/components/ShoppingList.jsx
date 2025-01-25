import { products } from "../js/products";
import { AdminPanel } from "./AdminPanel";
import { LoginForm } from "./LoginForm";

/**
 * 
 * @returns {HTMLListElement}
 */
export function ShoppingList () {
    const listItems = products.map(( product ) => {
        // cuando uso (() => {return}) dentro de losparentesis debo usar return, si solo uso (() => ) no debo usar return, pero debo de asegurarme de que sea solo un elemento lo que estoy devolviendo
        return <li key={product.id}
        style={ {
            color: product.isFruit ? 'magenta' : 'darkgreen'
        } }
        >
            { product.title }
        </li>
    });

    // por ejemplo, puedo guardar en un arreglo componentes, los elementos html como componentes, se me visualizan como objetos
    const items = [ <LoginForm />, <AdminPanel /> ];
    
console.log(items);
//los arrays de elementos html producidos por el map, los puedo renderizar poniendo el nombre de la variable
    return (
        // <ul>{ items }</ul>
        <ul>{listItems}</ul>
    );

}