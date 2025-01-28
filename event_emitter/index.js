const express = require("express");
const EventEmitter = require('node:events');

const myEmitter = new EventEmitter();
const app = express();
const PORT = 3001;
let num = 0; // Initial number

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
    myEmitter.emit('server-started', PORT);
});

myEmitter.on('server-started', (PORT) => {
    console.log(`Server started at port: ${PORT}`);
});


app.use(express.static('public'));

app.get('/', (req, res) => {
    myEmitter.emit('homepage-visited');
    res.send(`
        <h1>Hello User</h1>
        <br>
        <button id="getNumberButton">Increment Number</button>
        <p id="numberDisplay">Current Number: ${num}</p>
        <script>
            document.getElementById('getNumberButton').addEventListener('click', function() {
                fetch('/increment-number')
                    .then(response => response.json())
                    .then(data => {
                        document.getElementById('numberDisplay').innerText = 'Current Number: ' + data.number;
                    })
                    .catch(error => console.error('Error:', error));
            });
        </script>
    `);
});

myEmitter.on('homepage-visited', () => {
    console.log('Homepage was visited');
});


app.get('/increment-number', (req, res) => {
    num++; 
    res.json({ number: num }); 
});
