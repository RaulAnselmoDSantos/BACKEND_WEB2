import express from 'express';
import userRouter from '../routes/userRouter.js';
import userProdutos from '../routes/userProdutos.js';


const app = express();
const port = 3000;

app.use('/user', userRouter);
app.use('/produtos', userProdutos);

// app.get('/', (req, res) => {
//   res.send('Hello World!')
  
// })

// app.post('/', (req, res) => {
//   res.send('Hello World!')
  
// })

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})