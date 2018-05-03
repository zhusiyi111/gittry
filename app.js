var express = require('express');

var app = new express();

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
