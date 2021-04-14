import React, {useState, useContext} from "react";
import {useDataFromFirestore} from "../customHooks/useFirestore";

const streamsContext = React.createContext();

export function useLatestStreamsContext(){
    return useContext(streamsContext);
}

export function StreamsContextProvider({ children }) {
    console.log("StreamsContextProvider() worked!");

    const [latestStreams, setLatestStreams] =useState([]);


    const value = {

        latestStreams,
        setLatestStreams
    }

    return (
        <streamsContext.Provider value={value}>
            {children}
        </streamsContext.Provider>
    );
}
