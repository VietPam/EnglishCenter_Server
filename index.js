const express = require('express');
const app = express();
const port = 3000;

// Middleware để phân tích các yêu cầu JSON
app.use(express.json());

// Route cơ bản
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/api', (req, res) => {
    res.json({ message: 'Welcome to the API' });
  });
  
// Lắng nghe trên port đã chỉ định
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
