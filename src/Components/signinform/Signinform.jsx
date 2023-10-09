import React, { useState } from "react";
import Forminput from "../FORMINPUT/Forminput";
// import { Usercontex } from "../../contex/Contex";
import {
  singnAuthUthUserWithEmailAndPassword,
  signInWithGooglePopup,
  createuserdocumentfromauth,
} from "../../utils/firebase/Firebase";
import "./signinform.styles.scss";
import Button from "../buttons/Button";
const formfield = {
  email: "",
  password: "",
};

const Signinform = () => {
  const [formfields, setformfields] = useState(formfield);
  const { email, password } = formfields;
  // const { setcurrentuser}=useContext(Usercontex)
  const resetfields = () => {
    setformfields(formfield);
  };
  const handlesubmit = async (event) => {
    event.preventDefault();
  
    try {
      const {user} = await singnAuthUthUserWithEmailAndPassword(
        email, 
        password);
        // setcurrentuser(user)
      resetfields();
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-login-credentials":;
        alert:("Wrong password condition met")
          break;

          case "auth/user-not-found":
        alert:("user not found ")
          break;
      
        default:
          console.log(error);
          break;
      }
      // console.error("Error signing in:", error.message);
      // if (error.code === "auth/invalid-login-credentials") 
      //   alert("Wrong password condition met");      
    } 
  };
  
  const signinwithgoogle = async () => {
    await signInWithGooglePopup();
  
  };

  const handleformchange = (event) => {
    const { name, value } = event.target;
    setformfields({ ...formfields, [name]: value });
    console.log(name, value);
  };

  return (
    <div className="sing-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handlesubmit}>
        <Forminput
          label="Email"
          type="email"
          required
          onChange={handleformchange}
          name="email"
          value={email}
        />

        <Forminput
          label="Password"
          type="password"
          required
          onChange={handleformchange}
          name="password"
          value={password}
        />

        <div className=" ">
        <Button buttonType="inverted" type="submit">
          Log In
        </Button>
        
        <Button type="button " onClick={signinwithgoogle} buttonType="google">Google Sign in</Button>

        </div>
      </form>
    </div>
  );
};

export default Signinform;
