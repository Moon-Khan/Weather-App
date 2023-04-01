const express = require('express');
const app = express();


// ----------IMPORT ROUTES
const weatherRoute = require('./routes/weather')
app.use('/',weatherRoute);


app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));

// ----------VIEW ENGINE
app.set('view engine', 'ejs');


app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
})

