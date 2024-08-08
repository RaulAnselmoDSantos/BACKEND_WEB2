const createUser = (req, res) => {
    res.json(
      {
          nome: "Raul",
          email: "r@ifsp.edu.br",
          rota: "post"
      }
    )
  }

export default createUser;