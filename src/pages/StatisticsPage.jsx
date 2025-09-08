
import React from 'react';
import UrlStatistics from '../components/UrlStatistics';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function StatisticsPage() {
    return (
        <div style={{ padding: '20px' }}>
            <UrlStatistics />
            <Button variant='outlined' component={Link} to='/' style={{ marginTop: '20px' }}>
                Shorten More URLs
            </Button>
        </div>
    );
}

export default StatisticsPage;
