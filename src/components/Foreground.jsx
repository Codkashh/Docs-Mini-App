import React from 'react'
import Card from './Card'
function Foreground() {
    const data = [
        {
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            filesize:".10mb",
            close: true,
            tag: {isOpen:true, tagTitle:"Download Now", tagColor:"green" },
        },
    ]
  return (
    <>
        <div className='fixed top-0 left-0  z-[3] w-full h-full'>
            <Card />
        </div>
    </>
  )
}

export default Foreground
