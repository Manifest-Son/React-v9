import { useContext } from "react"
import { CartContext } from "./contects"

export default function Header() {
    const [cart] = useContext(CartContext);
    return(
        <nav>
        <h1 className="logo"> Padre Gino's Plaza </h1>
        <div className="nav-cart">
            🛒<span className="nav-cart-number">{cart.length}</span>
        </div>
        </nav>
    )
}
