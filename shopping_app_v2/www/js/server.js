const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');
const express = require('express');
const app = express();

app.use(
    '/api',
    createProxyMiddleware({
        target: 'http://localhost:8000'
    })
);

app.use('/static', express.static(path.join(__dirname, 'build', 'static')));

// app.get('/manifest.json', (req, res) => {
//     res.sendFile(path.join(__dirname, 'build', 'manifest.json'))
// });

app.get('/*', (req, res) => {
    // res.status(200).send(`
    // <!DOCTYPE html>
    // <script>fetch('http://localhost:8000/api/get').then((res) => res.json()).then((data) => console.log(data))</script>
    // <body>top</body>
    // </html>`);
    res.sendFile(path.join(__dirname, 'build', '../../index.html'))
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send('Internal Server Error');
});

app.listen(3000, () => {
    console.log('start listening');
});