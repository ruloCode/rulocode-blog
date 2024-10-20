/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link'
import Image from 'next/image'
import { DateFormatsEnum, formatDate } from '@/utils/formatDate'

export const BlogCard = ({ content }: any) => {
  // console.log(content, "content");

  return (
    <Link href={`/blog/${content.slug}`} className='h-full'>
      <article className='rounded-lg overflow-hidden shadow-md  relative  '>
        {content.image && (
          <div className='w-full h-[240px]  relative'>
            <Image src={content.image} fill alt={content.title} className='object-cover' />
          </div>
        )}
        <div
          data-thumb={!!content.image}
          className='bg-white grid gap-2 p-2 grid-rows-[40px,80px,40px]  max-h-[420px]'
        >
          <div>
            <h2 className='text-1xl font-semibold text-gray-900 '>{content.title}</h2>
          </div>

          <div className=''>
            <p
              className='
            summary overflow-hidden overflow-ellipsis w-full 
            '
            >
              {content.summary}
            </p>
          </div>
          <div className='flex justify-between'>
            <div className='content'>
              {formatDate(
                content?.date?.start_date || content.createdTime,
                DateFormatsEnum.SkydropxDelivery,
              )}
            </div>
            <div className='category'>{content.category[0]}</div>
          </div>
        </div>
      </article>
    </Link>
  )
}
