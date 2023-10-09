import React, { useState } from "react";
import Forminput from "../FORMINPUT/Forminput";
import {  createAuthUserWithEmailAndPassword,
          createuserdocumentfromauth
   } from "../../utils/firebase/Firebase";
import "./signup.styles.scss";
// import { Usercontex } from "../../contex/Contex";
import Button from "../buttons/Button";

const formfield = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Signup = () => {
  const [formfields, setformfields] = useState(formfield);
  const { displayName, email, password, confirmPassword } = formfields;
  // const {setCurrentuser}=useContext(Usercontex)
  console.log("taiye");  
  const resetfields=()=>{
        setformfields(formfield)
    }
  const handlesubmit = async (event) => {
    event.preventDefault();
    
    if (password !== confirmPassword) {
      alert("Password does not match");
      return;
    }
    try {
      const {user} = await  createAuthUserWithEmailAndPassword(email, password);
      // setCurrentuser(user);
      await createuserdocumentfromauth(user,{displayName})
      resetfields();
      console.log(response); 
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
    } else {
        console.log("User creation encountered an error", error);
    }
     
    }
  };

  const handleformchange = (event) => {
    const { name, value } = event.target;
    setformfields({ ...formfields, [name]: value });
    console.log(name,value);
  };

  return (
    <div className="sing-up-container">
        <h2>dont have an account?</h2>
      <span>Signup with your email and password</span>

      <form onSubmit={handlesubmit}>
        <Forminput
        label="Display name"
          type="text"
          required
          onChange={handleformchange}
          name="displayName"
          value={displayName}
        />

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
        <Forminput
                label="Confirm password"

          type="password"
          required
          onChange={handleformchange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button   type="submit">Signup</Button>

      </form>
    </div>
  );
};

export default Signup;
