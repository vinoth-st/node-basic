const express = require('express');
const app = express();

const middleware = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

app.use(middleware);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

