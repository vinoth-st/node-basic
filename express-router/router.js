const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/about', (req, res) => {
    res.send('About Us');
});

app.use('/api', userRoutes);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
