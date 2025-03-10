require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database.js');
const routeWeb = require('./routes/web.js');
const routeAdmin = require('./routes/admin.js');

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Router
app.use('/api/v1', routeAdmin);

const startServer = (port) => {
    app.listen(port, () => {
      console.log(`Máy chủ đang chạy tại http://localhost:${port}`);
      connectDB();
    }).on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        startServer(port + 1); 
      }
    });
};
startServer(port);