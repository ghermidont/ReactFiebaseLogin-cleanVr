//To be adapted
import React, { useState } from "react";
//to be integrated
/*import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";*/
//end of to be integrated

const UserProfilePage = () =>{
    //to be integrated
  /*const [error, setError] = useState("")
  const {currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }*/
  //end of to be integrated

    return(
        <div className="row py-5 px-4">
            <div className="col-md-5 mx-auto">
                <div className="bg-white shadow rounded overflow-hidden">
                    <div className="px-4 pt-0 pb-4 cover">
                        <div className="media align-items-end profile-head">
                            <div className="profile mr-3"><a href="#" className="btn btn-outline-dark btn-sm btn-block">Edit profile</a></div>
                            <div className="media-body mb-5 text-white">
                                <h4 className="mt-0 mb-0">Mark Williams</h4>
                                <p className="small mb-4"> <i className="fas fa-map-marker-alt mr-2"></i>New York</p>
                            </div>
                        </div>
                    </div>    
                </div>

                <div className="bg-light p-4 d-flex justify-content-end text-center">
                    <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                            <h5 className="font-weight-bold mb-0 d-block">215</h5><small className="text-muted"> <i className="fas fa-image mr-1"></i>Photos</small>
                        </li>
                        <li className="list-inline-item">
                            <h5 className="font-weight-bold mb-0 d-block">745</h5><small className="text-muted"> <i className="fas fa-user mr-1"></i>Followers</small>
                        </li>
                        <li className="list-inline-item">
                            <h5 className="font-weight-bold mb-0 d-block">340</h5><small className="text-muted"> <i className="fas fa-user mr-1"></i>Following</small>
                        </li>
                    </ul>
                </div>

                <div className="px-4 py-3">
                    <h5 className="mb-0">About</h5>
                    <div className="p-4 rounded shadow-sm bg-light">
                        <p className="font-italic mb-0">Web Developer</p>
                        <p className="font-italic mb-0">Lives in New York</p>
                        <p className="font-italic mb-0">Photographer</p>
                    </div>
                </div>

                <div className="py-4 px-4">
                    {/* Image gallery title*/}
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <h5 className="mb-0">Recent photos</h5><a href="#" className="btn btn-link text-muted">Show all</a>
                    </div>
                    {/* Image gallery title END*/}
                    {/* Image gallery */}
                    <div className="row">
                        <div className="col-lg-6 mb-2 pr-lg-1"> Image 1</div>
                        <div className="col-lg-6 mb-2 pl-lg-1">Image 2</div>
                        <div className="col-lg-6 pr-lg-1 mb-2">Image 3</div>
                        <div className="col-lg-6 pl-lg-1">Image 4</div>
                    </div>
                    {/* Image gallery END*/}
                </div>
            </div>
        </div>
    );
};

export default UserProfilePage;