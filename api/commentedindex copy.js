// This line imports the Express.js module. 
// The require('express') statement loads the Express module and assigns it to the express variable.
const express = require('express');

// This line creates an instance of an Express application. 
// The express() function initializes a new Express application and assigns it to the app variable.
const app = express();

// app.get('/test', ...): This line defines a route for handling HTTP GET requests to the /test path. 
// The app.get() method takes two parameters: the route path ('/test') and a callback function.
app.get('/test', (req, res) => {
    res.json('test ok2');
});

// The app.listen(4000) method binds and listens for connections on the specified port (4000). 
// Once the server is running, you can access it by navigating to http://localhost:4000 in 
// your web browser or using a tool like curl or Postman.
app.listen(4000);

// We are using nodemon index.js instead of node index.js command. Nodemon does dynamic reloading when you make a change in the code.
// For node you have to re run the command to see your changes.