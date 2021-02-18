import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore } from '../fireBase';

const useStorage = (file) => {
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  //This function will handle all the file upload.
  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('user-images');
    storageRef.child('images/' + file.name).put(file).on('state_changed', (err) => {
      setError(err);
    }, async () => {
      const innerScopeUrl = await storageRef.getDownloadURL();
      await collectionRef.add({ innerScopeUrl });
      setUrl(innerScopeUrl);
    });
    
  }, [file]);

  return { url, error };
}

export default useStorage;