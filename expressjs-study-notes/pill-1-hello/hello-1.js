// get, post, put, delete

const express = require('express');
const path = require('path')
const app = express()
const PORT = process.env.PORT || 5000

//* Luckily express has a middleware for you to help
app.use(express.static(path.join(__dirname, "public")));

//* you can sendfiles 
    // but doing in this way you will need to send your css, javascript, images, etc Manually as well

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "public", "index.html"))
// })
// app.get("/poiler.css", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "style.css"));
// });
// app.get("/poiler.js", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "script.js"));
// });

//* you can use .send() to send responses like:
/*
    - Strings: `response.send("here")`
    - Arrays: `response.send([1, 2, 3])`
    - Objects: `response.send({ name: "John", age: 30 })`
    - Buffers: `response.send(Buffer.from("some binary data"))`
    - HTML: `response.send("<h1>Hello World</h1>")`
    - Other types: `response.send(true)`
*/

// app.get("/", (req, res) => {
//      res.send(`this is simply a string`)

// })


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))