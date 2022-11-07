import { WebClient } from '@slack/web-api'
import type { NextApiRequest, NextApiResponse } from 'next'

const web = new WebClient(process.env.NEXT_PUBLIC_SLACK_TOKEN_ID)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body as {
    email: string
  }

  await web.chat.postMessage({
    channel: '#mvp',
    text: `🚀 New lead - ${data.email}`
  })

  res.status(200).json({})
}
