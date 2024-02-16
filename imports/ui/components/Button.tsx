import React from 'react'

const contextClasses = {
  primary: "bg-blue-900 hover:bg-blue-800 text-white",
  secondary: "bg-purple-800 hover:bg-purple-700 text-white",
  success: "bg-lime-600 hover:bg-lime-500 text-white",
  danger: "bg-red-600 hover:bg-red-500 text-white",
  warning: "bg-yellow-500 hover:bg-yellow-400 text-white",
  info: "bg-teal-500 hover:bg-teal-400 text-white",
  light: "bg-gray-100 hover:bg-gray-200 text-gray-700",
  dark: "bg-gray-800 hover:bg-gray-700 text-white",
  link: "bg-transparent hover:bg-transparent text-gray-700",
}

type Props = {
  type?: "button" | "submit" | "reset",
  context?: keyof typeof contextClasses,
  children: string | React.ReactNode,
  className?: string,
  tight?: boolean,
  [x:string]: any;
}

export const Button = (props: Props) => {
  const { type, context, children, className, tight, ...rest } = props

  return (
    <button
      type={type || "button"}
      className={`rounded-full text-xs font-light disabled:cursor-not-allowed
      ${tight ? "px-2 py-1" : "px-4 py-3"}
      ${contextClasses[context || "primary"]}
      ${className || ""}`}
      {...rest}
    >{children}</button>
  )
}
