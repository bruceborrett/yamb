import React from "react"

import { Field, ErrorMessage, FieldProps } from "formik"

type Props = {
  name: string
  type?: 'text' | 'email' | 'password' | 'number'
  placeholder?: string
  required?: boolean
  label?: string
  className?: string
}

export const Input = (props: Props) => {
  const name = props.name
  const type = 'type' in props ? props.type : 'text'
  const placeholder = 'placeholder' in props ? props.placeholder : ''
  const required = 'required' in props ? props.required : false
  const label = 'label' in props ? props.label : null
  const className = 'className' in props ? props.className : ''

  return (
    <div className={`${className}`}>
      {label && (
        <label
        htmlFor={name}
        className="block text-xs capitalize text-center mb-1">
          {props.label}
        </label>
      )}
      <Field name={name}>
        {({ field, form }: FieldProps) => {
          const error = form.errors[name]
          const touched = form.touched[name]
          return (
            <input
              id={name}
              type={type}
              name={name}
              className={`py-3 w-full rounded-full border border-gray-600 text-center transition-all
              text-xs focus:outline-none focus:border-none focus:ring focus:ring-purple-800 ease-in-out
              text-gray-700 ${error && touched && "border-none ring ring-red-600"}`}
              placeholder={placeholder}
              required={required}
              defaultValue={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
            />
          )
        }}
      </Field>
      <p className="text-red-600 text-xs capitalize mt-2 block">
        <ErrorMessage name={name} />
      </p>
    </div>
  )
}
