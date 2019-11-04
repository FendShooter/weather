const express = require('express');
const path = require('path');
const hbs = require('hbs');
const db = require('../db/connect');
const staticPath = path.join(__dirname, '../public');
const partialsPath = path.join(__dirname, '../templates/partials')
const templPath = path.join(__dirname, '../templates/views');
const app = express();



// static page

app.use(express.static(staticPath));

app.set('view engine', 'hbs');
app.set('views', templPath);
hbs.registerPartials(partialsPath);

app.get('/', (req, res) => {
  res.render('index', {
    body:"From index page"
  });
})
app.get('/pricing', (req, res) => {
  res.render('pricing', {
    title:"Pricing page"
  });
})
// about page
app.get('/about', (req, res) => {
 
  const sql = 'select * from customers'
  db.query(sql, (err, result) => {
    res.send(result);
  })
})
app.get('/about/:id', (req, res) => {
  const user = req.params.id;

  const sql = 'select * from customers where customer_id = ?'
  db.query(sql,[user], (err, result) => {
    if (err) {
     return res.send({
        msg:"bad request"
      })
    }
    else {
      
      res.send(result);
    }
  })
})
//others
app.get('/others', (req, res) => {
  res.send(`<h1>Business page</h1>`);
})
app.get('*', (req, res) => {
  res.render('pagerror')
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{console.log(`Server running on port ${PORT}`);
})
