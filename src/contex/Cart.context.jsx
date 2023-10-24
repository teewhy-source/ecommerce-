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


const removecartitem=(cartitems,producttoremove)=>{ 
  //find the cart item to remove
  const existingcartitem = cartitems.find(
    (cartitem) => cartitem.id === producttoremove.id
  );
    //check if quantity is equal to 1, if it is, remove that item from the cart 
  if (existingcartitem.quantity === 1) {
    return cartitems.filter(cartitem => cartitem.id !== producttoremove.id)
  }
  //return back cartitems with matching cart item with reduced quality
  return cartitems.map((cartitem) =>
  cartitem.id === producttoremove.id // Use === for comparison
    ? { ...cartitem, quantity: cartitem.quantity - 1 }
    : cartitem
);
}

const clearitem = (cartitems,cartitemtoclear)=> cartitems.filter(cartitem => cartitem.id !== cartitemtoclear.id)




export const Cartcontext = createContext({
  iscartopen: false,
  setiscartopen: () => {},
  cartitems: [],
  additemtocart: () => {},
  removeitemfromcart:()=>{},
  clearcart:()=>{},
  cartcount:0,
  carttotal:0
});

export const CartProvider = ({ children }) => {
  const [iscartopen, setiscartopen] = useState(false);
  const [cartitems, setcartitems] = useState([]);
  const [cartcount,setcartcount]=useState(0)//count 
  const [carttotal,setcarttotal]=useState(0)

  
  const additemtocart = (producttoadd) => {
    setcartitems(addcartitem(cartitems, producttoadd));
    console.log("updated cart item:", cartitems);
  };

  const removeitemfromcart = (producttoremove) => {
    setcartitems(removecartitem(cartitems, producttoremove));
    console.log("updated cart item:", cartitems);
  };

  const clearcart = (cartitemtoclear) => {
    setcartitems(clearitem(cartitems, cartitemtoclear));
    console.log("updated cart item:", clearcart);
  };


  useEffect(() => {
    const newcartcount = cartitems.reduce((total,cartitem)=>total+cartitem.quantity,0)
    setcartcount(newcartcount)
  }, [cartitems])


  useEffect(() => {
    const newcarttotal = cartitems.reduce(
      (total,cartitem)=>total+cartitem.quantity * cartitem.price,
      0)
    setcarttotal(newcarttotal)
  }, [cartitems])

  const value = { iscartopen,
     setiscartopen,
      additemtocart,
       cartitems,
       cartcount,
       removeitemfromcart,
       clearcart,
       carttotal
       };
  return <Cartcontext.Provider value={value}>{children}</Cartcontext.Provider>;
};
