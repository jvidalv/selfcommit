import { Client } from '@notionhq/client'
import { CreatePageParameters } from '@notionhq/client/build/src/api-endpoints'

const notion = new Client({ auth: process.env.NOTION_KEY })
const databaseId = process.env.NOTION_DATABASE_ID!

export const addRowInNotion = async (
  properties: CreatePageParameters['properties']
) => {
  // @ts-ignore
  await notion.pages.create({
    parent: { database_id: databaseId },
    properties: properties
  })
}
