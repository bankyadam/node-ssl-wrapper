# SSL Wrapper

To run, try from command line:

```
npm start -- --key path/to/cert.key --cert path/to/cert.crt --target 'http://localhost:9100' --port 9143
```

or

```
./bin/sslwrapper --key path/to/cert.key --cert path/to/cert.crt --target 'http://localhost:9100' --port 9143
```

With this, all incomming requests to port `9143` will be proxied to `localhost:9100` and will response with the same headers and content that `localhost:9100` responsed, served by the cert set in the arguments (`key` and `cert`).

Arguments
---------
`key` and `cert`: path to the cert files (required)
`target`: the base URL that the target application is located (only hostname and port will be used from it). Default: `localhost:8000`
`port`: the SSLWrapper's listen port. Default: `8080`

License
-------
MIT

Copyright
---------
Adam Brunner (<brunner.adam@gmail.com>)
