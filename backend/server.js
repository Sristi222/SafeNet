const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());  // To parse JSON bodies

// Define a POST route for signin
app.post('/signin', (req, res) => {
  const { email, password } = req.body;

  // Handle login logic here
  if (email === 'test@example.com' && password === 'password') {
    res.status(200).send('Signin successful');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

// Define a POST route for signup
app.post('/signup', (req, res) => {
  const { email, password } = req.body;

  // Handle signup logic (e.g., store the user's data in the database)
  if (email && password) {
    res.status(200).send({ message: 'User registered successfully' });
  } else {
    res.status(400).send({ message: 'Missing email or password' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
