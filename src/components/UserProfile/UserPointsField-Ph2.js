import React from 'react';
import {useContextProvider} from "../../context/ContextProvider";

export default function UserPointsFieldPh2 (){
    const{userPoints} = useContextProvider();

    console.log("UserPointsFieldPh2 worked.");

    return(
        <div className="font-weight-bold mb-0">Points {userPoints}</div>
    );
}