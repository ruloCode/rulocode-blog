import MaxWidthWrapper from '@/components/maxWidthWrapper/MaxWidthWrapper'
import React from 'react'
import styles from './BlogHome.module.scss'
import { BlogCard } from '../BlogCard'
import { cn } from '@/utils/utils'

export const BlogHome = ({ posts }: any) => {
  return (
    <div className='mt-24'>
      <div className={styles['squares-div']}>
        <div className={cn(styles.square, styles['blue-square'])} />
        <div className={cn(styles.square, styles['yellow-square'])} />
        <div className='square yellow-square' />
      </div>
      <MaxWidthWrapper>
        <div className={styles.main}>
          <div className={styles['main-info']}>
            <h1 title='La farmacia digital de México' className={styles['main-info-title']}>
              Tu salud es nuestra prioridad
            </h1>
            <div
              title='Te ayudamos a encontrar todos tus medicamentos en un solo lugar.'
              className={styles['main-subhead']}
            >
              <p className='text-lg mt-2 font-bold'>
                {' '}
                Salud, nutrición, hábitos, cuidado personal y más maneras de ser la mejor versión de
                nosotros mismos.
              </p>
            </div>

            <section></section>
          </div>
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
