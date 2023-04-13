const express = require('express');
const pictures = require('./pics.json')
const fs = require('fs')
const app = express();


function sendRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomItem = array[randomIndex];
    return randomItem
}

//route handler for GET requests to /fact
app.get('/fact', (req, res) => {
  fetch('https://raw.githubusercontent.com/vadimdemedes/cat-facts/master/cat-facts.json')
    .then(response => response.json())
    .then(data => {
        res.send(sendRandomItem(data));
       
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Internal server error');
    });
});

//route handler for GET requests to /picture
app.get('/picture', (req, res) => {
        
        res.send(sendRandomItem(pictures));
        
        
    })


app.listen(80)
