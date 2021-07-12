const express = require('express');
const app = express();
app.use(express.static('public'));


// our first Route
// app.get('/home', (req, res) => {
//     res.send('<h1>Welcome Ironhacker.!!! :)</h1>');
//     // res.json({
//     //     puppyPicture: `puppy.jpeg`
//     // })
// });



app.get('/contact', (req, res) => {
    res.send('<h1>Contact Page</h1>');
})


// our first Route:
app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home.html'));

// cat route:
app.get('/cat', (request, response, next) => response.sendFile(__dirname + '/views/cat.html'));

// app.get('/cat', (request, response, next) => {
//     response.send(`
//   <!doctype html>
//   <html>
//     <head>
//       <meta charset="utf-8">
//       <title>Cat</title>
//       <link rel="stylesheet" href="/stylesheets/style.css" />
//     </head>
//     <body>
//       <h1>Cat</h1>
//       <p>This is my second route</p>
//       <img src="/images/cool-cat.jpg" />
//     </body>
//   </html>
//     `);
// });



app.listen(5000)




















// const http = require('http');

// const server = http.createServer((request, response) => {

//     console.log(`Someone has requested ${request.url}`);

//     if (request.url === '/') {
//         response.write('Hello, world!');
//         response.end();
//     } else {
//         response.statusCode = 404;
//         response.write('404 Page');
//         response.end();
//     }


// });

// server.listen(3000);


