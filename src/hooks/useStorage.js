import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore } from '../fireBase';
import {useAuthContext} from '../context/AuthProvider';

const useStorage = (file) => {
  const [error, setError] = useState(null);
  //Here we will tore the url we get from the storage after the file has fully uploaded.
  const [url, setUrl] = useState(null);
  const {auth} = useAuthContext();

  //This function will handle all the file upload and will run every time the user uploads a file thus the file dependency changes.
  useEffect(() => {
    //reference to the storage bucket where a reference to teh file has been created.
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('user-images');
    //put() puts the file in the reference defined in the storageRef.
    storageRef.child('images/' + file.name).put(file).on('state_changed', (err) => {
      setError(err);
    }, async () => {
      //gets the url of the upload file.
      const innerScopeUrl = await storageRef.getDownloadURL();
      //Passing an object we want to add to our collection. Because the names of the parameter and the value we assign to it is the same we can write just innerScopeUrl.
      //Add here the users id.
      await collectionRef.add({ innerScopeUrl: innerScopeUrl, userid: auth.currentUser });
      setUrl(innerScopeUrl);
    });
    
  }, [file]);

  return { url, error };
}

export default useStorage;