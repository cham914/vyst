import Navbar from '../components/navbar/navbar';

export default function Grats() {
    return (
        <div>
          <Navbar />
          <div className="main-body">
            <div className="form" style={{textAlign:"center"}}>
   
            <p className="b-3">Verification Complete</p>
                            <p className="fs-1">
                                Thank you for verifying your details with us, You'll be redirected
                          to the home page.
                            </p>
            </div>
          </div>
        </div>
      );
}
