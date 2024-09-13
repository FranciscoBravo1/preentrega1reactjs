import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"


const Navbar = () => {

  return (
    <header>
        <h1>Garavano Online</h1>

    <nav>
        <ul>
            <li className="text-primary">Lacteos</li>
            <li className="text-danger">Bebidas</li>
            <li className="text-warning">Almacen</li>
        </ul>
    </nav>

    <CartWidget/>
    </header>
  )
}

export default Navbar