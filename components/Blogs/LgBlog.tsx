import React, { FC } from 'react'
import { BlogProps } from '@customTypes/BlogsProps'
import router from 'next/router'

const LgBlog: FC<BlogProps> = ({ blog }) => {
  const { id, title, thumbnail, author, upload_date, description } = blog
  return (
    // <div className="w-10/12 mx-auto mt-8 mb-8 lg:mt-16 lg:mb-16">
    //   <div className="flex flex-col justify-center lg:flex-row">
    //     <div className="w-11/12 lg:w-5/12 ">
    //       <img
    //         className="max-w-lg rounded-lg shadow-2xl"
    //         src={thumbnail.url}
    //       ></img>
    //     </div>
    //     <div className="flex flex-col justify-between w-11/12 max-w-md lg:max-w-xl lg:w-7/12 lg:pl-8">
    //       <div>
    //         <h4 className="mt-4 mb-1 text-lg font-semibold lg:text-4xl text-thunder lg:my-0">
    //           {title}
    //         </h4>
    //         <h2 className="my-1 text-sm italic font-normal lg:text-xl text-irisBlue lg:mt-2">
    //           By {author} - {upload_date}
    //         </h2>
    //       </div>

    //       <p className="my-1 font-light text-justify font-Montserrat lg:my-0">
    //         {description}
    //       </p>
    //       <a>
    //         <button
    //           type="button"
    //           onClick={() => router.push(`/blog/${id}`)}
    //           className="self-start w-24 h-8 my-1 text-white rounded-lg lg:my-0 lg:h-10 bg-irisBlue hover:bg-darkTurquoise focus:outline-none"
    //         >
    //           <p>Read More</p>
    //         </button>
    //       </a>
    //     </div>
    //   </div>
    // </div>

    <div className="flex flex-col w-full max-w-6xl mt-8 mb-8 lg:mt-16 lg:mb-16 lg:flex-row">
      <div className="w-11/12 mx-auto md:w-8/12 lg:w-6/12">
        <img className="rounded-lg shadow-2xl " src={thumbnail.url}></img>
      </div>
      <div className="flex flex-col justify-between w-11/12 mx-auto md:w-8/12 lg:w-6/12 lg:pl-8 2xl:pr-12">
        <div>
          <h2 className="text-lg font-semibold lg:text-3xl xl:text-4xl text-thunder lg:my-0">
            {title}
          </h2>
          <h2 className="my-1 text-sm italic font-normal lg:text-xl text-irisBlue lg:mt-2">
            By {author} - {upload_date}
          </h2>
        </div>
        <div>
          <p className="my-1 font-light text-justify line-clamp-6 lg:line-clamp-5 xl:line-clamp-none font-Montserrat lg:my-0 ">
            {description}
          </p>
        </div>
        <button
          type="button"
          onClick={() => router.push(`/blog/${id}`)}
          className="self-start w-24 h-8 my-1 text-white rounded-lg lg:my-0 lg:h-10 bg-irisBlue hover:bg-darkTurquoise focus:outline-none"
        >
          <p>Read More</p>
        </button>
      </div>
    </div>
  )
}

export default LgBlog
