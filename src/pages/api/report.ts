import type { NextApiRequest, NextApiResponse } from 'next'
import { ReportCategories } from 'pages/linkedin'

const sleep = (time = 1000) => new Promise(resolve => setTimeout(resolve, time))

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.query as {
    type: ReportCategories
  }

  console.log(data)

  switch (data.type) {
    case 'headline':
      await sleep(1000)
      break
    case 'summary':
      await sleep(3000)
      break
    case 'experience':
      await sleep(5000)
      break
    case 'conclusions':
      await sleep(2000)
      break
  }

  res.status(200).json({})
}
