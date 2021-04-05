//https://firebase.google.com/docs/firestore/data-model
//https://firebase.google.com/docs/firestore/query-data/index-overview
//https://www.pluralsight.com/guides/how-to-implement-a-read-more-link-in-react
import React from 'react';
import {useDataFromFirestore} from '../../customHooks/useFirestore';
import {Link} from "react-router-dom";
import {useArticlesContext} from "../../context/ContextProvider";

export default function ArticlesList() {
    const {setArticleContent} = useArticlesContext();

    //We pass the name of the collection we want to work with to the useDataFromFirestore hook
    const {docs} = useDataFromFirestore('articles');
    //Put out the articles objects array to the context.
    setArticleContent(docs);

    docs.map(doc => console.log(doc));

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

                                <Link to={`/article/${doc.slug}`} onClick={()=>console.log('clicked')}>Continue reading...</Link>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <img src={doc.imageURL} alt="article" style={{ width: "12em", height: "8em" }}/>
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
