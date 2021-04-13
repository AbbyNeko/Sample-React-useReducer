import './App.css';

import CartForm from './Components/CartForm';
import ProductImg from './Components/ProductImg';
import startImg from "./ps5.jpeg"

function App() {

  return (
    <div className="App">
      <ProductImg imgSrc={startImg}/>
      <CartForm />
    </div>
  );
}

export default App;
