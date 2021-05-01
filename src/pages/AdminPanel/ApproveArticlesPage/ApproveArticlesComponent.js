import React, {useEffect} from 'react';
import {useDataFromFirestore} from "../../../customHooks/useFirestore";
import {useArticlesContext} from "../../../context/ArticlesContext";
import {Link} from "react-router-dom";
import {functions} from "../../../fireBase";

function ApproveArticlesComponent() {
    console.log("ApproveArticlesComponent");
    const {setGeneralArticlesExtractArr} = useArticlesContext();
    const {docsFromHook} = useDataFromFirestore('articles');
    let pendingArticlesArr;

    useEffect(() => {
        setGeneralArticlesExtractArr(docsFromHook);
    },[docsFromHook, setGeneralArticlesExtractArr]);

    if(docsFromHook) {
        //Filter the articles object and select the article who's slug corresponds to the current window slug
        pendingArticlesArr = docsFromHook.filter(function (article) {
           return article.id.contains("pending");
        });
    }

    console.log("Pending articles from ApproveArticlesComponent");
    console.log(pendingArticlesArr);

    const cloudFunctTrigger = (id) => {
        const addData = functions.httpsCallable('approveArticle');
        addData({
            articleId: id
        }).then().catch(err=>console.log("Improvement process went wrong "+err));
    }

    return (
        <ul>
            {pendingArticlesArr.map(doc => (
                <>
                    <li>
                        <div>doc.title</div>
                        <div>doc.description||""</div>
                        <img src={doc.imageURL} alt="some graphics"/>
                       <Link to="/IndividualArticlePage">See full article>>></Link>
                        <div>
                            <button onClick={()=>cloudFunctTrigger(doc.id)}>Approve article</button>
                            <button onClick={()=>console.log("Article rejected.")}>Reject article</button>
                        </div>
                    </li>
                </>
            ))}
        </ul>
    );
}

export default ApproveArticlesComponent;

//If the cloud function will not work, try this algorithm:
// const firestore = firebase.firestore();
// // get the data from 'name@xxx.com'
// firestore.collection("users").doc("name@xxx.com").get().then(function (doc) {
//     if (doc && doc.exists) {
//         var data = doc.data();
//         // saves the data to 'name'
//         firestore.collection("users").doc("name").set(data).then({
//             // deletes the old document
//             firestore.collection("users").doc("name@xxx.com").delete();
//         });
//     }
// });