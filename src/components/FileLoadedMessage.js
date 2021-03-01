import React from 'react';
import useStorage from '../helperFunct/useStorage';

//in the {} are values passed from the PictureUploadForm component.
export default function FileLoadedMessage ({ file }){
    const {url} = useStorage(file);
    console.log(url);

    return (
        <div className="fileUploadedMessage"> </div>
    );
}

