import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
  
})

app.get('/USER', (req, res) => {
  res.json(
    {
        nome: "Raul",
        email: "r@ifsp.edu.br"        
    }
  )
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})