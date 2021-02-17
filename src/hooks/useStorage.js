import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore } from '../fireBase';

const useStorage = (file) => {
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  //This function will handle all the file upload.
  useEffect(() => {
    // Get the references to where the file should be saved.
    //We are not uploading any file yet we are just creating a reference of the file tha is to be uploaded and the name of it. now it is stored in the default reference bucket of Firestore.
    const storageRef = projectStorage.ref(file.name);
    //.collection method is used when we want to reference a specific collection from the database. If this collection does not exist firebase will create it.
    const collectionRef = projectFirestore.collection('User images');
   
    //This storage is asynchronous so we link it to the 'state_change' event. 

    storageRef.put(file).on('state_changed', (err) => {
      setError(err);
    }, async () => {
      //This is happening after the file is uploaded. It is because of the await and the getDownloadURL() function that is assigned only the finished download.
      //The url of the image we just uploaded.
      const urlInnerScope = await storageRef.getDownloadURL();
      await collectionRef.add({ urlInnerScope, createdAt });
      //The url inside of this function does not overwrite the url from the top of the code because the one on top is outside the scope of this function.
      setUrl(urlInnerScope);
    });
    //This function will fire every time the [file] dependency changes.
  }, [file]);

  return { url, error };
}

export default useStorage;