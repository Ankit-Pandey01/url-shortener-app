
import React, { createContext, useState, useEffect } from 'react';

export const UrlContext = createContext();

export function UrlProvider({ children }) {
    const [urls, setUrls] = useState(() => {
        return JSON.parse(localStorage.getItem('urls')) || [];
    });

    useEffect(() => {
        localStorage.setItem('urls', JSON.stringify(urls));
    }, [urls]);

    const addUrl = (urlEntry) => {
        setUrls((prev) => [...prev, urlEntry]);
    };

    return (
        <UrlContext.Provider value={{ urls, addUrl }}>
            {children}
        </UrlContext.Provider>
    );
}
