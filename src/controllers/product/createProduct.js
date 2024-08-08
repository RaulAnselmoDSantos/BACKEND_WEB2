const createProduct = (req, res) => {
    res.json(
      {
          nome: "Café",
          tipo: "comestiveis",
          rota: "post"
      }
    )}

export default createProduct;