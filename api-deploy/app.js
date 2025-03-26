const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


// Initialize the method (get request handler)
app.get('/', (req, res) => {
    res.send('Hello Mom.');
});

// Start the server
app.listen(port, () => {
    console.log(`The server is running on http://localhost:${port}`);
});
