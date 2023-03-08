
import { Table } from 'react-bootstrap';
import AssignmentDashboard from './AssignmentDashboard';

function SelectAssignment() {
  return (
      <>
          
          <AssignmentDashboard></AssignmentDashboard>
    
          <div style={{paddingTop:"30px",marginRight:"10px"}}>
              <h2>SelectAssignment...</h2>
              <Table striped bordered hover size="sm" className='m-5'>
      <thead>
        <tr>
          <th>Sr.No</th>
          <th>Assignment Name</th>
          <th>Assignment Status</th>
          <th>Update/Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
        
              </div>
              
              {/* <Table striped bordered hover size="sm" className='m-5'>
      <thead>
        <tr>
          <th>Sr.No</th>
          <th>Assignment Name</th>
          <th>Assignment Status</th>
          <th>Update/Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table> */}
        
     
    </>
  );
}

export default SelectAssignment;