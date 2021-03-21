import React from 'react';
import IndividualArticlePh1 from "./IndividualArticle-Ph1";
//https://firebase.google.com/docs/firestore/data-model
//https://firebase.google.com/docs/firestore/query-data/index-overview
import useDataFromFirestore from '../../customHooks/useFirestore';

export default function ArticlesList() {
    //We pass the name of the collection we want to work with to the useDataFromFirestore hook
    const {docs} = useDataFromFirestore('articles');

    return(
        <>
            <div className="row mb-2">
                {docs && docs.map(doc => (
                    <div className="col-md-6" key={doc.id}>
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-primary">World</strong>
                                <h3 className="mb-0">{doc.title}</h3>
                                <div className="mb-1 text-muted">{doc.category}</div>
                                <p className="card-text mb-auto">{doc.description}</p>
                                <a href="/individualArticle" className="stretched-link">Continue reading</a>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <svg className="bd-placeholder-img" width="200" height="250"
                                     xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                                     preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595c"/>
                                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
}