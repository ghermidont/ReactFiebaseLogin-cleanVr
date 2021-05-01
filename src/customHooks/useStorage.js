import { useState, useEffect } from 'react';
import {projectStorage, timestamp} from '../fireBase';

const useStorage = (file, user, folder) => {
  console.log("useStorage() custom hook worked!");

  const [error, setError] = useState(null);
  //Here we will tore the url we get from the storage after the file has fully uploaded.
  const [userUploadedPictureUrl, setUserUploadedPictureUrl] = useState(null);

  //This function will handle all the file upload and will run every time the user uploads a file thus the file dependency changes.
  useEffect(() => {
    console.log("useStorage custom hook useEffect() worked!");
    //reference to the storage bucket where a reference to the file has been created.
    const storageRef = projectStorage.ref().child(folder).child(`${user.uid}-${timestamp()}.jpg`);

    //Now do not add to the collection here the url. will add it with francesco functions in the Step1.
    //const collectionRef = projectFirestore.collection('userInfo');

    //put() puts the file in the reference defined in the storageRef.
    storageRef.put(file).on('state_changed', (err) => {
      setError(err);
    }, async () => {
      //gets the url of the upload file.
      const innerScopeUrl = await storageRef.getDownloadURL();
      setUserUploadedPictureUrl(innerScopeUrl);
      });
  }, [file, user.uid]);

  return { userUploadedPictureUrl, error };
}

export default useStorage;