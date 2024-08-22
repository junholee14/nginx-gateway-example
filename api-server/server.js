const express = require('express');
const app = express();
const port = 4000;

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

app.get('/api/protected', (req, res) => {
    res.json({ message: 'This is a protected endpoint' });
});

app.listen(port, () => {
    console.log(`API server listening at http://localhost:${port}`);
});
