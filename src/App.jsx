import { Profile } from './assets/components/Profile'
import './App.css'
import { AboutPage } from './assets/components/AboutPage'
import { MyButton } from './assets/components/MyButton'
import { WelcomePanel } from './assets/components/WelcomePanel'
import { ShoppingList } from './assets/components/ShoppingList'

/**
 * Este es el componente principal, se usa export default para aclarar que es el principal componente
 * @returns {HTMLDivElement}
 */
export default function App() {
  

  return (
    <div>
     <h1>Bienvenido a mi aplicación.</h1>
     <MyButton />
     <AboutPage />
     <Profile />
     <WelcomePanel />
     <ShoppingList />
    </div>
  )
}

