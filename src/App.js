import "./App.css";
import CurrencyConverter from "./components/CurrencyConverter";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <h1>Currency Conversion with React Context</h1>
      <CurrencyConverter />
      <Products />
    </div>
  );
}

export default App;
