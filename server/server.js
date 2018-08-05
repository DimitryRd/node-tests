const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found!',
        name: 'Todo v.1'
    })
});


app.get('/users', (req, res) =>{
    let users = [{name: "Dimitry", age: 29}, {name: "Anatoliy", age: 29}, {name: "Ludmila", age: 54}]
    res.send(users);
})
app.listen(3000);

module.exports.app = app;