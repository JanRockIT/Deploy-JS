const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Body-Parser aktivieren

app.post('/post', (req, res) => {
    const { message } = req.body;

    res.json({ message: 'Message:', message});
});

app.listen(port, () => {
    console.log(`POST-Tester läuft auf http://localhost:${port}`);
});
