* `app.use(path, middleware)`: This method mounts the specified middleware function or functions at the specified path. The middleware function is executed when the base of the requested `path` matches path. For example:
```js
app.use('/hello', (req, res, next) => {
  console.log('Hello, world!');
  next();
});

```
* `app.post(path, middleware)`: This method is used to handle HTTP POST requests sent to the specified path. It is equivalent to calling `app.use` with the `POST` method and the specified path. The middleware function is executed when the base of the requested path matches `path` and the request method is `POST`. For example:
```js
app.post('/login', (req, res) => {
  // Handle login form submission
});
```
This method is often used in combination with form submissions or API calls that submit data to the server. It is one of the routing methods in Express.js, along with `app.get`, `app.put`, `app.patch`, `app.delete`, and `app.all`.

* `app.set(setting, value)`: This method sets the value for a specific setting. For example:
```
app.set('view engine', 'ejs');
```

* `app.listen(port[, hostname][, backlog][, callback])`: This method binds and listens for connections on the specified host and port. It is equivalent to the following:
```js
const server = http.createServer(app);
server.listen(port[, hostname][, backlog][, callback]);
```
For example:
```js
app.listen(3000, () => {
  console.log('Listening on port 3000');
});
```
* `app.on(event, listener)` This method is used to bind a listener function to an event emitted by the app. For example:
```js
app.on('error', (err) => {
  console.error(err.stack);
});
```
* `app.engine(ext, callback)`: This method is used to register the given template engine callback as middleware. The callback will be invoked for requests to the given file extension. For example:

```
app.engine('ejs', require('ejs').renderFile);
```




