import {
  myCustomAuthStateChanged,
  createuserdocumentfromauth,
} from "../utils/firebase/Firebase";
import { createContext, useState, useEffect } from "react";

export const Usercontex = createContext({
  setcurrentuser: () => null,
  currentuser: null,
  cartitem: [],
});

export const Userprovider = ({ children }) => {
  const [currentuser, setcurrentuser] = useState(null);
  const value = { currentuser, setcurrentuser };

  useEffect(() => {
    const stoplistning = myCustomAuthStateChanged((user) => {
      console.log(user);

      if (user) {
        createuserdocumentfromauth(user);
      }
      setcurrentuser(user);
    });

    return stoplistning;
  }, []);

  return <Usercontex.Provider value={value}>{children}</Usercontex.Provider>;
};
