import express from 'express';
import userRouter from '../routes/userRouter.js';
import userProdutos from '../routes/userProdutos.js';
import {PORT, ENVIRONMENT, HOST} from './config.js';

const app = express();
const port = PORT;

app.use('/user', userRouter);
app.use('/produtos', userProdutos);

// app.get('/', (req, res) => {
//   res.send('Hello World!')
  
// })

// app.post('/', (req, res) => {
//   res.send('Hello World!')
  
// })

app.listen(port, () => {
  console.log(`Servidor rodando no ambiente ${ENVIRONMENT} em ${ENVIRONMENT == 'production' ? HOST :  HOST+':'+PORT}`)
})