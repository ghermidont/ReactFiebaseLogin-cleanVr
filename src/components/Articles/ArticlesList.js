import React from 'react';
import IndividualArticle from "./IndividualArticle";
//https://firebase.google.com/docs/firestore/data-model
//https://firebase.google.com/docs/firestore/query-data/index-overview

export default function ArticlesList() {
    return(
        <>
            <div className="row mb-2">
                <IndividualArticle />
            </div>

        </>
    );
}