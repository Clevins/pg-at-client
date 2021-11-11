import React, { FC } from 'react'
import { BlogsProps, IBlog } from '@customTypes/BlogsProps'
import LgBLog from '@components/Blogs/LgBlog'

const LatestBlogs: FC<BlogsProps> = ({ blogs, showViewAllBtn }) => {
  return (
    <div className="w-full">
      <div className="pt-4 pb-2 mx-auto text-2xl font-bold text-center lg:pt-8 font-Montserrat text-thunder lg:text-4xl">
        <h2>Latest Blogs</h2>
      </div>
      <div className="relative w-32 lg:w-64 h-0.5 mx-auto bg-thunder rounded-xl" />

      <div className="flex flex-row flex-wrap justify-center w-10/12 mx-auto">
        {blogs.map((blog: IBlog) => {
          return <LgBLog blog={blog} key={blog.id} />
        })}
      </div>

      {showViewAllBtn && (
        <div className="mx-auto mt-10 mb-20">
          <a href="/blogs">
            <h2 className="text-3xl font-light text-center font-Montserrat text-irisBlue">
              View All Blogs
            </h2>
          </a>
        </div>
      )}
    </div>
  )
}

export default LatestBlogs
