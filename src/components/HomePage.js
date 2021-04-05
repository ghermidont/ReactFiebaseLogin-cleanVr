import React from 'react';
import ArticlesList from "./Articles/ArticlesList";
import LatestStreamsSwiper from "./LatestStreamsSwiper";

export default function HomePage() {

    console.log("HomePagePh1 worked.");

    return(
        <div>
            <h1>HomePage</h1>
            <div>Latest articles</div>
            <ArticlesList />
            <div>Button link to articles page</div>
            <LatestStreamsSwiper />
            <div>Button to other stream videos</div>




        </div>
    );
}