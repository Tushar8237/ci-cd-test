import React, { useEffect, useState, useCallback } from "react";

const debounce = (func, delay) => {
    let timer;
    return (...args) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args);
        }, delay);
    };
};

function Home() {
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

    // Memoizing the debounce function using useCallback
    const handleSearch = useCallback(
        debounce((term) => {
            setDebouncedTerm(term);
        }, 500),
        []
    );

    useEffect(() => {
        handleSearch(searchTerm);
    }, [searchTerm, handleSearch]);
    
    return (
        <div>
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <p>Debounced Term: {debouncedTerm}</p>
        </div>
    );
}

export default Home;