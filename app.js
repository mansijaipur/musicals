require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002
;
const http = require('http');
const https = require('https');
const server = http.createServer(app);

app.use(express.static(__dirname ));
app.use(express.static(path.join(__dirname, "js")));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

server.listen(PORT, () => {
    console.log(`Express app listening to PORT ${PORT}`);
})