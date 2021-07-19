import React from 'react'
import './SearchForm.css'

export const SearchForm = ({ searchText, setSearchText, filterBySearchText }) => {
    return (
        <form onSubmit={filterBySearchText} className="search-form">
            <div className="search-form__input">
                <input placeholder="Поиск" value={searchText} onInput={e => setSearchText(e.target.value)}/>
            </div>
            <button className="search-form__button" type="submit">Найти</button>
        </form>
    )
}