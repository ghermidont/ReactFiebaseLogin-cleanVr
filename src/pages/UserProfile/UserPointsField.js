import React from 'react';
import {useAuthContext} from "../../context/AuthContext";

export default function UserPointsField (){
    const{userPoints} = useAuthContext();

    console.log("UserPointsField worked.");

    return(
        <div className="font-weight-bold mb-0">Points {userPoints}</div>
    );
}