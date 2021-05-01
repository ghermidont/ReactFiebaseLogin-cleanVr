//https://firebase.google.com/docs/firestore/data-model
//https://firebase.google.com/docs/firestore/query-data/index-overview
//https://www.pluralsight.com/guides/how-to-implement-a-read-more-link-in-react
import React, {useEffect} from 'react';
import {useDataFromFirestore} from '../customHooks/useFirestore';
import {Link} from "react-router-dom";
import {useArticlesContext} from "../context/ArticlesContext";

export default function ShortArticlesList() {
    console.log("ShortArticlesList worked");
    const {setArticleContent} = useArticlesContext();
    //We pass the name of the collection we want to work with to the useDataFromFirestore hook
    const {docsFromHook} = useDataFromFirestore('articles');

    //Put out the articles objects array to the context.
    useEffect(() => {
        docsFromHook&&setArticleContent(docsFromHook);
    }, [docsFromHook, setArticleContent] );

    console.log("Articles extracted from ShortArticlesList component.");
    console.log(docsFromHook);

    return(
        <>
            {docsFromHook && docsFromHook.slice(0, 4).map(doc => (
                 <article className="article" key={doc.id}>
                        <Link to={`/article/${doc.slug}`}>
                            <a className="article__link">
                                <img src={doc.imageURL} alt="" className="article__image"/>
                                    <div className="article__content">
                                        <img className="article__logo" src="" alt=""/>
                                            <div className="article__box-text">
                                                <p className="article__text">
                                                    {doc.description}
                                                </p>
                                            </div>
                                    </div>
                                    <div className="article__footer">
                                        <img src="" alt=""/>
                                    </div>
                            </a>
                         </Link>
                    </article>
            ))}
        </>

   );

}

            //         <div className="col-md-6" key={doc.id}>
            //             <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            //                 <div className="col p-4 d-flex flex-column position-static">
            //                     <strong className="d-inline-block mb-2 text-primary">World</strong>
            //                     <h3 className="mb-0">{doc.title}</h3>
            //                     <div className="mb-1 text-muted">{doc.category}</div>
            //                     <p className="card-text mb-auto">{doc.description}</p>
            //
            //                     <Link to={`/article/${doc.slug}`} onClick={()=>console.log('clicked')}>Continue reading...</Link>
            //                 </div>
            //                 <div className="col-auto d-none d-lg-block">
            //                     <img src={doc.imageURL} alt="article" style={{ width: "12em", height: "8em" }}/>
            //                 </div>
            //             </div>
            //         </div>
            //     ))}
            // </div>





