import Pizza from "./Pizza";
import { createRoot } from "react-dom/client";



const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza name="Pepparoni" description="pep, cheese, n stuff" image={"/public/pizzas/pepperoni.webp"}/>
      <Pizza name="Hawaiiann" description="pep, pinapple, n stuff" image={"/public/pizzas/hawaiian.webp"}/>
      <Pizza name="Americano" description="fresh fries and Dogs" image={"/public/pizzas/big_meat.webp"} />
      <Pizza name="Pepparoni" description="pep, cheese, n stuff" image={"/public/pizzas/sicilian.webp"}/>
    </div>
  )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
