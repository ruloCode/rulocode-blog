'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import NotionRenderer from '@/components/blog/notion-renderer/NotionRenderer'
import Image from 'next/image'
import MaxWidthWrapper from '../../maxWidthWrapper/MaxWidthWrapper'

import styles from './BlogPage.module.scss'

export const BlogPage = ({ postDetail, recordMap }: any) => {
  const router = useRouter()
  return (
    <div className='min-h-screen  w-full flex flex-col items-center'>
      <div className={styles.banner}>
        <Image src={postDetail.thumbnail} alt={postDetail.title} fill className='object-cover' />
      </div>
      <MaxWidthWrapper className={'max-w-7xl py-8'}>
        <div className='w-full flex justify-center  '>
          <article className='flex flex-col justify-center max-w-[90vw] md:max-w-[720px] px-[min(16px,8vw)] py-[min(16px,8vw)] relative top-[-120px] bg-white rounded-lg'>
            <div>
              <button
                type='button'
                onClick={() => {
                  router.back()
                }}
              >
                Volver
              </button>
            </div>

            <h2 className=' text-xl font-semibold text-gray-900 mt-2 p-4'>{postDetail.title}</h2>

            <NotionRenderer recordMap={recordMap} />

            {/* {data.type[0] === "Post" && (
             <>
               <Footer />
               <CommentBox data={data} />
             </>
           )} */}
          </article>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default BlogPage
