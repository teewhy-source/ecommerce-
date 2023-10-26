import { createContext, useState, useEffect } from "react";
import { getcategoriesanddocuments } from "../utils/firebase/Firebase";

export const CategoriesContext = createContext({
  categoriesmap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesmap, setcategoriesmap] = useState({});
  useEffect(() => {
    const getcategorymap = async () => {
      const categorymap = await getcategoriesanddocuments();
      console.log(categorymap);
      setcategoriesmap(categorymap);
    };
    getcategorymap();
  }, []);

  const value = { categoriesmap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
