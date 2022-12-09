import "./navbar.css"
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom"

export const NavBar = () => (
    <nav className="NavBar">
        <Link to={"/"} className="Home"><img width={40} src="/image.png" className="Image" alt="UPP" /><span className="LogoText">SISTEMA DE GESTION DE <br />EVENTOS EXTRACURRICULARES</span></Link>
    </nav>
)