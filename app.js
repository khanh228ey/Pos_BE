require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database.js');


const app = express();
const port = process.env.PORT;

const startServer = (port) => {
    app.listen(port, () => {
      console.log(`Máy chủ đang chạy tại http://localhost:${port}`);
      connectDB();
    }).on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        console.log(`Cổng ${port} đã được sử dụng. Đang thử cổng khác...`);
        startServer(port + 1); 
      }
    });
};
startServer(port);