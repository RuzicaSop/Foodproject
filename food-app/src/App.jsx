import { useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Login from "./components/Form/Login";
import Sidebar from "./components/Sidebar/Sidebar";




function App() {
  const [cartIsShow, setCartIsShow] = useState(false);
  
  const showCartHandler = () => {
    setCartIsShow(true);
  };

  const hideCartHandler = () => {
    setCartIsShow(false);
  };

 
    const [loginIsShow, setloginIsShow] = useState(false);
  
  const showLoginHandler = () => {
    setloginIsShow(true);
  };

  const hideloginHandler = () => {
    setloginIsShow(false);
  };

  return (
    <CartProvider>
      { cartIsShow && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} onShowLogin={showLoginHandler}/>
      
      <main>
      <Sidebar/>
      { loginIsShow && <Login onClose={hideloginHandler} />}
        <Meals />
      </main>
    </CartProvider>
  );
}


export default App;
