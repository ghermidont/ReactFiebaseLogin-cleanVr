import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore } from '../fireBase';
import {useAuthContext} from '../context/AuthProvider';

const useStorage = (file) => {
    const [error, setError] = useState(null);
    //Here we will tore the url we get from the storage after the file has fully uploaded.
    const [url, setUrl] = useState(null);
    const {auth, setUserPictureUrl} = useAuthContext();

    const storageRef = projectStorage.ref();//file.name


    function addPictures(){
        //put() puts the file in the reference defined in the storageRef.
        storageRef.child('images/' + file.name).put(file).on('state_changed', (err) => {
            setError(err);
        }, async () => {
            //gets the url of the upload file.
            const innerScopeUrl = await storageRef.getDownloadURL();
            //Passing an object we want to add to our collection. Because the names of the parameter and the value we assign to it is the same we can write just innerScopeUrl.
            setUrl(innerScopeUrl);
            setUserPictureUrl(innerScopeUrl);
        });
    }

    //This function will handle all the file upload and will run every time the user uploads a file thus the file dependency changes.
    useEffect(() => {
        addPictures();
    }, [file]);

    return { url, error };
}

export default useStorage;



/*###FIRESTORE###*/
import { useState, useEffect } from 'react';
import { projectFirestore } from '../fireBase';




async function addUserPoints (){
    const collectionRef = projectFirestore.collection(collection);
    await collectionRef.add({  first: "Alan",
        middle: "Mathison",
        last: "Turing",
        born: 1912
    })
        .then(() => {
            console.log("Data added successfully");
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}




//Use this with articles
const getDataFromFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    //this useEffect interacts with the database every time the db changes (the collection).
    useEffect(() => {
        //this method unsubscribes from the collection every time we unmount an element. Like in case when we are not showing an element anymore, like an images grid.
        const unsubFromCollection = projectFirestore.collection(collection)
            .orderBy('createdAt')
            //onSnapshot rune every time a change in the db occurs. A real time monitor.
            .onSnapshot(snap => {
                //the array where all the data from the db will be stored.
                let documents = [];
                //Now we circle through the documents of the database that are there at this specific moment.
                snap.forEach(doc => {
                    documents.push({...doc.data()});
                });
                setDocs(documents);
            });

        return () => unsubFromCollection();
        // this is a cleanup function that react will run when
        // a component using the hook unmounts
    }, [collection]);

    return { docs };
}

//export default useFirestore;