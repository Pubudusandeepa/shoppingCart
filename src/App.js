import React from 'react';
import CartContainer from './component/CartContainer';
import Navbar from './component/Navbar'

import cartItems from './cart-items';
import {createStore} from 'redux'
import reducer from './component/reducer'
import { Provider } from 'react-redux';

const initialStore = {
  cart: cartItems,
  total: 123,
  amount: 3

   
}


const store = createStore(reducer, initialStore)


  

function App() {
  return (
    <Provider store={store}>
    <Navbar />
    <CartContainer cart={cartItems}/>
    </Provider>

   
   )
}
export default App;
