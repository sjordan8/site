const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    const options = {
        root: path.join(__dirname, 'index.html'),
    };

    res.sendFile('index.html', options, (error) => {
        if (error) {
            console.log('Failed to send index.html');
        } else {
            console.log('Sent index.html');
        }
    });
})

app.get('/christine', (req, res) => {
    res.send('Hi Christine, I love you! :)');
})

app.listen(port, () => console.log(`Now listening at http://localhost:${port}`));
