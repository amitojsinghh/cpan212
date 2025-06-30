const express = require('express');
const app = express();
const routes = require('./routes');

app.use('/', routes);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
