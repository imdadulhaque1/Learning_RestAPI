const express = require('express');
const morgan = require('morgan');

// Connects routes
const constactsRoute = require('./api/routes/contacts')

const app = express();
app.use(morgan('dev'))

const PORT = process.env.PORT || 3000

//Middleware using "use" key
app.use((req, res, next) =>{
    console.log("I am a Middleware Function!")
    next()    // ustill use of next() it never goes to next operation, means it will be running continuously
})


// use connected API
app.use("/api/contacts", constactsRoute)

app.get('/', (req, res) =>{
    res.send("<h1>RestAPI server site!</h1>")
})







app.listen(PORT, () =>{
    console.log(`Server is running on PORT ${PORT}`);
});

// app.get('/posts', (req, res) =>{
//     res.send("<h1>Stroed the all of posts!</h1>")
// }) 3,6,7,8

// app.get('/users', (req, res) =>{
//     res.send("<ul><li>Imdadul Haque</li><li>Israt Jahan Maisha</li></ul>")
// })

//  app.get("/api/contacts", (req, res) =>{
//      res.json(contacts)
//  })

//  app.post("/api/contacts", (req, res) =>{
//      res.json({
//          message: "I am Post Method!"
//      })
//  })
// const contacts = [
//     {name: "Imdadul Haque", email:"imdadul@gmail.com"},
//     {name: "Israt Jahan Maisha", email:"maisha@gmail.com"},
//     {name: "Enamul Haque", email:"enamul@gmail.com"},
// ]