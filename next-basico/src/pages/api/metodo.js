 const metodo = (req, res) => {
  if (req.method === "GET") {
    res.status(200).json({nome: "Louise"})
  } else {
    res.status(200).json({nome: "Helena"})
  }
}

export default metodo