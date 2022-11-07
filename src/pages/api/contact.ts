import { WebClient } from '@slack/web-api'
import type { NextApiRequest, NextApiResponse } from 'next'

const web = new WebClient(process.env.NEXT_PUBLIC_SLACK_TOKEN_ID)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body as {
    message: string
    email: string
  }

  await web.chat.postMessage({
    channel: '#mvp',
    blocks: [
      {
        type: 'section',
        text: { type: 'plain_text', text: `💬 Contact: ${data.email}` }
      },
      {
        type: 'context',
        elements: [
          {
            type: 'plain_text',
            text: data.message
          }
        ]
      }
    ]
  })

  res.status(200).json({})
}
