import React, { useState } from 'react';

//import useStorage from '../customHooks/useStorage';
import {useContextProvider} from '../context/ContextProvider';

const PictureUploadForm = () => {
  //store file in a local state
  const {uploadedFile, uploadedFileSetter} = useContextProvider();
  const [error, setError] = useState(null);
  const fileTypesArray = ['image/png', 'image/jpeg'];

  console.log("PictureUploadForm worked");

  //use the event object. 'target' is the imported object. [0] is because we want the first element of the array and the only one in our case.
  //'e' stands for the event Object that we get automatically.
  const fileUploadEventListener = (e) => {
    let uploadedFilesArray = e.target.files[0];
    //'image/png', 'image/jpeg' are also some default values we can see in the uploadedFilesArray object.
    if (uploadedFilesArray && fileTypesArray.includes(uploadedFilesArray.type)) {
      uploadedFileSetter(uploadedFilesArray);
      setError('');
    } else {
      //reset the value.
      uploadedFileSetter(null);
      setError('Please select an image file (png or jpg)');
    }
  };
  
  return (
    <form>
      <label>
        <input type="file" onChange={fileUploadEventListener} />
      </label>
      <div className="output">
        { error && <div className="error">{ error }</div>}
      </div>
    </form>
  );
}

export default PictureUploadForm;