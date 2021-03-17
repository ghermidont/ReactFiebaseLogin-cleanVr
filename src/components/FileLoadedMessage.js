import React from 'react';
import useStorage from '../customHooks/useStorage';

//in the {} are values passed from the PictureUploadForm component.
export default function FileLoadedMessage ({ file }){
    const {url} = useStorage(file);
    console.log(url + " from FileLoadedMessage component.");
    console.log("FileLoadedMessage worked");

    return (
        <div className="fileUploadedMessage"></div>
    );
}

