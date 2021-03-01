import React from 'react';
import {useAuthContext} from "../context/AuthProvider";

export default function UserPointsField (){
const{userPoints, setUserPoints} = useAuthContext();

    return(
        <div className="font-weight-bold mb-0">Points {userPoints}</div>
    );
}