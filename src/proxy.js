/**The following file maintains the logic of CORS blocking policy
 * by setting up a proxy server to the local machine
 */

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

function proxyServer(){
    const app = express();
    const port = 5500;

    app.use(cors());

    app.use('/api',createProxyMiddleware({
        target:'https://evilinsult.com',
        changeOrigin:true,
        pathRewrite:{
            '^/api':''
        },
        onError:(req,res,err) => {
            res.status(500).json({error:'Proxy error',details:error.message});
        }
    }));

    app.listen(3000,() => {
        console.log(`Proxy server is running at http://localhost:3000`);
    });
}

proxyServer();