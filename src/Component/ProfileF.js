import React from "react";
import AssignmentDashboard from "./AssignmentDashboard";
import '../css/profile.css'
export default function ProfileF() {

    return (
        <div>
            <AssignmentDashboard></AssignmentDashboard>

            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img
                                className="rounded-circle mt-5"
                                width="150px"
                                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                            />
                            <span className="font-weight-bold">CodeReviewer Profile</span>

                            <span> </span>
                        </div>
                    </div>
                    <div className="col-md-5 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">CodeReviewer Profile</h4>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} className="">
                                <label className="labels">Student Name</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    // disabled
                                    placeholder="enter user name"
                                    name="username"
                                     //onChange={(e) => onInputChange(e)}
                                    value={'Sushil Nikumbh'}
                                    required

                                />
                            </div>
                            <div className="row mt-3">
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} className="">
                                    <label className="labels">College Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="College Name"
                                        name="clg_name"
                                        disabled
                                        value={'Vidyalankar'}
                                        // onChange={(e) => onInputChange(e)}
                                        required

                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} className="mt-3">
                                    <label className="labels">College PAN</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="College PAN"
                                        name="clg_pan"
                                        disabled
                                        // onChange={(e) => onInputChange(e)}
                                        value={'Pan Number'}
                                        required

                                    />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} className="">
                                    <label className="labels">College UID</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="College UID"
                                        name="clg_uid"
                                        disabled
                                        // onChange={(e) => onInputChange(e)}
                                        value={'User Id'}
                                        required

                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} className="mt-3">
                                    <label className="labels">Email ID</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="enter email id"
                                        name="email"
                                        disabled
                                        // onChange={(e) => onInputChange(e)}
                                        value={'user@gmail.com'}
                                        required

                                    />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} className="mt-3">
                                <label className="labels">Phone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Phone"
                                    name="phone"
                                    disabled
                                    // onChange={(e) => onInputChange(e)}
                                    value={'+911234567890'}
                                    required

                                />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} className="mt-3">
                                <label className="labels">Date of birth</label>
                                <input
                                    className="form-control"
                                    placeholder="Placement Officer"
                                    name="placement_officer"
                                    disabled
                                    // onChange={(e) => onInputChange(e)}
                                    value={'09/11/2005'}
                                    required

                                />
                            </div>

                        </div>

                        <div className="mt-5 text-center">
                            <button
                                className="btn btn-primary profile-button"
                                type="button"
                                // onClick={(e) => onSubmit(e)}
                            >
                                Edit Profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);
}