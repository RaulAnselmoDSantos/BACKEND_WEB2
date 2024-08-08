const userById = (req, res) => {
    res.json(
    {
        nome: "Raul",
        email: "r@ifsp.edu.br",
        rota: "get"        
    }
    )
}

export default userById;