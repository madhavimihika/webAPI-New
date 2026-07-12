const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ status: 'ok', session: 'NB6007CEM S2' });
});

app.listen(process.env.PORT || 3000);
