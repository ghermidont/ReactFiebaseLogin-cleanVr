import { useState, useEffect } from 'react';
import { projectFirestore } from '../fireBase';

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  //this useEffect interacts with the database every time the db changes (the collection).
  useEffect(() => {
    //this method unsubscribes from the collection every time we unmount an element. Like in case when we are not showing an element anymore, like an images grid.
    const unsubFromCollection = projectFirestore.collection(collection)
      .orderBy('createdAt', 'desc')
      //onSnapshot rune every time a change in the db occures. A real time monitor.
      .onSnapshot(snap => {
        //the array where all the data from the db will be stored.
        let documents = [];
        //Now we circle through the documents of the database that are there at this specific moment.
        snap.forEach(doc => {
          documents.push({...doc.data(), id: doc.id});
        });
        setDocs(documents);
      });

    return () => unsubFromCollection();
    // this is a cleanup function that react will run when
    // a component using the hook unmounts
  }, [collection]);

  return { docs };
}

export default useFirestore;