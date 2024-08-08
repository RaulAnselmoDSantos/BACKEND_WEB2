const editNameUser =  (req, res) => {
    res.json(
      {
          nome: "Raul",
          email: "r@ifsp.edu.br",
          rota: "patch"       
      }
    )
  }

export default editNameUser;