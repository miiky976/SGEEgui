import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavBar } from './components/navbar'
import { Home } from "./routes/Home"
import "./App.css"
import { Login } from './routes/Login'

function App() {
    return (
        <BrowserRouter>
            <NavBar></NavBar>
            <Routes>
                <Route path='/' element={<Login Sesion={"Estudiante"}></Login>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
