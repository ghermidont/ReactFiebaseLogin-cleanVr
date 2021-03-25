//https://firebase.google.com/docs/auth/web/manage-users
//https://firebase.google.com/docs/auth/users
//integrate this to get and display user info on profile page.

//To be adapted
import React from "react";
import UserPointsFieldPh2 from "./UserPointsField-Ph2";
import {useAuthContext} from "../../context/ContextProvider";



//import useFirestore from '../customHooks/useFirestore';
//import {auth} from './firebase';

//const user = auth.currentUser;

//const name, email, photoUrl, uid, emailVerified;

//if (user != null) {
  //  name = user.displayName;
  //  email = user.email;
  //  photoUrl = user.photoURL;
  //  emailVerified = user.emailVerified;
   // uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                     // this value to authenticate with your backend server, if
                     // you have one. Use User.getToken() instead.
//}

//to be integrated
/*import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";*/
//end of to be integrated

const UserProfilePageContentPh2 = () =>{

    const {currentUser} = useAuthContext();


    console.log("UserProfilePageContentPh2 worked.");
    //const { docs } = useFirestore('images');  //to be integrated
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
                            <div className="profile mr-3"><a href="/UpdateUserProfile" className="btn btn-outline-dark btn-sm btn-block">Edit profile</a></div>
                            <div className="media-body mb-5 text-white">

                                <h4 className="mt-0 mb-0">Mark Williams</h4>
                                <h4 className="mt-0 mb-0">Email {currentUser.email}</h4>
                                <p className="small mb-4"> <i className="fas fa-map-marker-alt mr-2"></i>New York</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-light p-4 d-flex justify-content-end text-center">
                   <UserPointsFieldPh2 />
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
                        <div className="col-lg-6 mb-2 pr-lg-1 bg-success"> Article 1</div>
                        <div className="col-lg-6 mb-2 pl-lg-1 bg-primary">Article 2</div>
                        <div className="col-lg-6 pr-lg-1 mb-2 bg-danger">Article 3</div>
                        <div className="col-lg-6 pl-lg-1 bg-warning">article 4</div>
                    </div>
                    {/* Image gallery END*/}
                </div>
            </div>
            <button type="button" className="btn btn-light">Complete/modify account</button>
        </div>
    );
};

export default UserProfilePageContentPh2;