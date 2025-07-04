import { useState } from "react";




export function SearchBar({ onGetRequest }) {
    const [searchValue, setSearchValue] = useState("");

    function handleSubmit(e) {
        e.preventDefault(); //evita il reload della pagina al submit
        if (!searchValue.trim()) return;
        //chiamata fetch
        onGetRequest(searchValue.trim());
        setSearchValue(""); //reset searchBar
    }

    return (
        <form className="py-2 search-bar" role="search" onSubmit={e => handleSubmit(e)} aria-label="Cerca ricette">
            <div className="input-group">
                <input
                    type="search"
                    className="form-control"
                    placeholder="Cerca ricetta..."
                    aria-label="Cerca ricetta"
                    name="search"
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                    autoComplete="off" />
                <button type="submit" className="btn btn-custom-search" aria-label="Avvia ricerca">
                    ►
                </button>
            </div>
        </form>
    );
}
