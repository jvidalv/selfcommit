import { WebClient } from '@slack/web-api'
import type { NextApiRequest, NextApiResponse } from 'next'
import { addRowInNotion } from 'utils/notion'

const web = new WebClient(process.env.SLACK_TOKEN_ID)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body as {
    message: string
    email: string
  }

  await addRowInNotion({
    Email: {
      email: data.email
    },
    Contact: {
      rich_text: [
        {
          text: {
            content: data.message
          }
        }
      ]
    },
    Source: {
      multi_select: [{ name: 'Contact' }]
    }
  })

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
