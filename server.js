const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000

app.get('/', (req, res) =>{
    res.send("<h1>RestAPI server site!</h1>")
})

app.get('/posts', (req, res) =>{
    res.send("<h1>Stroed the all of posts!</h1>")
})

app.get('/users', (req, res) =>{
    res.send("<ul><li>Imdadul Haque</li><li>Israt Jahan Maisha</li></ul>")
})

app.listen(PORT, () =>{
    console.log(`Server is running on PORT ${PORT}`);
});