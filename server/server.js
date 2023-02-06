const PORT = process.env.PORT ?? 8000
const express = require('express')
const app = express()
const pool = require('./db')

console.log(pool);
app.get('/', (req, res) => {
  res.json(pool)
})
//get all todos//
app.get('/todos', async (req, res) => {
  
    try {
      const todos = await pool.query('SELECT * FROM todos')
      res.json(todos)
    } catch (error) {
        console.error(error);  
    }
})



app.listen(PORT, ()=> console.log(`Server running on PORT ${PORT}`))
