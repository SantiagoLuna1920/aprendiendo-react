import { isLoggedIn } from "../js/isLoggedIn";
import { AdminPanel } from "./AdminPanel";
import { LoginForm } from "./LoginForm";

export function WelcomePanel () {
    
    return (
        <div>
            { // podemos usar el condicional ternario para renderizar componentes jsx
                (isLoggedIn) ? <AdminPanel />
                : <LoginForm />
            }
        </div>
    );
    
};