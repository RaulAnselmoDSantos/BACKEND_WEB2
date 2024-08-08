const deleteUser = (req, res) => {
    res.json(
      {
          nome: "Raul",
          email: "r@ifsp.edu.br",
          rota: "delete"            
      }
    )
  }

export default deleteUser;