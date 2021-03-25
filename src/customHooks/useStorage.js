import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore } from '../fireBase';
import {useAuthContext} from '../context/ContextProvider';

const useStorage = (file) => {
  console.log("useStorage() custom hook worked!");
  const [error, setError] = useState(null);
  //Here we will tore the url we get from the storage after the file has fully uploaded.
  const [url, setUrl] = useState(null);
  const {setUserPictureUrl} = useAuthContext();

  //This function will handle all the file upload and will run every time the user uploads a file thus the file dependency changes.
  useEffect(() => {
    console.log("useStorage custom hook/useEffect() worked!");
    //reference to the storage bucket where a reference to the file has been created.
    const storageRef = projectStorage.ref();//file.name
    const collectionRef = projectFirestore.collection('userInfo');
    //put() puts the file in the reference defined in the storageRef.
    storageRef.child('images/' + file.name).put(file).on('state_changed', (err) => {
      setError(err);
    }, async () => {
      //gets the url of the upload file.
      const innerScopeUrl = await storageRef.getDownloadURL();
      //Passing an object we want to add to our collection. Because the names of the parameter and the value we assign to it is the same we can write just innerScopeUrl.
      //Add here the users id.
      await collectionRef.add({
        name: "ion",
        lastname: "chiron"
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
      setUrl(innerScopeUrl);
      setUserPictureUrl(innerScopeUrl);
    });

  }, [file]);

  return { url, error };
}

export default useStorage;