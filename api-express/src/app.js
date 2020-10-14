const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send([
    {
      "id": 1,
      "poll": "Poll 1"
    },
    {
      "id": 2,
      "poll": "Poll 2"
    },
    {
      "id": 3,
      "poll": "Poll 3"
    }
  ])
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});