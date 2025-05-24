const express = require('express');
const router = express.Router();

// Root route
router.get('/', (req, res) => {
  res.send('Welcome to Amitoj\'s Express Server!');
});

// /name route
router.get('/name', (req, res) => {
  res.send('Your Name: Amitoj');
});

// /greeting route
router.get('/greeting', (req, res) => {
  res.send('Hello! My name is Amitoj and my student number is N01712823');
});

// /add route
router.get('/add', (req, res) => {
  const x = parseFloat(req.query.x);
  const y = parseFloat(req.query.y);

  if (isNaN(x) || isNaN(y)) {
    return res.send('Please provide valid numbers for x and y.');
  }

  const result = x + y;
  res.send(`Result of ${x} + ${y} = ${result}`);
});

// /calculate route
router.get('/calculate', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  const operation = req.query.operation;

  if (isNaN(a) || isNaN(b)) {
    return res.send('Please provide valid numbers for a and b.');
  }

  let result;

  switch (operation) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = b !== 0 ? a / b : 'Cannot divide by zero';
      break;
    case '**':
      result = a ** b;
      break;
    default:
      result = 'Invalid operation. Use +, -, *, /, or **';
  }

  res.send(`Result of ${a} ${operation} ${b} = ${result}`);
});

module.exports = router;
