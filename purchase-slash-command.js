const express = require('express');
// const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// allow us to easily process POST requests
// app.use(urlencoded({ extended: false }));
// app.use(json());

// require('./routes/purchase')(app);
// require('./routes/action')(app);

app.post('/purchase', async (req, res) => {
  console.log(req.body)
  const { text, user_id } = req.body;
  res.json({
    text: `Thanks for your purchase request of *${text}*. We will message the CEO now for authorisation.`
  })
// res.send({ status: 'succes'})
res.send();
})

// const PORT = 9647;
const PORT = 9467;
app.listen(PORT, () => {
  console.log(`Slack bot server has started on port ${PORT}`);
})

