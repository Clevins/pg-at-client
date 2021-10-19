export interface IBlog {
  id: string
  title: string
  author: string
  upload_date: string
  description: string
  content: string
  read_time: string
  Hero: {
    url: string
  }
  thumbnail: {
    url: string
  }
}

export type BlogsProps = {
  blogs: IBlog[]
}

export type BlogProps = {
  blogData: IBlog
}
