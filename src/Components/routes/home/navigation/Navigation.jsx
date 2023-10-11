import React, { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { Usercontex } from "../../../../contex/Contex";
import logo from "../../../../images/teewhy.jpg";
import Cartdropdown from "../../../cartdropdown/Cartdropdown";
import { Cartcontext } from "../../../../contex/Cart.context";
import { signoutuser } from "../../../../utils/firebase/Firebase";
import Cart from "../../../cart/Carticon";
const Navigation = () => {
  const { currentuser } = useContext(Usercontex);
const {iscartopen}=useContext(Cartcontext)
  
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div className="image">
            <img src={logo} alt="Logo" className="image" />
          </div>
        </Link>

        <div className="links-container">
          <Link className="nav-links" to="/shop">
            SHOP
          </Link>
          {currentuser ? (
            <span className="nav-link" onClick={signoutuser}>
              {" "}
              SIGN OUT {" "}
            </span>
          ) : (
            <Link className="nav-links" to="/auth">
              Sign In
            </Link>
          )}
          <Cart/>
        </div>
      {iscartopen &&<Cartdropdown/>}     
       </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
