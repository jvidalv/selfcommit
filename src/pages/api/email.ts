import { WebClient } from '@slack/web-api'
import type { NextApiRequest, NextApiResponse } from 'next'
import { addRowInNotion } from 'utils/notion'

const web = new WebClient(process.env.SLACK_TOKEN_ID)

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
      multi_select: [{ name: 'Homepage' }]
    }
  })

  await web.chat.postMessage({
    channel: '#mvp',
    text: `🚀 New lead - ${data.email}`
  })

  res.status(200).json({})
}
