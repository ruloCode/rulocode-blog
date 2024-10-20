import BlogCard from '../blogCard/NewBlogCard'

interface BlogPost {
  imageUrl: string
  category: string
  readTime: string
  title: string
  description: string
}

const blogPosts: BlogPost[] = [
  {
    imageUrl: '/assets/blog_1.jpg',
    category: 'Blockchain',
    readTime: '5 min read',
    title: 'A beginner\'s guide to blockchain for engineers',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
  },
  {
    imageUrl: '/assets/blog_2.jpg',
    category: 'Web Development',
    readTime: '7 min read',
    title: 'The future of web development in 2024',
    description: 'Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae.'
  },
  {
    imageUrl: '/assets/blog_3.jpg',
    category: 'Artificial Intelligence',
    readTime: '6 min read',
    title: 'How AI is transforming industries',
    description: 'Sed convallis magna eu sem. Donec venenatis vulputate lorem.'
  },
  {
    imageUrl: '/assets/blog_4.jpg',
    category: 'Design',
    readTime: '4 min read',
    title: 'Design trends to watch out for in 2024',
    description: 'Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.'
  },
  {
    imageUrl: '/assets/blog_5.jpg',
    category: 'Career',
    readTime: '8 min read',
    title: 'Tips for advancing your tech career',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst.'
  },
  {
    imageUrl: '/assets/blog_6.jpg',
    category: 'Cloud Computing',
    readTime: '5 min read',
    title: 'Understanding the basics of cloud computing',
    description: 'Fusce ac felis sit amet ligula pharetra condimentum. Vestibulum fringilla pede sit amet augue.'
  }
]

export const BlogList = () => {
  return (
    <div className='flex flex-col gap-4 py-4'>
      <div className='w-full flex justify-center items-center'>
        <h2 className='text-3xl font-bold'>Latest Blog Posts</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            imageUrl={post.imageUrl}
            category={post.category}
            readTime={post.readTime}
            title={post.title}
            description={post.description}
          />
        ))}
      </div>
    </div>
  )
}

export default BlogList
