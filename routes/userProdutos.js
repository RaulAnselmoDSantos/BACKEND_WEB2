import express from "express";

const produtos = express.Router();


    produtos.get('/', (req, res) => {
        res.json(
        {
            nome: "Raul",
            email: "r@ifsp.edu.br",
            rota: "get"        
        }
        )
    })
  
  produtos.post('/', (req, res) => {
    res.json(
      {
          nome: "Raul",
          email: "r@ifsp.edu.br",
          rota: "post"
      }
    )
  })
  
  produtos.put('/', (req, res) => {
    res.json(
      {
          nome: "Raul",
          email: "r@ifsp.edu.br",
          rota: "put"    
      }
    )
  })
  
  produtos.patch('/', (req, res) => {
    res.json(
      {
          nome: "Raul",
          email: "r@ifsp.edu.br",
          rota: "patch"       
      }
    )
  })
  
  produtos.delete('/', (req, res) => {
    res.json(
      {
          nome: "Raul",
          email: "r@ifsp.edu.br",
          rota: "delete"            
      }
    )
  })

 

export default produtos;