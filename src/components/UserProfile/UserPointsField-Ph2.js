import React from 'react';
import {useAuthContext} from "../../context/ContextProvider";

export default function UserPointsFieldPh2 (){
    const{userPoints} = useAuthContext();

    console.log("UserPointsFieldPh2 worked.");

    return(
        <div className="font-weight-bold mb-0">Points {userPoints}</div>
    );
}