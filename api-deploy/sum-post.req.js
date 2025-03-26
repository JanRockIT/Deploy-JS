const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Body-Parser aktivieren

app.post('/sum', (req, res) => {
    const { a, b } = req.body;

    const result = a + b;

    res.json({ message: `Result(${a} + ${b}) = ${result}` });
});

app.listen(port, () => {
    console.log(`POST-Tester läuft auf http://localhost:${port}`);
});
