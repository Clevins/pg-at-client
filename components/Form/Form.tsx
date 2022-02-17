import React, { FunctionComponent } from 'react'
import { FormProps } from '@customTypes/FormProps'
import Field from '@components/Form/Field'
import { InputType } from '@customTypes/FieldProps'

const Form: FunctionComponent<FormProps> = () => {
  return (
    <>
      <div className="w-4/5 mx-auto lg:w-3/5 max-w-192">
        <div className="flex flex-col mx-auto ">
          <Field title={'Name'} placeholder={''} type={InputType.text} />
          <Field title={'Email'} placeholder={''} type={InputType.email} />
          <Field title={'Subject'} placeholder={''} type={InputType.text} />
          <Field title={'Message'} placeholder={''} type={InputType.textarea} />
          <button
            type="button"
            className="w-24 h-8 mx-auto mt-5 text-white rounded-lg lg:mt-10 lg:h-10 bg-irisBlue hover:bg-darkTurquoise focus:outline-none"
          >
            <p>Read More</p>
          </button>
        </div>
      </div>
    </>
  )
}
export default Form
