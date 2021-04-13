import React from 'react';

function SearchForm(props) {
    return (
        <form className="search__form">
            <input type="text" className="search__input"/>
            <button className="search__btn" type="submit">Go!</button>
        </form>
    );
}

export default SearchForm;