import Pizza from "./Pizza";
import { createRoot } from "react-dom/client";



const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza name="Pepparoni" description="pep, cheese, n stuff" />
      <Pizza name="Hawaiiann" description="pep, pinapple, n stuff" />
      <Pizza name="Americano" description="fresh fries and Dogs" />
      <Pizza name="Pepparoni" description="pep, cheese, n stuff" />
    </div>
  )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
