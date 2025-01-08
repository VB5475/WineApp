// SearchBar.js
import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
        <div className='max-w-md mx-auto'>
            <div className="relative flex items-center w-full h-12 rounded-lg shadow-md focus-within:shadow-lg bg-white overflow-hidden border-[0.5px] border-blue-200 ">
                <div className="grid place-items-center h-full w-12 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                <input
                    className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                    type="text"
                    id="search"
                    placeholder="Search Wine"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
        </div>
    );
};

export default SearchBar;
