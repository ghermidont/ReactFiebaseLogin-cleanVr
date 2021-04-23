import React, { useEffect, useState} from 'react';
import SearchBar from './SearchBar';
import Item from './Item';
import {useArticlesContext} from "../../context/ArticlesContext";
import Counter from "./Counter";
import Grid from '@material-ui/core/Grid'

const SearchBarDiv = ({setShowSearch}) => {
    const [dataFromServer, setDataFromServer] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearchBarInput] = useState('');
    const [serverDataSearchResultArr, setServerDataSearchResultArr] = useState([]);

    const {articleContent} = useArticlesContext();
    console.log("SearchBarDiv articleContent content:");
    console.log(articleContent);

    useEffect(() => {
        setDataFromServer(articleContent);
        if(articleContent)setIsLoading(false);
    }, []);

    // Search And Highlight Function
    const handleInput = event => {
        let searchBarInputText = event.target.value;
        setSearchBarInput(searchBarInputText);
        const newArr = dataFromServer
            .filter(
                item =>
                    item.title.toLowerCase().includes(searchBarInputText.toLowerCase()) ||
                    item.content.toLowerCase().includes(searchBarInputText.toLowerCase())
            )
            .map(item => {
                let newTitle = item.title.replace(
                    new RegExp(searchBarInputText, 'gi'),
                    match =>
                        `<mark style="background: #2769AA; color: white;">${match}</mark>`
                )
                let newContent = item.content.replace(
                    new RegExp(searchBarInputText, 'gi'),
                    match =>
                        `<mark style="background: #2769AA; color: white;">${match}</mark>`
                )
                return {
                    ...item,
                    title: newTitle,
                    body: newContent,
                }
            });
        setServerDataSearchResultArr(newArr);
    }

    // Return Statement
    return (
         <Grid container>
                <Grid container item xs={12} alignItems="center">
                    <Grid item xs={10}>
                         <SearchBar onInput={(e) => handleInput(e)} />
                    </Grid>
                    <Grid item xs={2}>
                        <Counter
                            result={serverDataSearchResultArr.length > 0 && serverDataSearchResultArr.length < dataFromServer.length
                                    ? serverDataSearchResultArr.length
                                    : null}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : search.length > 0 ? (
                        serverDataSearchResultArr.map(post => (
                            <Item
                                key = {post.id}
                                slug = {post.slug}
                                title = {post.title}
                                content = {post.content}

                            />
                        ))
                    ) : ''}
                </Grid>
        </Grid>
    );
};

export default SearchBarDiv;




