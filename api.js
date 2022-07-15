const cors = require('cors');
const express = require('express');
const dataAccess = require('./data-access');

const PORT = 8888;
const app = express();

let corsOptions = {
    origin: ['http://localhost:3001', 'http://localhost:3000'],
    optionsSuccessStatus: 200
}

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.get('/hello-world', cors(corsOptions), async (req, res) => { 
     res.send('Hello World Practice.')
});

app.listen(PORT, () => {
    console.log(`Express API is running on port: ${PORT}`);
});
