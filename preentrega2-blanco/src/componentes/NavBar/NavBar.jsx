import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import {Link, NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <Link to="/">
      <img className="logoSinFondo" src="../sinfondo.ico" alt="logo mab azul " />
      </Link>

        <nav >
            <ul className='lista'>

                <li>
                  <NavLink to="/categoria/1">
                   Hombres
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/categoria/2">
                    Mujeres
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/categoria/3">
                   Adolescentes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/categoria/4">
                    Refuerzos
                  </NavLink>
                </li>
            </ul>
        </nav>
        
        <CartWidget/>

    </header>
  )
}

export default NavBar