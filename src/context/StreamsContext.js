import React, {useState, useContext} from "react";

const streamsContext = React.createContext();

export function useLatestStreamsContext(){
    return useContext(streamsContext);
}

export function StreamsContextProvider({ children }) {
    console.log("StreamsContextProvider() worked!");

    const [latestStreams, setLatestStreams] =useState([]);
    const[entStreams, setEntStreams] = useState([]);

    const value = {
        entStreams,
        setEntStreams,
        latestStreams,
        setLatestStreams
    }

    return (
        <streamsContext.Provider value={value}>
            {children}
        </streamsContext.Provider>
    );
}
