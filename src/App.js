import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import {useState} from "react";

function App() {

  const [isCartShown, setIsCartShown] = useState(false);
  const showCartHandler = () => {
      setIsCartShown(true)
  }
  const hideCartHandler = () => {
      setIsCartShown(false)
  }

  return (
      <CartProvider>
           {isCartShown && <Cart onHide={hideCartHandler}/>}
            <Header onShow={showCartHandler}/>
           <main>
               <Meals/>
           </main>
      </CartProvider>

  );
}

export default App;
