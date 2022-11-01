import { WebClient } from '@slack/web-api'
import type { NextApiRequest, NextApiResponse } from 'next'

const web = new WebClient(process.env.NEXT_PUBLIC_SLACK_TOKEN_ID)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body as {
    'first-name': string
    'last-name': string
    email: string
    linkedin: string
    prev: boolean
    reason: string
    experience: string
    dream: string
  }

  await web.chat.postMessage({
    channel: '#mvp',
    text: `🚀 New lead - ${data['first-name'] + ' ' + data['last-name']}`,
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: `🚀 New lead`
        }
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*Name*\n${data['first-name'] + ' ' + data['last-name']}`
          },
          {
            type: 'mrkdwn',
            text: `*Email*\n${data.email}`
          }
        ]
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: data.linkedin
            ? `*Linkedin*\n<${data.linkedin}|Linkedin>`
            : '*Linkedin*\n-'
        }
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*¿Estas trabajando actualmente como developer?*\n${
            data.prev ? 'Si' : 'No'
          }`
        }
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*¿Por que razón quieres formar parte de Selfcommit?*\n${data.reason}`
        }
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*¿Cuantos años de experiencia tienes como developer?*\n${
            data.experience || 0
          }`
        }
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*¿Cual es tu empleo soñado?*\n${data.dream || ''}`
        }
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: '----------------------------------------'
        }
      }
    ]
  })

  res.status(200).json({})
}
