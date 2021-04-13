import React, {useState, useContext, useEffect} from "react";

const articlesContext = React.createContext();

export function useArticlesContext(){
    return useContext(articlesContext);
}

/*########################## Articles Context Provider ##########################*/
export function ArticlesContextProvider({ children }) {
    console.log("ArticlesContextProvider() worked!");

    const [contextDocs, setContextDocs] = useState('');
    const [gridArticleId, setGridArticleId] = useState('');
    const [articleContent, setArticleContent] = useState(null);


    const value = {
        contextDocs,
        setContextDocs,
        gridArticleId,
        setGridArticleId,
        articleContent,
        setArticleContent

    }

    return (
        <articlesContext.Provider value={value}>
            {children}
        </articlesContext.Provider>
    );
}

//Useful syntax
// const addArticle = (article, userId) => {
//   projectFirestore.collection('users').doc(userId).collection('articles').add(article);
//   console.log("addArticle() worked!");
//   //Adds a new document to the articles collection.
// };

// const getAllArticles = () => {
//   //let articlesDB = projectFirestore.collection('articles')//.orderBy('createdAt', 'desc').limit(3);
//   console.log("getAllArticles() worked!");
//   return projectFirestore.collection('articles').get().then((querySnapshot)=>
//   {
//     querySnapshot.forEach((doc)=>{
//       console.log(doc.data().category);
//     });
//   });
//The query will retrieve up to 10 articles from the articles collection. After we declared this query, we pass it
// to the getDocumentsInQuery() method which is responsible for loading and rendering the data.

// };

// const getAnArticle = (id, userId) => {
//   projectFirestore.collection('users').doc(userId).collection('articles').doc(id).get().then(() => console.log('article retrieved'));
//   //After you've implemented this method, you'll be able to view pages for each restaurant. Just click on a restaurant in the list and you should see the restaurant's details page.
//   console.log("getAnArticle() worked!");
// };