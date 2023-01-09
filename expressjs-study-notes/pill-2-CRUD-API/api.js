//? Learn get, post, put, delete and abit more.
//? Make the api requests with POSTMAN app.

const express = require('express');
const path = require('path')
const app = express()
const PORT = process.env.PORT || 5000

// simple json data to work with
const members = require('./Members')

//* Adding an API route that respond with all members in database (GET REQUEST)
app.get("/api/members", (req, res) => {
    res.json(members)
})

//* Getting a Single Member (GET REQUEST)
app.get("/api/members/:id", (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))
    if(found){
        res.status(200).json(members.filter(member => member.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({msg: `no member found with the id of ${req.params.id}`})
    }
})

//* Creating a new Member (POST REQUEST)
// you need body-parser middleware to parse the requested body

// parse application/json
app.use(express.json());

// parse application/x-www-form-urlencoded (handling form submittions)
app.use(express.urlencoded({ extended: true }));

app.post("/api/members", (req, res) => {
    // create the member object
    const newMember = {
        id: generateUniqueId(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }
    // make sure the body has name and email if not return
    if(!newMember.name || !newMember.email){
        return res.status(400).json({msg: "Please include name and email"})
    }

    // push the member to the object array or to the database if exists.
    members.push(newMember)

    //respond with something
    res.json(members)
})

//* Updating an existing member (PUT REQUEST)
app.put("/api/members/:id", (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))
    if(found){
        const updMember = req.body
        members.forEach((member) => {
            if(member.id === parseInt(req.params.id)){
                member.name = updMember.name ? updMember.name : member.name
                member.email = updMember.email ? updMember.email : member.email
                
                res.json({msg: "Member Updated.", member})
            }
        })
    } else {
        res.status(400).json({msg: `no member found with the id of ${req.params.id}`})
    }
})

//* Deleting a member (DELETE REQUEST)
app.delete("/api/members/:id", (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))
    if(found){
        res.json({msg: 'Member Deleted', members: members.filter(member => member.id !== parseInt(req.params.id))})
    } else {
        res.status(400).json({msg: `no member found with the id of ${req.params.id}`})
    }
})


// That's how you make a Middlware
const myMiddleware = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`)
    next()
}
app.use(myMiddleware)

// setting static folder
app.use(express.static(path.join(__dirname, "public")))

// listening to requests on port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))


// simple unique id function
function generateUniqueId() {
    // Get the current timestamp in milliseconds
    const timestamp = Date.now();
  
    // Generate a random number between 0 and 1
    const randomNumber = Math.random();
  
    // Return the unique ID as a string
    return `${timestamp}${randomNumber}`;
}