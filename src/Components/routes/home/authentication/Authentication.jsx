import "./authentication.styles.scss"
import Singup from "../../../sing-up/Singup";
import Signinform from "../../../signinform/Signinform"
const  Authentication = () => {
  
// const loggoogleuser=async()=>{
//   const {user}=await signInWithGooglePopup();
//   const userDocref=await createuserdocumentfromauth(user);
// };

  return (
    <div className="authentication-container">
      {/* <button onClick={loggoogleuser}>signin with google popup</button> */}
     <Signinform/>
      <Singup/>
    </div>
  );
};

export default Authentication;
