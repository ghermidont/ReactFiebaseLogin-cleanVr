import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function SearchResults() {
    console.log("SearchResults() worked!");
    const [data, setData] = useState({ hits: [] });
    const [query, setQuery] = useState('react');

    useEffect(() => {
        console.log("SearchResults()/useEffect() worked!");
        let ignore = false;

        async function fetchData() {
            console.log("SearchResults()/fetchData() worked!");
            const result = await axios('https://hn.algolia.com/api/v1/search?query=' + query);
            if (!ignore) setData(result.data);
        }

        fetchData();
        return () => { ignore = true; }
    }, [query]);

    return (
        <>
            <input value={query} onChange={e => setQuery(e.target.value)} />
            <ul>
                {data.hits.map(item => (
                    <li key={item.objectID}>
                        <a href={item.url}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </>
    );
}