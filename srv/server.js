var express = require('express');
var app = express();
var port = 80

// app.use('/static', express.static(path.join(__dirname, 'public')))
process.stdout.write("Starting Application on port " + port + "\n");
app.use(express.static('srv'))
app.listen(port);
