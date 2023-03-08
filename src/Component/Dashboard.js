import React from 'react'
import { Link, useParams } from 'react-router-dom';
import "../css/Dashboard.css";
import "../css/Assignment.css"


import assignment from "../images/assignment.png";
import contract from "../images/contract.png";
import distribution from "../images/distribution.png";
import help from "../images/help.png";
import AssignmentDashboard from './AssignmentDashboard';


export default function Dashboard() {
    const { clgName } = useParams();
  return (
    <div>
      <div>
       <AssignmentDashboard></AssignmentDashboard>
  {/* Page Header Start */}
  {/* <div className="container-fluid page-header mt-3 py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
    <div className="container text-center py-5">
      <h1 className="display-2 text-white mb-4 animated slideInDown">{clgName}</h1>
      <nav aria-label="breadcrumb animated slideInDown">

      </nav>
    </div>
  </div> */}
  {/* Page Header End */}
  {/* Service Start */}
  <div className="container-xxl py-5" >
    <div className="container">
      <div className="text-center mx-auto wow fadeInUp box" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
        <p className="fs-5 fw-medium text-primary">Dashboard OP</p>
        <h1 className="display-5 mb-5">Services that We Offer</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-6 col-md-6 wow fadeInUp box" data-wow-delay="0.1s">
          <div className="service-item position-relative h-100">
            <div className="service-text rounded p-5">
              <div className="btn-square bg-light rounded-circle mx-auto mb-4 " style={{width: '64px', height: '64px'}}>
                      <img className="img-fluid" src={assignment} alt="Icon" />
              </div>
              <h5 className="mb-3">Create Students Profile</h5>
              <p className="mb-0">A format to create students profile for the placements</p>
            </div>
            <div className="service-btn rounded-0 rounded-bottom">
              <Link className="text-primary fw-medium" to={"/AssignmentDashboard/DoughnutChart1"} >Click here<i className="bi bi-chevron-double-right ms-2" /></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 wow fadeInUp box" data-wow-delay="0.3s">
          <div className="service-item position-relative h-100">
            <div className="service-text rounded p-5">
              <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{width: '64px', height: '64px'}}>
                      <img className="img-fluid" src={contract } alt="Icon" />
              </div>
              <h5 className="mb-3">Submit Assignments</h5>
              <p className="mb-0">You will be able to submit assignments</p>
            </div>
            <div className="service-btn rounded-0 rounded-bottom">
            <Link className="text-primary fw-medium" to={"/AssignmentDashboard/assignmnetform"} >Click here<i className="bi bi-chevron-double-right ms-2" /></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 wow fadeInUp box" data-wow-delay="0.5s">
          <div className="service-item position-relative h-100">
            <div className="service-text rounded p-5">
              <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{width: '64px', height: '64px'}}>
                      <img className="img-fluid" src={ distribution} alt="Icon" />
              </div>
              <h5 className="mb-3">Selects assignments</h5>
              <p className="mb-0">To select assignments</p>
            </div>
            <div className="service-btn rounded-0 rounded-bottom">
                <Link className="text-primary fw-medium" to={"/AssignmnetDashboard/SelectAssignment"} >Click here<i className="bi bi-chevron-double-right ms-2" /></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 wow fadeInUp box" data-wow-delay="0.5s">
          <div className="service-item position-relative h-100">
            <div className="service-text rounded p-5">
              <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{width: '64px', height: '64px'}}>
                      <img className="img-fluid" src={help } alt="Icon" />
              </div>
              <h5 className="mb-3">View Students Profile</h5>
              <p className="mb-0">View and Manage Students Profile Details </p>
            </div>
            <div className="service-btn rounded-0 rounded-bottom">
            <Link className="text-primary fw-medium" to={"/AssignmentDashboard/profileS"} >Click here<i className="bi bi-chevron-double-right ms-2" /></Link>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
  {/* Service End */}
</div>

    </div>
  )
}
