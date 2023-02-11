const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');
const express = require('express');
const app = express();

app.use(
    '/',
    createProxyMiddleware({
        target: 'http://localhost:8000'
    })
);

app.use('/static', express.static(path.join(__dirname, 'build', 'static')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', '../../index.html'));
    console.log(req.method, req.url);
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send('Internal Server Error');
});

app.listen(3000, () => {
    console.log('start listening');
});