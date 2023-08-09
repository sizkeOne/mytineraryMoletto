

 
import { Link } from "react-router-dom";
import "./welcome.css";
const Welcome = () => {
  return (
    
   
   




      <main className="appMain">
        <div className="cardMain">
          <h3>My Tinerary</h3>
          <p>
            Find your perfect trip, designed by insiders who know and love their
            cities
          </p>
          <div className="buttom">
            <Link className="buttomMain" to="/cities">
              <img src="public/CityLogo.png" alt="" />
              
              <h3>View travels</h3></Link>
          </div>
        </div>
      </main>
    
  );
};

export default Welcome;
