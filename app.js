const express = require('express');
const app = express();

// cert-bot expects files in /var/www/html
app.use(express.static('/var/www/html'));

app.listen(5000, () => console.log('Listening on Post 5000'));
