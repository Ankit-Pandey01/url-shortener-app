
import React, { useState, useContext } from 'react';
import { UrlContext } from '../context/UrlContext';
import { TextField, Button, Typography } from '@mui/material';

function UrlShortenerForm() {
    const { addUrl } = useContext(UrlContext);
    const [longUrl, setLongUrl] = useState('');
    const [shortcode, setShortcode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUrl = {
            shortcode: shortcode || Math.random().toString(36).substr(2, 5),
            longUrl,
            createdAt: new Date().toLocaleString(),
            validity: 60,
            clicks: []
        };
        addUrl(newUrl);
        setLongUrl('');
        setShortcode('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
            <Typography variant="h5" gutterBottom>Shorten Your URL</Typography>
            <TextField
                label="Long URL"
                value={longUrl}
                onChange={(e) => setLongUrl(e.target.value)}
                fullWidth
                required
                margin="normal"
            />
            <TextField
                label="Custom Shortcode (Optional)"
                value={shortcode}
                onChange={(e) => setShortcode(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">Shorten URL</Button>
        </form>
    );
}

export default UrlShortenerForm;
