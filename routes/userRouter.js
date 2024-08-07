import express from "express";

const router = express.Router();


    router.get('/', (req, res) => {
        res.json(
        {
            nome: "Raul",
            email: "r@ifsp.edu.br",
            rota: "get"        
        }
        )
    })
  
  router.post('/', (req, res) => {
    res.json(
      {
          nome: "Raul",
          email: "r@ifsp.edu.br",
          rota: "post"
      }
    )
  })
  
  router.put('/', (req, res) => {
    res.json(
      {
          nome: "Raul",
          email: "r@ifsp.edu.br",
          rota: "put"    
      }
    )
  })
  
  router.patch('/', (req, res) => {
    res.json(
      {
          nome: "Raul",
          email: "r@ifsp.edu.br",
          rota: "patch"       
      }
    )
  })
  
  router.delete('/', (req, res) => {
    res.json(
      {
          nome: "Raul",
          email: "r@ifsp.edu.br",
          rota: "delete"            
      }
    )
  })

  router.get('/', (req, res) => {
    res.json(
    {
        nome: "Raul",
        email: "r@ifsp.edu.br",
        rota: "get"        
    }
    )
})

router.post('/', (req, res) => {
res.json(
  {
      nome: "Raul",
      email: "r@ifsp.edu.br",
      rota: "post"
  }
)
})

router.put('/', (req, res) => {
res.json(
  {
      nome: "Raul",
      email: "r@ifsp.edu.br",
      rota: "put"    
  }
)
})

router.patch('/', (req, res) => {
res.json(
  {
      nome: "Raul",
      email: "r@ifsp.edu.br",
      rota: "patch"       
  }
)
})

router.delete('/', (req, res) => {
res.json(
  {
      nome: "Raul",
      email: "r@ifsp.edu.br",
      rota: "delete"            
  }
)
})

export default router;