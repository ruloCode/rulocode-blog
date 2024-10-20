import { filterPosts } from '../../utils/notion/filterPosts'
import { getPosts } from '../../servicies/notion-client/getPosts'
// import MaxWidthWrapper from '@/components/shared/maxWidthWrapper/MaxWidthWrapper'
import BlogHome from '@/components/blog/blog-home/BlogHome'

export default async function BlogPage() {
  const posts = filterPosts(await getPosts())

  return <BlogHome posts={posts} />
}
