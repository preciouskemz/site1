const express = require('express');
const app = express();
const path = require('path');

// Mock Database for Kits
const kits = [
    { id: 1, name: "Home Jersey '27", price: 120, stock: 50, edition: 'Green Storm', eth: '0.05' },
    { id: 2, name: "Away Jersey '27", price: 110, stock: 30, edition: 'White Phantom', eth: '0.04' },
    { id: 3, name: "Third Jersey '27", price: 110, stock: 25, edition: 'Neon Shadow', eth: '0.04' },
    { id: 4, name: "GK Jersey '27", price: 130, stock: 20, edition: 'Gold Aura', eth: '0.06' }
];

app.use(express.static(path.join(__dirname)));

// API Endpoint for the Shop
app.get('/api/kits', (req, res) => {
    res.json(kits);
});

app.listen(3000, () => {
    console.log('Ahudiyannem FC Server running on http://localhost:3000');
});
