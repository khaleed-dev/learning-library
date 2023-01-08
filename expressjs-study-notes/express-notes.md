`app.use(path, middleware)`: This method mounts the specified middleware function or functions at the specified path. The middleware function is executed when the base of the requested `path` matches path. For example:
```js
app.use('/hello', (req, res, next) => {
  console.log('Hello, world!');
  next();
});

```
