import "./navbar.css";
import Logo from "../../assets/logo.svg";

export default function Navbar() {
  
  return (
    <div>
        <div className="navbar">
          <div className="logo">
          <img src={Logo} alt="logo" />
          </div>
        </div>
    </div>

  )
}
