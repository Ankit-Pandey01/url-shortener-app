
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UrlProvider } from './context/UrlContext';
import ShortenPage from './pages/ShortenPage';
import StatisticsPage from './pages/StatisticsPage';

function App() {
    return (
        <UrlProvider>
            <Router>
                <Routes>
                    <Route path='/' element={<ShortenPage />} />
                    <Route path='/statistics' element={<StatisticsPage />} />
                </Routes>
            </Router>
        </UrlProvider>
    );
}

export default App;
