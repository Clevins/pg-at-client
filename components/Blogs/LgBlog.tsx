import React, { FC } from 'react'
import { BlogProps } from '@customTypes/BlogsProps'

const LatestBlogs: FC<BlogProps> = ({ blogData }) => {
  const { title, thumbnail, author, upload_date, description } = blogData
  return (
    <div className="w-10/12 mx-auto mt-8 mb-8 lg:mt-16 lg:mb-16">
      <div className="flex flex-col lg:flex-row">
        <div className="w-11/12 max-w-md mx-auto lg:max-w-none lg:w-5/12 ">
          <img className="rounded-lg shadow-2xl" src={thumbnail.url}></img>
        </div>
        <div className="flex flex-col justify-between w-11/12 max-w-md mx-auto lg:max-w-none lg:w-7/12 lg:pl-8">
          <div>
            <h4 className="my-1 text-base font-semibold lg:text-4xl text-thunder lg:my-0">
              {title}
            </h4>
            <h2 className="my-1 text-sm italic font-normal lg:text-xl text-darkTurquoise lg:mt-2">
              By {author} - {upload_date}
            </h2>
          </div>

          <p className="my-1 font-light text-justify font-Montserrat lg:my-0">
            {description}
          </p>
          <a>
            <button className="self-start w-24 h-8 my-1 text-white rounded-lg lg:my-0 lg:h-10 bg-darkTurquoise hover:bg-irisBlue focus:outline-none">
              <p>Read More</p>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default LatestBlogs
