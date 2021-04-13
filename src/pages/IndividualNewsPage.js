import React from 'react';
import {useNewsContext} from "../context/NewsContext";
import OtherNewsGrid from "../components/OtherNewsGrid";

export default function IndividualNewsPage() {
    console.log("News component worked");

    const {newsContent} = useNewsContext();

    console.log(newsContent);

    const currentSlug = window.location.pathname;
    const urlSlugValue = currentSlug.substr(-1);
    console.log(urlSlugValue);
    let selectedNews = "";

    if(newsContent) {
        selectedNews = newsContent.filter(function (doc) {
            return doc.slug == urlSlugValue;
        });
    }
    return(
        <>
            {selectedNews && selectedNews.map(doc =>(<div>{doc.content}</div>))}
            <OtherNewsGrid />
        </>
    );
}

//set selected article in the context or read the slug value from the address line
//surf through the array of objects and find the object