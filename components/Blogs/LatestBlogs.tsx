import React, { FC } from 'react'
import { BlogsProps, IBlog } from '@customTypes/BlogsProps'
import LgBLog from '@components/Blogs/LgBlog'

const LatestBlogs: FC<BlogsProps> = ({ blogs }) => {
  return (
    <div className="w-full">
      <div className="pt-4 pb-2 mx-auto text-2xl font-bold text-center lg:pt-8 font-Montserrat text-thunder lg:text-4xl">
        <h2>Latest Blogs</h2>
      </div>
      <div className="relative w-32 lg:w-64 h-0.5 mx-auto bg-thunder rounded-xl" />

      {blogs.map((blog: IBlog) => {
        return <LgBLog blogData={blog} key={blog.id} />
      })}
    </div>
  )
}

export default LatestBlogs
