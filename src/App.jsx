import './App.css'
import { TextBox, TextBoxPass } from './components/textbox'
import { ButtonPrimary, ButtonSuccess, ButtonWarning } from './components/button'
import { ALink , ALinkTab } from './components/link'
import { NavBar } from './components/navbar'

function App() {
    return (
        <>
            <main>
                <NavBar></NavBar>
                <TextBox ID={"email"} Label={"Email o Matricula"} />
                <TextBoxPass ID={"pass"} Label={"Contraseña"} />
                <ALinkTab url={"https://www.youtube.com"}>Olvide mi contraseña</ALinkTab>
                <ButtonPrimary Text={"Primario"}></ButtonPrimary>
                <ButtonSuccess Text={"Satisfactorio?"}></ButtonSuccess>
                <ButtonWarning Text={"Alerta?"}></ButtonWarning>
            </main>
        </>
    )
}

export default App
