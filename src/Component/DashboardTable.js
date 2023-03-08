import Table from 'react-bootstrap/Table';

function DashboardTable() {
  return (
    <Table striped bordered hover size="sm">
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
  );
}

export default DashboardTable;