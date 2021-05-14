const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <header>
        <style>
          body{padding:5%;}
          h1{margin-bottom:0;}
          p{margin-bottom:100px;}
          li{margin-bottom:30px;}
        </style>
      </header>
      <body>
        <h1>Home</h1>
        <p>Select one on the list to see details</p>
        <ul>
          <li><a href="/appetizer">Appetizer</a></li>
          <li><a href="/main">Main</a></li>
          <li><a href="/dessert">Dessert</a></li>
        </ul>
      </body>
    </html>
  `)
})

app.get('/:id', (req, res) => {
  if(req.params.id === 'appetizer'){
    res.send(`
      <html>
        <header>
          <style>
            body{padding:5%;}
            h1{margin-bottom:0;}
            p{margin-bottom:100px;}
            li{margin-bottom:30px;}
          </style>
        </header>
        <body>
          <h1>Appetizer</h1>
          <p><a href="../">Click here to go back to the list</a></p>
          <ul>
            <li>French fries</li>
            <li>Mushroom soup</li>
            <li>Fried Calamries</li>
          </ul>
        </body>
      </html>
    `)
  };
  if(req.params.id === 'main'){
    res.send(`
      <html>
        <header>
          <style>
            body{padding:5%;}
            h1{margin-bottom:0;}
            p{margin-bottom:100px;}
            li{margin-bottom:30px;}
          </style>
        </header>
        <body>
          <h1>Main</h1>
          <p><a href="../">Click here to go back to the list</a></p>
          <ul>
            <li>Serloin steak 16oz</li>
            <li>White wine mussels</li>
            <li>Boston Lobster ravioli</li>
          </ul>
        </body>
      </html>
    `)
  };
  if(req.params.id === 'dessert'){
    res.send(`
      <html>
        <header>
          <style>
            body{padding:5%;}
            h1{margin-bottom:0;}
            p{margin-bottom:100px;}
            li{margin-bottom:30px;}
          </style>
        </header>
        <body>
          <h1>Dessert</h1>
          <p><a href="../">Click here to go back to the list</a></p>
          <ul>
            <li>Tiramissu cake</li>
            <li>Fudge brownie with ice cream</li>
            <li>Lemon cheese cake</li>
          </ul>
        </body>
      </html>
    `)
  }
})

app.listen(PORT, function(err){
  if(err) console.log(err);
  console.log("server listening on PORT", PORT);
})