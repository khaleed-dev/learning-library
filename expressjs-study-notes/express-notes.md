# Express is:
    - Fast unopinionated and minimalist web framework for NodeJS.
    - Server-side / backend framework.
    - Great to use with client side framerworks as it's all javascript. 
[full API Reference](https://expressjs.com/en/4x/api.html)

---

# Express offers:
- 7 methods: `express.json()`, `express.raw()`, `express.Router()`, `express.static()`, `express.text()`, `express.text()`, `express.urlencoded()`.  
- 4 objects: `Apllication`, `Request`, `Response`, `Router`
    - each object has it's own properties and methods.
- _Middleware functions_: Are functions that have access to the __request__ and __response__ object. Express has built in middleware but middleware also comes from 3rdaprty packes as well as custom middleware
    - Execute any code
    - Make the changes to the req/res objects
    - end response cycle
    - call next middleware in the stack
    
# 
## Application Object: 
__The app object conventionally denotes the Express application. Create it by calling the top-level express() function exported by the Express module:__

```js
const express = require('express')
const app = express()
```
_application object includes these methods_

get, post, put, delete.
set, use, rote, render, listen, engine ...

- ### `app.set(setting, value)`:
This method sets the value for a specific setting. For example:
```js
app.set('view engine', 'ejs');
```

- ### `app.get(setting)`:
This method gets the value for a specific setting. For example:
```js
app.set('view engine', 'ejs')
app.get('view engine');
```
---------------------------------------------------------------------------------

- ### `app.get(path, callback [, callback ...])`:
Routes HTTP GET requests to the specified path with the specified callback functions. For example:
```js
app.get('/', (req, res) => {
  res.send('GET request to homepage')
  // Fetch from database
  // load pages
  // return JSON
  // full access to request & response objects.
})
```
---------------------------------------------------------------------------------

- ### `app.use(path, middleware)`:
This method mounts the specified middleware function or functions at the specified path. The middleware function is executed when the base of the requested path matches path. For example:
```js
app.use('/hello', (req, res, next) => {
    console.log('Hello, world!');
next();
});
```

- ### app.listen(port[, hostname][, backlog][, callback]):
This method binds and listens for connections on the specified host and port. It is equivalent to the following:
```js
const server = http.createServer(app);
server.listen(port[, hostname][, backlog][, callback]);
    For example:
app.listen(3000, () => {
    console.log('Listening on port 3000');
});
```

- ### app.on(event, listener):
This method is used to bind a listener function to an event emitted by the app. For example:
```js
app.on('error', (err) => {
    console.error(err.stack);
});
```

- ### app.engine(ext, callback):
This method is used to register the given template engine callback as middleware. The callback will be invoked for requests to the given file extension. For example:
```js
app.engine('ejs', require('ejs').renderFile);
```
-------------------------------------------------------------------------


## Request Object Includes: 
__The req object represents the HTTP request and has properties for the request query string, URL parameters, any data send within the body, HTTP headers, and so on.__
> you can also create middlewares and change things in this object.

_Request object include these properties:_
req.body, app, cookies, baseUrl, path, hostname, ...
_Request object include these methods:_
req.get(), req.is(), req.range(), req.accepts(), ...

```js
const greet = express.Router()

greet.get('/jp', (req, res) => {
  console.log(req.baseUrl) // /greet
  res.send('Konichiwa!')
})

app.use('/greet', greet) // load the router on '/greet'
```

```js
app.get('/user/:id', (req, res) => {
  res.send(`user ${req.params.id}`)
})
```

## Response Object Includes:
__The res object represents the HTTP response that an Express app sends when it gets an HTTP request.__
_Response object has these properties:_
res.app, res.headersSent, res.locals
_Response object include these methods:_
res.redirect(), json(), get(), send(), sendFile(), & alot more ...

```js
// redirect()
res.redirect('http://google.com')
res.redirect('/admin')
// status(), send()
res.status(404).send('Sorry, we cannot find that!')
```

## examples:

### basic server syntax: 
```js
const express = require('express');

//init express
const app = express();

// create your endpoints/route handlers
app.get('/', function(req,res) {
    res.send('Hello World');
})

//listen on a port
app.listen(5000);

```
