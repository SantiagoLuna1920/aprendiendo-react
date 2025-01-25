import { Profile } from './assets/components/Profile'
import './App.css'
import { AboutPage } from './assets/components/AboutPage'
import { MyButton } from './assets/components/MyButton'
import { WelcomePanel } from './assets/components/WelcomePanel'
import { ShoppingList } from './assets/components/ShoppingList'
import { MyButtonEvent } from './assets/components/MyButtonEvent'
import { MyButtonState } from './assets/components/MyButtonState'
import { useState } from 'react'

/**
 * Este es el componente principal, se usa export default para aclarar que es el principal componente
 * @returns {HTMLDivElement}
 */
export default function App() {

  const [ count, setCount ] = useState(0);

  return (
    <div>
     <h1>Bienvenido a mi aplicación.</h1>
     <MyButton />
     <AboutPage />
     <Profile />
     <WelcomePanel />
     <ShoppingList />
     <MyButtonEvent />

     {/* Si renderizas el mismo componente varias veces, cada uno obtendrá su propio estado. Intenta hacer clic independientemente en cada botón: */}
     {/* cuando paso un parametro a un componente, por ejemplo como a continuación, en los parametros de la funcion del componente recibo un objeto independientemente de la cantidad de parametros que yo le mando */}
     <MyButtonState count={count} setCount={setCount} />
     <MyButtonState count={count} setCount={setCount} />
    </div>
  )
}

