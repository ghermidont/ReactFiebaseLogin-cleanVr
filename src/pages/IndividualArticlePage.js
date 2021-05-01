import React from 'react';
import {useArticlesContext} from "../context/ArticlesContext";
import { useTranslation } from 'react-i18next';
import {functions} from "../fireBase";
import {Link} from "@material-ui/core";
import {useAuthContext} from "../context/AuthContext";

export default function Article() {
    const { t, i18n } = useTranslation();
    const {articleContent} = useArticlesContext();
    console.log("IndividualArticlePage worked!");

    console.log("this is the articleContent");
    console.log(articleContent);

    const {currentUser} = useAuthContext;

    //Get the slug from the current window URL
    const currentSlug = window.location.pathname;

    //Selecting only the slug article number
    const urlSlugValue = currentSlug.substr(-1);

    console.log(urlSlugValue);

    let selectedArticle;

    if(articleContent) {
        //Filter the articles object and select the article who's slug corresponds to the current window slug
        selectedArticle = articleContent.filter(function (article) {
            return article.slug == urlSlugValue;
        });
    }

    const deleteArticleCFtrigger = () => {
        if (selectedArticle) {
            const addData = functions.httpsCallable('deleteArticle');

            addData({
                articleId: articleContent.id
            })
                .then((result) => {console.log("Article deleted.");})
                .catch((error) => {
                    console.log(error.code + " " + error.message + "" + error.details);
               }
            );
        }
    }

    return(
        //Display the content of the single article who's slug was identical to the window URL slug
        <div>
            {selectedArticle && selectedArticle.map(doc =>(
                <div>
                    <img src={doc.imageURL} alt=""/>

                    <div>{doc.title}</div>
                    <div>{doc.content}</div>
                </div>
            ))}
            <button onClick={deleteArticleCFtrigger}>Delete Article</button>
            <Link to="/EditArticlesForm">
                <button>Edit Article</button>
            </Link>
            {currentUser.uid===selectedArticle.autorId&&<Link to="/EditArticlesPage">Edit article</Link>}
        </div>
    );
}

