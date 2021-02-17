import React, { useState } from 'react';

const PictureUploadForm = () => {
  //store file in a local state
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  //use the event object. 'target' is the import object. [0] is because we want the first element of the array and the only one in our case. Some uploaders allow to select multiple files.
  const handleChange = (e) => {
    let selected = e.target.files[0];
    //if the is a file we assign it to the local state 'file'.
    //'type' is a property we access of the event object and we compare it to the types we defined in the types array const. 'image/png', 'image/jpeg' are also some default values we can see in the event object.
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={handleChange} />
        <span>+</span>
      </label>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>File Uploaded!</div> }
      </div>
    </form>
  );
}

export default PictureUploadForm;