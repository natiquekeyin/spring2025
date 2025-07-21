import "./App.css";
import Counter from "./components/Counter";
import { CounterContext } from "./context/Counter";
import { useContext } from "react";
import Cart from "./components/Cart";
import Items from "./components/Items";

function App() {
  // const counterState = useContext(CounterContext);
  // console.log("context", counterState);

  return (
    <>
      <h1>Context Application</h1>
      {/* <h3>Count value is: {2 + 2}</h3>
      <Counter /> */}
      <Items name="Mobile Phone" price={2000} />
      <Items name="Mobile Phone" price={2000} />
      <Items name="Mobile Phone" price={2000} />

      <Cart />
    </>
  );
}

export default App;
