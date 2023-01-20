import { Client } from '@notionhq/client'
import { NOTION_TOKEN, NOTION_DATABASE_ID } from '../env.js'
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'

const createNotionClient = () => {
	return new Client({
		auth: NOTION_TOKEN
	})
}

export const getNotionItems = async () => {
	const notion = createNotionClient()
	const response = await notion.databases.query({
		database_id: NOTION_DATABASE_ID
	})

	console.log(response)

	return response.results
		.map((page) => {
			if ('properties' in page) {
				const title = page.properties.Title
				if (title && 'type' in title && title.type === 'title') {
					return title.title[0]
				}
			}
			return false
		})
		.filter((title): title is RichTextItemResponse => !!title)
}
