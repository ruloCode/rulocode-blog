import { Client } from '@notionhq/client'

export { getAllSelectItemsFromPosts } from './getAllSelectItemsFromPosts'
export { filterPosts } from './filterPosts'

const databaseId = '43979c98926d44efbe512b4f0f6be66a'

const notion = new Client()

export const getDatabase = async () => {
  const response = await notion.databases.query({
    database_id: databaseId,
  })
  return response.results
}

export const getPageFromSlug = async (slug: any) => {
  const response = await notion.databases.query({
    database_id: String(databaseId),
    filter: {
      property: 'slug',
      rich_text: {
        equals: slug,
      },
    },
  })

  if (response?.results?.length) {
    return response?.results?.[0]
  }
  return {}
}
