// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function numeroAleatorio(min = 1, max = 100000) {
  return parseInt(Math.random() * (max - min)) + min
}

export default function handler(req, res) {
  res.status(200).json([
    { id: numeroAleatorio(), nome: 'Caneta', preco: 5.60 },
    { id: numeroAleatorio(), nome: 'Caderno', preco: 15.60 },
    { id: numeroAleatorio(), nome: 'Tênis', preco: 320.63 },
    { id: numeroAleatorio(), nome: 'Calça', preco: 260.35 },
  ])
}