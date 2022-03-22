// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    { id: 1, nome: 'Caneta', preco: 5.60 },
    { id: 2, nome: 'Caderno', preco: 15.60 },
    { id: 3, nome: 'Tênis', preco: 320.63 },
    { id: 4, nome: 'Calça', preco: 260.35 },
  ])
}