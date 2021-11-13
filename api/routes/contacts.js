// const express = require('express').Router()
const express = require('express')
const router = express.Router()

// Store the data in contacts array
const contacts = []

// Get Method
router.get('/', (req, res, next) =>{
    res.status(200).json({
       contacts
    })
})

// router.get('/:id', (req, res, next) =>{
//     // console.log(req.url)
//     const id = req.params.id      //to Extract the id should use: req.params.id
//     res.json({
//         id
//     })
// })

// Post Method
router.post('/', (req, res, next) =>{
    // Connected with body-parser (imported in server.js file)
    // const name = req.body.name;
    // const email = req.body.email;
    
    // console.log(`Name: ${name} | Email: ${email}`)

    contacts.push({
        name: req.body.name,
        email: req.body.email
    })

    res.status(201).json({
        message: "Data Saved!",
    })
})

// PUT Method
router.put('/:id', (req, res, next) =>{
    res.json({
        message: "Hello, I am PUT ROUTE from api/routes/contacts!"
    })
})

// DELETE Method
router.delete('/:id', (req, res, next) =>{
    res.json({
        message: "Hello, I am DELETE ROUTE from api/routes/contacts!"
    })
})


module.exports = router;