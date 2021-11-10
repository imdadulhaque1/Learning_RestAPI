// const express = require('express').Router();
const express = require('express');
const router = express.Router();

// Get Method
router.get('/', (req, res, next) =>{
    res.status(200).json({
        message: "Hello, I am All Contacts Get Route!"
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
router.post('/:id', (req, res, next) =>{
    // Connected with body-parser (imported in server.js file)
    const name = req.body.name;
    const email = req.body.email;

    res.status(201).json({
        message: "Hello, I am POST ROUTE from api/routes/contacts!",
        name, // use the ES-6 rules where is able to used any word when "key" and "value" is same
        email,
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


module.exports = router