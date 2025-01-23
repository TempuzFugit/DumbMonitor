require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 3000;
const websites = (process.env.WEBSITES || '').split(',').filter(Boolean);
const checkInterval = parseInt(process.env.CHECK_INTERVAL) || 60000;
const uiRefreshInterval = parseInt(process.env.UI_REFRESH_INTERVAL) || 5000;
const theme = (process.env.THEME || 'light').toLowerCase();

// Store website statuses
const websiteStatuses = new Map();

// Function to check website status
async function checkWebsite(url) {
    try {
        const startTime = Date.now();
        const response = await fetch(url);
        const responseTime = Date.now() - startTime;
        return {
            status: response.ok ? 'up' : 'down',
            statusCode: response.status,
            responseTime,
            lastChecked: new Date().toISOString(),
            error: null
        };
    } catch (error) {
        return {
            status: 'down',
            statusCode: null,
            responseTime: null,
            lastChecked: new Date().toISOString(),
            error: error.message
        };
    }
}

// Check all websites
async function checkAllWebsites() {
    for (const website of websites) {
        const status = await checkWebsite(website);
        websiteStatuses.set(website, status);
    }
}

// Start periodic checking
setInterval(checkAllWebsites, checkInterval);
checkAllWebsites(); // Initial check

// Serve static files
app.use(express.static('public'));

// API endpoint to get all statuses
app.get('/api/statuses', (req, res) => {
    const statuses = Object.fromEntries(websiteStatuses);
    res.json(statuses);
});

// API endpoint to get configuration
app.get('/api/config', (req, res) => {
    res.json({
        checkInterval,
        uiRefreshInterval,
        theme
    });
});

app.listen(port, () => {
    console.log(`DumbMonitor running on http://localhost:${port}`);
    console.log('Monitoring websites:', websites);
    console.log('Check interval:', checkInterval, 'ms');
    console.log('UI refresh interval:', uiRefreshInterval, 'ms');
    console.log('Theme:', theme);
}); 