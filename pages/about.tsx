import React, { FC, ReactElement } from 'react'
import { GetStaticProps } from 'next'
import Layout from '@components/Layout'
import handleFetchError from 'lib/handleFetchError'
import AboutMeSection from '@components/AboutMe'
import { AboutMeProps } from '@customTypes/AboutMeProps'

const env = process.env.NODE_ENV
const devApiUrl = 'http://localhost:1337'
const prodApiUrl = 'https://hidden-reef-22167.herokuapp.com'

console.log(process.env.NODE_ENV)

const AboutMe: FC<AboutMeProps> = ({ data }) => {
  console.log(data)
  return (
    <>
      <AboutMeSection
        profileImage={data.Home_ProfileImage}
        aboutMeSections={data.Home_AboutMe}
      />
    </>
  )
}

;(AboutMe as any).getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export const getStaticProps: GetStaticProps = async () => {
  let data = {}

  const apiUrl = env === 'development' ? devApiUrl : prodApiUrl

  if (!apiUrl) {
    return {
      notFound: true,
    }
  }

  data = await getHomeData(apiUrl)

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data },
  }
}

async function getHomeData(apiUrl: string) {
  const res = await fetch(`${apiUrl}/home`)
  const data = await res.json()
  handleFetchError(data, 'Error with Homepage request')
  return data
}

export default AboutMe
