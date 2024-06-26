import { WebClient } from '@slack/web-api'
import type { NextApiRequest, NextApiResponse } from 'next'
import { addRowInNotion } from 'utils/notion'

const web = new WebClient(process.env.SLACK_TOKEN_ID)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body as {
    linkedin: string
  }

  await addRowInNotion({
    Linkedin: {
      url: data.linkedin
    },
    Source: {
      multi_select: [{ name: 'Linkedin' }]
    }
  })

  await web.chat.postMessage({
    channel: '#mvp',
    text: `🚀 New lead - ${data.linkedin}`
  })

  res.status(200).json({})
}
