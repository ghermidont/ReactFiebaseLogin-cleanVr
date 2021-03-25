//https://firebase.google.com/docs/firestore/data-model
//https://firebase.google.com/docs/firestore/query-data/index-overview
//https://www.pluralsight.com/guides/how-to-implement-a-read-more-link-in-react
import React, {useContext} from 'react';
import {useDataFromFirestore} from '../../customHooks/useFirestore';
import {useArticlesContext} from "../../context/ContextProvider";

export default function ArticlesList() {
    //We pass the name of the collection we want to work with to the useDataFromFirestore hook
    const {docs} = useDataFromFirestore('articles');

    const{setGridArticleId} = useArticlesContext();

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
                                <button type="button" className="btn btn-primary" onClick={()=> {let attributeId = Element.attributeName('key'); setGridArticleId(attributeId);
                                    console.log("this is the chosen article id: " + attributeId)} }>Get element key</button>
                                <a href="/individualArticle" onClick={()=> {let attributeId = Element.attributeName('key'); setGridArticleId(attributeId);
                                    console.log("this is the chosen article id: " + attributeId)} } className="stretched-link">Continue reading</a>
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


    // <Link to='/characters'>Characters</Link>
    // {/ <a href="#">Characters</a> /}
