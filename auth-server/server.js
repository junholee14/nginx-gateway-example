const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/auth', (req, res) => {
    const apiKey = req.get('X-API-Key');

    if (apiKey === 'secret-api-key') {
        res.sendStatus(200);
    } else {
        res.sendStatus(401);
    }
});

app.listen(port, () => {
    console.log(`Auth server listening at http://localhost:${port}`);
});
