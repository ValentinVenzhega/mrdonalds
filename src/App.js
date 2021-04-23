import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';
import { OrderConfirm } from './Components/Order/OrderConfirm';
import { useOrderConfirm } from './Components/Hooks/useOrderConfirm';
import { Context } from './Components/Functions/context';

const firebaseConfig = {
  apiKey: "AIzaSyDETRacRAXFxDCZmNwv5oTb_1SYEzOO_1E",
  authDomain: "mrdonalds-99ed8.firebaseapp.com",
  projectId: "mrdonalds-99ed8",
  storageBucket: "mrdonalds-99ed8.appspot.com",
  messagingSenderId: "381254097629",
  appId: "1:381254097629:web:21b32c49f54c198b3d9934"
};

firebase.initializeApp(firebaseConfig);

function App() {
  const authFirebase = firebase.auth;
  const auth = useAuth(authFirebase);
  const openItem = useOpenItem();
  const orders = useOrders();
  const orderConfirm = useOrderConfirm();
  useTitle(openItem.openItem);

  return (
    <Context.Provider value={{
      auth,
      openItem,
      orders,
      orderConfirm,
      firebaseDatabase: firebase.database,
    }}>
      <GlobalStyle />
      <NavBar />
      <Order />
      <Menu />
      { openItem.openItem && <ModalItem />}
      {orderConfirm.openOrderConfirm && <OrderConfirm />}
    </Context.Provider>
  );
}

export default App;
