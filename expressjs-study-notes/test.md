[use-link]: #use-section 
[post-link]: #post-section

- [`app.use`][use-link] - [`app.post`][post-link]







asd


















































- ## `app.use` [use-link]
This method mounts the specified middleware function or functions at the specified path. The middleware function is executed when the base of the requested `path` matches path. For example:

- ## `app.post` [post-link]
This method is used to handle HTTP POST requests sent to the specified path. It is equivalent to calling `app.use` with the `POST` method and the specified path. The middleware function is executed when the base of the requested path matches `path` and the request method is `POST`. For example:
