import { useState } from "react";

export function SearchBar({ onGetRequest }) {
    const [searchValue, setSearchValue] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!searchValue.trim()) return;

        onGetRequest(searchValue.trim());
        setSearchValue(""); //reset searchBar
    }

    return (
        <form className="py-2 search-bar" role="search" onSubmit={e => handleSubmit(e)} aria-label="search recipes">
            <div className="input-group">
                <input
                    type="search"
                    className="form-control"
                    placeholder="search recipes..."
                    aria-label="search recipes"
                    name="search"
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                    autoComplete="off" />
                <button type="submit" className="btn btn-custom-search" aria-label="start research">
                    ►
                </button>
            </div>
        </form>
    );
}
