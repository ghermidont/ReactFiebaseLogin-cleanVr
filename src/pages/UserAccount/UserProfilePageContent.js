//https://firebase.google.com/docs/auth/web/manage-users
//https://firebase.google.com/docs/auth/users
//integrate this to get and display user info on profile page.

//To be adapted
import React from "react";
import UserPointsField from "./UserPointsField";
import {useAuthContext} from "../../context/AuthContext";
import {Link} from "react-router-dom";
import ShortArticlesList from "../../components/ShortArticlesList";

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

const UserProfilePageContent = () =>{
    const {currentUser} = useAuthContext();

    console.log("UserProfilePageContent worked.");

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
        <div className="row py-5 px-4" style={{paddingTop: "10em" }}>
            <div className="col-md-5 mx-auto">
                <div className="bg-white shadow rounded overflow-hidden">
                    <div className="px-4 pt-0 pb-4 cover">
                        <div className="media align-items-end profile-head">
                            <div className="profile mr-3">
                                <Link to="/UpdateUserProfile">
                                    <a className="btn btn-outline-dark btn-sm btn-block">Edit profile</a>
                                </Link>
                            </div>
                            <div className="media-body mb-5 text-white">
                                <h4 className="mt-0 mb-0">Name: {currentUser.displayName||""}</h4>
                                <h4 className="mt-0 mb-0">Email: {currentUser.email}</h4>
                                <h4 style={{backgroundColor: "red"}}>Email verified: {currentUser.emailVerified||"Not verified"}</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-light p-4 d-flex justify-content-end text-center">
                   <UserPointsField />
                </div>

                <div className="px-4 py-3">
                    <h5 className="mb-0">About</h5>
                    <Link to="/UserProfileArticlesPage">See all...</Link>
                    <div className="p-4 rounded shadow-sm bg-light">
                        <ShortArticlesList />
                    </div>
                </div>
                <div style={{display: "inline-block"}}>
                    <Link to="/ApproveArticlesComponent">
                        <button type="button" className="btn btn-light">Approve articles</button>
                    </Link>
                    <Link to="/UpdateUserProfile">
                        <button type="button" className="btn btn-light">Complete/modify account</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default UserProfilePageContent;