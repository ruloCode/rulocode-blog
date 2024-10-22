/* eslint-disable @typescript-eslint/no-explicit-any */
import MaxWidthWrapper from '@/components/maxWidthWrapper/MaxWidthWrapper'
import React from 'react'
import styles from './BlogHome.module.scss'
import { BlogCard } from '../BlogCard'

export const BlogHome = ({ posts }: any) => {
  return (
    <div >
   
      <MaxWidthWrapper>
        <div className={styles.main}>
     
        </div>

        <h1
          title='La farmacia digital de México'
          className='text-2xl font-semibold text-gray-900 mt-2 '
        >
          Artículos más recientes
        </h1>
        <div className='grid md:grid-cols-3 gap-4 my-8 '>
          {posts.map((post: any, index: any) => {
            const content = {
              title: post.title,
              date: post.date,
              createdTime: post.createdTime,
              slug: post.slug,
              summary: post.summary,
              category: post.category,
              image: post.thumbnail,
              tags: post.tags,
            }
            return (
              <div key={index}>
                <BlogCard content={content} />
              </div>
            )
          })}
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default BlogHome
