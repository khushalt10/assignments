import Nav from 'react-bootstrap/Nav';
import Dashboard from './Dashboard';

function AssignmentDashboard() {
  return (
    <>
          <div style={{borderTop:"5px solid green",margin:"5%",borderLeft:"5px solid green",borderRight:"5px solid green",paddingTop:"15px",marginBottom:"-15px"}}>
          <Nav className="justify-content-center"  variant="tabs" >
        <Nav.Item>
          <Nav.Link href="/AssignmentDashboard">HomeDashboard</Nav.Link>
        </Nav.Item>
      <Nav.Item>
          <Nav.Link href="/AssignmentDashboard/categories">Categories</Nav.Link>
      </Nav.Item>
      <Nav.Item>
          <Nav.Link href="/AssignmentDashboard/quizzesPage">Quizzes</Nav.Link>
      </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/AssignmentDashboard/cards">Assignment</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/AssignmentDashboard/grades'>Grades</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/AssignmentDashboard/DashboardSetting'>Settings</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href='/AssignmentDashboard/AdminDashboard'>AdminDashboard</Nav.Link>
          </Nav.Item>
          </Nav>
          </div>

    </>
  );
}

export default AssignmentDashboard;
