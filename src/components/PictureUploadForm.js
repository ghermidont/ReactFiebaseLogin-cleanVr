import React, { useState } from 'react';
//import useStorage from '../hooks/useStorage';
const PictureUploadForm = () => {
  //store file in a local state
  const [uploadedFile, uploadedFileSetter] = useState(null);
  const [error, setError] = useState(null);
  const fileTypesArray = ['image/png', 'image/jpeg'];
  

  
  //use the event object. 'target' is the import object. [0] is because we want the first element of the array and the only one in our case. 
  const fileUploadEventListener = (e) => {
    let uploadedFilesArray = e.target.files[0];
    //'image/png', 'image/jpeg' are also some default values we can see in the event object.
    if (uploadedFilesArray && fileTypesArray.includes(uploadedFilesArray.type)) {
      uploadedFileSetter(uploadedFilesArray);
      setError('');
     
    } else {
      uploadedFileSetter(null);
      setError('Please select an image file (png or jpg)');
    }
  };
  
  return (
    <form>
      <label>
        <input type="file" onChange={fileUploadEventListener } />
      </label>
      <div className="output">
        { error && <div className="error">{ error }</div>}
      </div>
    </form>
  );
}

export default PictureUploadForm;