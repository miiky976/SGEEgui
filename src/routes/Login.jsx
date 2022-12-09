import "../App.css"
import "./Login.css"
import { TextBox, TextBoxPass } from "../components/textbox"
import { ButtonPrimary } from "../components/button"
import { ALink } from "../components/link"

export const Login = ({Route , Sesion}) => {
    const LogSes = () => {
        console.log("Sesion iniciada con: ",document.getElementById("email"))
    }
    return (
        <main className="Login">
            <h1 className="Title">Universidad Politecnica de Pachuca</h1>
            <form id="Login" className="FormBox">
                <h3 className="FormTitle">Iniciar sesion como {Sesion}</h3>
                <TextBox Label={"Email"} ID="email"></TextBox>
                <TextBoxPass Label={"Contraseña"} ID="password"></TextBoxPass>
                <ALink url={"https://youtube.com"} className="Forgot">Olvide mi contraseña</ALink>
                <ButtonPrimary Form="Login" Text={"Entrar"}></ButtonPrimary>
            </form>
        </main>
    )
}