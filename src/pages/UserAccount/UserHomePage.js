import React from 'react';

import {useDataFromFirestore} from "../../customHooks/useFirestore";
import {useAuthContext} from "../../context/AuthContext";
import {Link} from "@material-ui/core";


    export default function UserHomePage() {
        console.log("UserHomePage() worked.");

        const {docsFromHook} = useDataFromFirestore('user-profiles');
        const {currentUser, infoOnCurrentUserObject, seInfoOnCurrentUserObject} = useAuthContext;

        let selectedUserInfoObject = {};

        if(docsFromHook) {
            selectedUserInfoObject = docsFromHook.filter(function (doc) {
                return doc.id === currentUser.uid;
            });

            seInfoOnCurrentUserObject(selectedUserInfoObject);
        }

        return(
            <div>
                <Link to="/UserProfilePage">
                    <button>Profile Page</button>
                </Link>
                <div>{infoOnCurrentUserObject.displayName}</div>
            </div>
    );
}