import React, { useEffect, useReducer } from 'react';
import SearchBar from './SearchBar';
import Counter from './Counter';
import Item from './Item';

import Grid from '@material-ui/core/Grid'
import {useArticlesContext} from "../../context/ArticlesContext";

// Initial State And Reducer Function
const initialState = {
    isLoading: true,
    data: [],
    search: '',
    searchData: [],
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_DATA':
            return {
                ...state,
                data: action.payload,
                isLoading: false,
            }
        case 'SEARCH_INPUT':
            return { ...state, search: action.payload }
        case 'SEARCH_DATA':
            return { ...state, searchData: action.payload }
        default:
            throw new Error()
    }
}

// The Component
const SearchBarDiv = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const {articleContent} = useArticlesContext();
    console.log("SearchBarDiv articleContent content:");
    console.log(articleContent);

    useEffect(() => {
        dispatch({ type: 'SET_DATA', payload: articleContent });
    }, [])

    // Search And Highlight Function
    const handleInput = e => {
        let str = e.target.value
        dispatch({ type: 'SEARCH_INPUT', payload: str })
        const newArr = state.data
            .filter(
                item =>
                    item.title.toLowerCase().includes(str.toLowerCase()) ||
                    item.content.toLowerCase().includes(str.toLowerCase())
            )
            .map(item => {
                let newTitle = item.title.replace(
                    new RegExp(str, 'gi'),
                    match =>
                        `<mark style="background: #2769AA; color: white;">${match}</mark>`
                )
                let newBody = item.content.replace(
                    new RegExp(str, 'gi'),
                    match =>
                        `<mark style="background: #2769AA; color: white;">${match}</mark>`
                )
                return {
                    ...item,
                    title: newTitle,
                    body: newBody,
                }
            })

        dispatch({ type: 'SEARCH_DATA', payload: newArr })
    }

    // Return Statement
    return (
        <Grid container>
            <Grid container item xs={12} alignItems="center">
                <Grid item xs={10}>
                    <SearchBar onInput={e => handleInput(e)} />
                </Grid>
                <Grid item xs={2}>
                    <Counter
                        result={
                            state.searchData.length > 0 &&
                            state.searchData.length < state.data.length
                                ? state.searchData.length
                                : null
                        }
                    />
                </Grid>
            </Grid>
            <Grid item xs={12}>
                {state.isLoading ? (
                    <p>Loading...</p>
                ) : state.search.length > 0 ? (
                    state.searchData.map(post => (
                        <Item
                            key={post.id}
                            title={post.title}
                            content={post.content}
                        />
                    ))
                ) : (
                    state.data.map(post => (
                        <Item
                            key={post.id}
                            title={post.title}
                            content={post.content}
                        />
                    ))
                )}
            </Grid>
        </Grid>
    )
}

export default SearchBarDiv;
