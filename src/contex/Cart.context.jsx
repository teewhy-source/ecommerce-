import { createContext,useState } from "react";

const addcartitem = (cartitems,producttoadd)=>{
    const existingcartitem = cartitems.find(
        (cartitem) => cartitem.id === producttoadd.id
    );
    

        if (existingcartitem) {
            return cartitems.map((cartitem) =>
    cartitem.id === producttoadd.id ? // Use === for comparison
        { ...cartitem, quantity: cartitem.quantity + 1 } 
        : cartitem
);

        }

        return[...cartitems,{...producttoadd,quantity:1}]
}
export const  Cartcontext = createContext({
    iscartopen:false,
    setiscartopen:()=>{},
    cartitems:[],
    additemtocart:()=>{}
    
})

export const CartProvider=({children})=>{

    const [iscartopen, setiscartopen] = useState(false);
    const [cartitems,setcartitems]= useState([])

    const additemtocart = (producttoadd)=>{
        setcartitems(addcartitem(cartitems,producttoadd))
    }
    const value = {iscartopen, setiscartopen,additemtocart,cartitems}
    return <Cartcontext.Provider value={value}>{children}</Cartcontext.Provider>
} 