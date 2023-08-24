import React from 'react'

const ButtonThree = (props) => {
  return (
    <button className='px-8 lg:px-11 py-4 lg:py-7 text-base lg:text-[20px] text-primary font-bold bg-theme-yellow rounded-2xl font-roboto inline-block'>{props.title}</button>
  )
}

export default ButtonThree