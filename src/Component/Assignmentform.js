import React, { Component } from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import AssignmentDashboard from './AssignmentDashboard';

const options = [
  { value: 'Option 1', label: 'Option 1' },
  { value: 'Option 2', label: 'Option 2' },
  { value: 'Option 3', label: 'Option 3' },
  { value: 'Option 4', label: 'Option 4' },
  { value: 'Option 5', label: 'Option 5' },
  { value: 'Option 6', label: 'Option 6' },
  { value: 'Option 7', label: 'Option 7' },
  { value: 'Option 8', label: 'Option 8' },
  { value: 'Option 9', label: 'Option 9' },
  { value: 'Option 10', label: 'Option 10' },
];

export  class Assignmentform extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        docId: '',
        dob: '',
        gender: '',
        city: '',
        adhaar: '',
        height: '',
        weight: '',
        bloodGroup: '',
        profilePic: null,
      },
      errors: {},
    };
  }

  handleChange = (event) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.validate()) {
      // TODO: Submit the form data
      console.log('Form data:', this.state.formData);
    }
  };

  validate = () => {
    const { formData } = this.state;
    const errors = {};

    if (!formData.docId.trim()) {
      errors.docId = 'Please enter a user ID';
    }

    if (!formData.dob) {
      errors.dob = 'Please select a date of birth';
    }

    if (!formData.gender) {
      errors.gender = 'Please select a gender';
    }

    if (!formData.city.trim()) {
      errors.city = 'Please enter a city';
    }

    if (!formData.adhaar.trim()) {
      errors.adhaar = 'Please enter an Aadhaar number';
    }



    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return false;
    }

    this.setState({ errors: {} });
    return true;
  };

  render() {
   // const { formData, errors } = this.state;

 // render(){

  return (
    <div>
      <AssignmentDashboard></AssignmentDashboard>
      <Container>
        <Row style={{ marginTop: 100 }} className="d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
          <div className="border border-2 border-primary"></div>
            <Card className="shadow px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">Assignment Submission</h2>
                  <div className="mb-3">
                    <Form onSubmit={this.handleSubmit}>


                    <Form.Group className="mb-3" controlId="adhaar">
                        <Form.Label className="text-center">
                          Assignment Name
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter Assignment Name  ber" name ="adhaar" value={this.state.formData.adhaar}
                  onChange={this.handleChange} />
                      </Form.Group>
                      <div className="text-danger">{this.state.errors.adhaar}</div>


                      <Form.Group className="mb-3" controlId="status">
                        <Form.Label className="text-center">
                        Status
                        </Form.Label>
                        <Form.Control  as="select" name ="status" value={this.state.formData.gender}
                  onChange={this.handleChange} >
                      <option value="">--Select--</option>
                     <option value="male">Completed</option>
                     <option value="female">OnGoing</option>
                     <option value="other">Other</option>
                  </Form.Control>


                      </Form.Group>
                      <div className="text-danger">{this.state.errors.gender}</div>




                      <Form.Group className="mb-3" controlId="adhaar">
                        <Form.Label className="text-center">
                          Adhaar
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter Adhaar Number" name ="adhaar" value={this.state.formData.adhaar}
                  onChange={this.handleChange} />
                      </Form.Group>
                      <div className="text-danger">{this.state.errors.adhaar}</div>





                      <div className="text-danger">{this.state.errors.bloodGroup}</div>

                      <Form.Group className="mb-3" controlId="profilePic">
                        <Form.Label className="text-center">
                        Upload Assignment
                        </Form.Label>
                        <Form.Control type="file" placeholder="Select Profile Picture" name="profilePic" value={this.state.formData.profilePic}
                  onChange={this.handleChange} />
                      </Form.Group>
                      <div className="text-danger">{this.state.errors.profilePic}</div>





                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                        Submit
                        </Button>
                      </div>
                    </Form>

                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
}
