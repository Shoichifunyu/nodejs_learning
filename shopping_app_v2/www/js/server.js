// const { createProxyMiddleware } = require('http-proxy-middleware');

require([
    'path', 
    'express',
    'cors',
    'https'
    ], function(
    path, 
    express,
    cors,
    https
    ) {
    const app = express();
    app.use(cors({
        origin: 'https://c104-113-149-235-78.ap.ngrok.io', //アクセス許可するオリジン
        credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
        optionsSuccessStatus: 200 //レスポンスstatusを200に設定
    }));
    var httpsServer = https.Server(app);

    // Configuration
    const PORT = 443;
    const HOST = "http://10.0.2.2";
    // const URL = "https://c104-113-149-235-78.ap.ngrok.io";

    // app.use(
    //     createProxyMiddleware({
    //         target: URL,
    //         origin: '*',
    //         changeOrigin: true
    //     })
    // );

    // app.use('/static', express.static(path.join(__dirname, 'build', 'static')));

    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, 'build', '../../index.html'));
        console.log(req.method, req.url);
        response.append('Access-Control-Allow-Origin', "https://c104-113-149-235-78.ap.ngrok.io")
        response.append('Access-Control-Allow-Headers', "Content-Type")
    });

    app.use((err, req, res, next) => {
        console.log(err);
        res.status(500).send('Internal Server Error');
    });

    httpsServer.listen(PORT, HOST, () => {
        console.log('start listening_here');
    })
});