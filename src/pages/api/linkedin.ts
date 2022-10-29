import { WebClient } from '@slack/web-api'
import type { NextApiRequest, NextApiResponse } from 'next'

const SLACK_TOKEN_ID =
  'xoxb-4160038189685-4160045244917-LddQZj2Oqsnp5kjYAh8tzQXg'

const web = new WebClient(SLACK_TOKEN_ID)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body as {
    linkedin: string
  }

  await web.chat.postMessage({
    channel: '#mvp',
    text: `🚀 New lead - ${data['linkedin']}`
  })

  res.status(200).json({})
}
