import React from 'react';
import {useArticlesContext} from "../context/ArticlesContext";

export default function Article() {
    console.log("Article component worked!");

    const {articleContent} = useArticlesContext();

    console.log("this is the articleContent");
    console.log(articleContent);

    //Get the slug from the current window URL
    const currentSlug = window.location.pathname;

    //Selecting only the slug article number
    const urlSlugValue = currentSlug.substr(-1);

    console.log(urlSlugValue);

    let selectedArticle = "";

    if(articleContent) {
        //Filter the articles object and select the article who's slug corresponds to the current window slug
    selectedArticle = articleContent.filter(function (article) {
        return article.slug == urlSlugValue;
    });
}
    return(
        //Display the content of the single article who's slug was identical to the window URL slug
        <>
            {selectedArticle && selectedArticle.map(doc =>(<div>{doc.content}</div>))}
        </>
    );
}

//set selected article in the context or read the slug value from the address line
//surf through the array of objects and find the object