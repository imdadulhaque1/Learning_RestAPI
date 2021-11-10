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
    res.status(201).json({
        message: "Hello, I am POST ROUTE from api/routes/contacts!"
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