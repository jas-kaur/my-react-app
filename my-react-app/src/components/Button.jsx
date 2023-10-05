import React from 'react'

const variants = {
    default: 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none',
    alternative: 'text-gray-900 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200'
}

const Button = ({ variant = 'default', children}) => {
  return (
    <button 
        className={`text-sm px-5 py-2.5 mr-2 mb-2 font-medium rounded-lg ${variants[variant]}`}
    >
       {children}
    </button>
  )
}

export default Button
