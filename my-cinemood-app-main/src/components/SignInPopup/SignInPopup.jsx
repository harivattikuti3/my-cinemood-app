import {useState} from "react";
import "./SignInPopup.css";

const SignInPopup = ({ onClose }) => {
    const [SignState,setSignState] = useState("Sign up");
  return (
    <div className="signin-backdrop" onClick={onClose}>
      <div className="signin-popup" onClick={(e) => e.stopPropagation()}>
        <h2>{SignState}</h2>
        {
          SignState==="Sign up"?<input type="text" placeholder="Your name"></input>:<></>
        }
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>{SignState}</button>
        <button className="close-btn" onClick={onClose}>Close</button>
        {
          SignState==="Sign up"?<p>Already have an account?<span onClick={()=>setSignState("Login")}>Login here</span></p>
                 :<p>Don't have an account?<span onClick={()=>setSignState("Sign up")}>Signup here</span></p>
        }
      </div>
    </div>
  );
};

export default SignInPopup;