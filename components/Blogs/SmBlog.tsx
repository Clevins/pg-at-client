import React, { FC } from 'react'
import { BlogProps } from '@customTypes/BlogsProps'
import router from 'next/router'

const SmBlog: FC<BlogProps> = ({ blog }) => {
  const { id, title, thumbnail, author, upload_date, description } = blog
  return (
    <div className="mx-4 mt-8 mb-8 w-80 ">
      <div className="flex flex-col">
        <div className="w-full mx-auto ">
          <img className="rounded-lg shadow-2xl" src={thumbnail.url}></img>
        </div>
        <div>
          <h4 className="mt-4 mb-1 text-lg font-semibold text-thunder ">
            {title}
          </h4>
          <h2 className="my-1 text-sm italic font-normal text-irisBlue ">
            By {author} - {upload_date}
          </h2>
          <p className="my-1 font-light text-justify font-Montserrat ">
            {description}
          </p>
          <a>
            <button
              type="button"
              onClick={() => router.push(`/blog/${id}`)}
              className="self-start w-24 h-10 mt-6 text-white rounded-lg bg-irisBlue hover:bg-darkTurquoise focus:outline-none"
            >
              <p>Read More</p>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default SmBlog
