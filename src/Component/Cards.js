
import AssignmentDashboard from './AssignmentDashboard';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "../css/Cards.css";

function Cards() {
  return (
      <>
          
          <AssignmentDashboard></AssignmentDashboard>
    
         
          
          <div  style={{marginLeft:"10%",width:"100%",display:"flex",  marginRight:"10%", paddingTop:"50px",marginBottom:"-15px"}}>
             
              <Card className="text-center box" style={{ width: "25%" }}>
      <Card.Header>Assignment 01</Card.Header>
      <Card.Body>
        <Card.Title>Assignment Name</Card.Title>
        <Card.Text>
         Summery.... With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Link to="/Assignment"> <Button variant="primary">View</Button></Link> 
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
              </Card>
              
              <Card className="text-center box" style={{ width: "25%" ,marginLeft:"15px",marginRight:"15px" }}>
      <Card.Header>Assignment 01</Card.Header>
      <Card.Body>
        <Card.Title>Assignment Name</Card.Title>
        <Card.Text>
         Summery.... With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Link to="/Assignment"> <Button variant="primary">View</Button></Link> 
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
              </Card>
              
              <Card className="text-center box" style={{ width: "25%" }}>
      <Card.Header>Assignment 01</Card.Header>
      <Card.Body>
        <Card.Title>Assignment Name</Card.Title>
        <Card.Text>
         Summery.... With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Link to="/Assignment"> <Button variant="primary">View</Button></Link> 
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
              </Card>   
              
        </div>
        <div  style={{marginLeft:"10%",width:"100%",display:"flex",  marginRight:"10%", paddingTop:"50px",marginBottom:"30px"}}>
             
        <Card className="text-center box" style={{ width: "25%" }}>
      <Card.Header>Assignment 01</Card.Header>
      <Card.Body>
        <Card.Title>Assignment Name</Card.Title>
        <Card.Text>
         Summery.... With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Link to="/Assignment"> <Button variant="primary">View</Button></Link> 
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
              </Card>
             
              <Card className="text-center box" style={{ width: "25%" ,marginLeft:"15px",marginRight:"15px" }}>
      <Card.Header>Assignment 01</Card.Header>
      <Card.Body>
        <Card.Title>Assignment Name</Card.Title>
        <Card.Text>
         Summery.... With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Link to="/Assignment"> <Button variant="primary">View</Button></Link> 
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
              </Card>
             
              <Card className="text-center box" style={{ width: "25%" }}>
      <Card.Header>Assignment 01</Card.Header>
      <Card.Body>
        <Card.Title>Assignment Name</Card.Title>
        <Card.Text>
         Summery.... With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Link to="/Assignment"> <Button variant="primary">View</Button></Link> 
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
              </Card>
             
           
             
              
             
       </div>
    
    </>
  );
}

export default Cards;



