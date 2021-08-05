import {  NavLink } from "react-router-dom"


const NavToProducts = ()=>{
    return (
        <>
            <NavLink className="btn btn-link" to="/products">Ir a productos</NavLink>
        </>
    )
}

export default NavToProducts