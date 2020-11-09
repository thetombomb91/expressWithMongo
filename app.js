const express = require('express');

const app = express();

app.use('/posts', () => {
    console.log('middleware when posts is hit');
})


// ROUTES
app.get('/', (req, res) => {
    res.send('We are on home!');
})

app.get('/posts', (req, res) => {
    res.send('We got posts!');
})
// Listening to the server on port 3000
app.listen(3000);