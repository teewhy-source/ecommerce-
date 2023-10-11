import { createContext,useState } from "react";
import Shopdata from "../Shopdata.json"

export const  ProductsContext = createContext({
    products:[],
});

export const ProductsProvider=({children}) => {
    const [products, setproducts] = useState(Shopdata)
    const value ={products}
    return(
      <ProductsContext.Provider value={value}>
        {children}
        </ProductsContext.Provider>  
    )
}