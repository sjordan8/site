const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    const options = {
        root: __dirname,
    };

    res.sendFile('index.html', options, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Sent index.html');
        }
    });
})

app.get('/christine', (req, res) => {
    res.send('Hi Christine, I love you! :)');
})

app.listen(port, () => console.log(`Now listening at http://localhost:${port}`));
