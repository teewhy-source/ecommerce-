import { createContext, useState,useEffect } from "react";

const addcartitem = (cartitems, producttoadd) => {
  const existingcartitem = cartitems.find(
    (cartitem) => cartitem.id === producttoadd.id
  );

  if (existingcartitem) {
    return cartitems.map((cartitem) =>
      cartitem.id === producttoadd.id // Use === for comparison
        ? { ...cartitem, quantity: cartitem.quantity + 1 }
        : cartitem
    );
  }

  return [...cartitems, { ...producttoadd, quantity: 1 }];
};
export const Cartcontext = createContext({
  iscartopen: false,
  setiscartopen: () => {},
  cartitems: [],
  additemtocart: () => {},
  cartcount:0
});

export const CartProvider = ({ children }) => {
  const [iscartopen, setiscartopen] = useState(false);
  const [cartitems, setcartitems] = useState([]);
  const [cartcount,setcartcount]=useState(0)

  useEffect(() => {
    const newcartcount = cartitems.reduce((total,cartitem)=>total+cartitem.quantity,0)
    setcartcount(newcartcount)
  }, [cartitems])
  

  const additemtocart = (producttoadd) => {
    setcartitems(addcartitem(cartitems, producttoadd));
  };
  const value = { iscartopen, setiscartopen, additemtocart, cartitems,cartcount };
  return <Cartcontext.Provider value={value}>{children}</Cartcontext.Provider>;
};
