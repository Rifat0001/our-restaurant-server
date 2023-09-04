const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
require('dotenv').config();
// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('boss is running');
})

app.listen(port, () => {
    console.log(`Bistro is running port ${port}`)
})