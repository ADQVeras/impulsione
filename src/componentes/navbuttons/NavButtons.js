import './NavButtons.css'

import { NavLink } from "react-router-dom"


const NavButtons = () => {
  return (
    <div className="nav-btn">
        <NavLink to='/loginForm' className='navlink'><button className='btn-loginForm'>ENTRAR NA MINHA CONTA</button></NavLink>
        <NavLink to='/meCadastrarComoPf' className='navlink'><button className='btn-meCadastrarComoPf'>ME CADASTRAR COMO PF</button></NavLink>
        <NavLink to='/cadastrarMeuNegocio' className='navlink'><button className='btn-cadastrarMeuNegocio'>CADASTRAR MEU NEGÓCIO</button></NavLink>
    </div>
  )
}

export default NavButtons