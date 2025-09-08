
import React, { useContext } from 'react';
import { UrlContext } from '../context/UrlContext';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

function UrlStatistics() {
    const { urls } = useContext(UrlContext);

    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h5" gutterBottom>
                URL Shortener Statistics
            </Typography>
            <List>
                {urls.map((url, index) => (
                    <ListItem key={index} divider>
                        <ListItemText
                            primary={`Shortcode: ${url.shortcode} → ${url.longUrl}`}
                            secondary={`Created At: ${url.createdAt}, Validity: ${url.validity} minutes, Clicks: ${url.clicks.length}`}
                        />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default UrlStatistics;
