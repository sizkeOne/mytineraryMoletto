
import Container from 'react-bootstrap/Container';
 
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import './Navbar.css'
import { Link } from 'react-router-dom';


function Navbar2() {

  return (
    <>
      {['sm'].map((expand) => (
  <div className="navbarStyle">
        <Navbar key={expand} expand={expand} className="navbarStyle">
          <Container fluid id='containerfluid'>
          
            <div className='imageNav'>     
          <img src="public/pngtree-silhouette-of-an-airplane-against-the-background-of-the-globe-picture-image_7986634.png" alt="logo" id='navImg' />
          </div>
            <Link to="/" className='urls' > <h2>My Tinerary </h2></Link>
            
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                
                <div className='urls'>
                  <button className='buttonNav'><Link to="/"className='buttonNav' >Home</Link></button>
                  <button className='buttonNav'>  <Link to="/cities" className='buttonNav'>Cities</Link></button>
                  
                  <button className='buttonNav'>  <Link to="/signUp" className='buttonNav'>Sign Up</Link></button>

                  <button className='buttonNav'>  <Link to="/signIn" className='buttonNav'>Sign In</Link></button>
                  
                </div>
      
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
           
            <div className='imageNav'>    
                <img src="public/user.png" alt="" />
                </div>
          </Container>
        </Navbar>
        </div> 
      ))}
    </>
  );
}

export default Navbar2;