import React, { FunctionComponent } from 'react'
import { FieldProps, InputType } from '@customTypes/FieldProps'

const Field: FunctionComponent<FieldProps> = ({ title, placeholder, type }) => {
  return (
    <>
      <div className="w-full mt-4 ">
        <label>{title}:</label>
        {type === InputType.textarea ? (
          <textarea className="w-full px-4 py-2 bg-gray-100 border-2 border-gray-700 rounded appearance-none focus:outline-none focus:border-irisBlue"></textarea>
        ) : (
          <input
            className="w-full px-4 py-2 bg-gray-100 border-2 border-black rounded appearance-none focus:outline-none focus:border-irisBlue"
            placeholder={placeholder}
            type={type}
          />
        )}
      </div>
    </>
  )
}
export default Field
