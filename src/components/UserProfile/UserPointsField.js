import React from 'react';
import {useContextProvider} from "../../context/ContextProvider";

export default function UserPointsField (){
const{userPoints, setUserPoints} = useContextProvider();

    return(
        <div className="font-weight-bold mb-0">Points {userPoints}</div>
    );
}