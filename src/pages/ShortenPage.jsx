
import React from 'react';
import UrlShortenerForm from '../components/UrlShortenerForm';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function ShortenPage() {
    return (
        <div style={{ padding: '20px' }}>
            <UrlShortenerForm />
            <Button variant='outlined' component={Link} to='/statistics' style={{ marginTop: '20px' }}>
                View Statistics
            </Button>
        </div>
    );
}

export default ShortenPage;
