const express = require('express');
const app = express();

const logMiddleware = (req, res, next) => {
    console.log(req.method, req.url)
}

app.get('/', (req, res, next) => {
    console.log(req.method, req.url)
    next()
    },
    (req, res) => {
    res.status(200).send('hello world\n');
});

//包括的エラーハンドリング
app.use((err, req, res, next) => {
    res.status(500).send('Internal Server Error');
});

app.listen(3000, () => {
    console.log('start listening');
})