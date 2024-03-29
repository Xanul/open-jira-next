// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  ok: boolean,
  message: string,
  method: string,
  url: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  console.log(process.env);

  res.status(400).json({ 
    ok: true,
    message: "Todo Correcto!",
    method: req.method || 'No hay metodo',
    url: req.url || 'No hay url',
  })
}
