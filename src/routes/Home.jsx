import "../App.css"
import { NavBar } from "../components/navbar"
import {TextBox , TextBoxPass} from "../components/textbox"
import {ALinkTab} from "../components/link"
import {ButtonPrimary , ButtonSuccess , ButtonWarning} from "../components/button"

export const Home = () => (
    <main>
        <NavBar></NavBar>
        <TextBox ID={"email"} Label={"Email o Matricula"} />
        <TextBoxPass ID={"pass"} Label={"Contraseña"} />
        <ALinkTab url={"https://www.youtube.com"}>Olvide mi contraseña</ALinkTab>
        <ButtonPrimary Text={"Primario"}></ButtonPrimary>
        <ButtonSuccess Text={"Satisfactorio?"}></ButtonSuccess>
        <ButtonWarning Text={"Alerta?"}></ButtonWarning> 
    </main>
)