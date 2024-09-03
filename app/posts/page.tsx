import Link from 'next/link'
import React from 'react'

const Posts = () => {
  return (
    <section className="py-24">
      <div className="container max-w-[1100px]">
        <ul className='flex flex-col gap-2 text-lg font-bold underline mt-4'>
          <li><Link href="/posts/introduction-to-mdx">Introduction to MDX</Link></li>
          <li><Link href="/posts/introduction-to-nextjs">Introduction to NextJs</Link></li>
        </ul>
      </div>
    </section>
  )
}

export default Posts