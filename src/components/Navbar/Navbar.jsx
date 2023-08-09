
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import './Navbar.css'
import { Link } from 'react-router-dom';
import Cities from '../../pages/cities/cities';

function Navbar2() {

  return (
    <>
      {['sm'].map((expand) => (
  <div className="navbarStyle">
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-1">
          <Container fluid id='containerfluid'>
          
            <div className='imageNav'>     
          <img src="public/tinerary.png" alt="logo" id='navImg' />
          </div>
            <Navbar.Brand href="#" > My Tinerary</Navbar.Brand>
            
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
                 

                  <Link to="/cities">Cities</Link>
                  
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