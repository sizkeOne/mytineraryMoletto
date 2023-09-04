import Accordion from 'react-bootstrap/Accordion';
import './AcordeonTinerary.css'
function AlwaysOpenExample() {
  return (
    
    <Accordion defaultActiveKey={['0']} >
      <Accordion.Item eventKey="1">
        <Accordion.Header>See More</Accordion.Header>
        <div>
        <Accordion.Body  className="container" >
           <h2>In Construccion</h2>
        </Accordion.Body>
        </div>
      </Accordion.Item>
    
    </Accordion>
  );
}

export default AlwaysOpenExample;