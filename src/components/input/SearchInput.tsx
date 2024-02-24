'use client'

import React, { useState, useEffect } from 'react';


interface SearchInputProps {
    onSearch: (searchText: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
    const [searchText, setSearchText] = useState<string>('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    };

    useEffect(() => onSearch(searchText), [searchText, onSearch]);

    return (
        <div className="md:w-2/4 md:pr-0 pr-4">
            <div className="relative hidden md:flex">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3">
                    <svg
                        className="w-4 h-4 text-gray-800"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </div>
                <input
                    type="text" value={searchText} onChange={handleSearchChange}
                    id="default-search"
                    className="block p-3 ps-10 text-sm border w-2/3 placeholder:text-gray-300 placeholder:text-sm  border-gray-200 rounded-md focus:ring-brand-primary focus:border-brand-primary focus:outline-none focus:ring-0"
                    placeholder="살까말까 고민된다면 검색해보세요!"
                    required
                />
            </div>
            <div className='flex md:hidden w-4 text-gray-500 cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                    <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                </svg>
            </div>
        </div>
    );
};

export default SearchInput;
