import type { NextApiRequest, NextApiResponse } from 'next'
import { addRowInNotion } from 'utils/notion'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body as {
    email: string
  }

  await addRowInNotion({
    Email: {
      email: data.email
    },
    Source: {
      multi_select: [{ name: 'Newsletter' }]
    }
  })

  res.status(200).json({})
}
