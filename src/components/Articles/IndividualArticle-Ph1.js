import React from 'react';
import {useArticlesContext} from "../../context/ContextProvider";

export default function Article() {
    const {articleContent} = useArticlesContext();
    console.log("this is the articleContent");
    console.log(articleContent);
    const currentSlug = window.location.pathname;
    const urlSlugValue = currentSlug.substr(-1);
    console.log(urlSlugValue);

    const selectedArticle = articleContent.filter(function(hero) {
        return hero.slug == urlSlugValue;
    });

    return(
        <>
            {selectedArticle.map(doc =>(<div>{doc.content}</div>))}
        </>
    );
}

//set selected article in the context or read the slug value from the address line
//surf through the array of objects and find the object