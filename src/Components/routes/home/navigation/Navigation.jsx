import React, { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { Usercontex } from "../../../../contex/Contex";
import logo from "../../../../images/teewhy.jpg";
import { signoutuser } from "../../../../utils/firebase/Firebase";

const Navigation = () => {
  const { currentuser } = useContext(Usercontex);

  // const signouthandler = async () => {
  //   try {
  //     await signoutuser();
  //     setcurrentuser(null);
  //   } catch (error) {
  //     console.error("Error signing out:", error);
  //     // Handle error (show a message to the user, log it, etc.)
  //   }
  // };

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
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
