import React, { FC, ReactElement } from 'react'
import Layout from '@components/Layout'
import From from '@components/Form'

import { ContactProps } from '@customTypes/ContactProps'

const env = process.env.NODE_ENV
const devApiUrl = 'http://localhost:1337'
const prodApiUrl = 'https://hidden-reef-22167.herokuapp.com'

const Contact: FC<ContactProps> = () => {
  return (
    <>
      <div className="pt-4 pb-2 mx-auto text-2xl font-bold text-center font-Montserrat text-thunder lg:text-4xl">
        <h2>Contact Me</h2>
      </div>
      <From />
    </>
  )
}

;(Contact as any).getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Contact
