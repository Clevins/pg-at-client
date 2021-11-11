import React, { FC } from 'react'
import { BlogsProps, IBlog } from '@customTypes/BlogsProps'
import SmBlog from '@components/Blogs/SmBlog'

const AllBlogs: FC<BlogsProps> = ({ blogs }) => {
  return (
    <div className="w-full">
      <div className="pt-4 pb-2 mx-auto text-2xl font-bold text-center lg:pt-8 font-Montserrat text-thunder lg:text-4xl">
        <h2>All Blogs</h2>
      </div>
      <div className="relative w-32 lg:w-48 h-0.5 mx-auto bg-thunder rounded-xl" />

      <div className="flex flex-row flex-wrap justify-center w-10/12 mx-auto mt-8">
        {blogs.map((blog: IBlog) => {
          return <SmBlog blog={blog} key={blog.id} />
        })}
        {blogs.map((blog: IBlog) => {
          return <SmBlog blog={blog} key={blog.id} />
        })}
        {blogs.map((blog: IBlog) => {
          return <SmBlog blog={blog} key={blog.id} />
        })}
      </div>
    </div>
  )
}

export default AllBlogs
