'use strict';

const fs = require('fs');
const httpProxy = require('http-proxy');
const args = require('yargs').argv;
const url = require('url');

if (!fs.existsSync(args.key) || !fs.existsSync(args.cert)) {
  throw new Error('Both key and cert are required!');
}

let target = args.target ? url.parse(args.target) : {};

httpProxy
  .createProxyServer({
    target: {
      host: target.hostname || 'localhost',
      port: target.port || 8000
    },
    ssl: {
      key: fs.readFileSync(args.key, 'utf8'),
      cert: fs.readFileSync(args.cert, 'utf8')
    }
  })
  .listen(args.port || 8080)
  .on('error', (e) => {
    console.log(e);
  });
