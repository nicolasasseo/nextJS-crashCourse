import React from 'react'

const userLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <h1 className='text-2xl font-bold text-red-500'>User Layout</h1>
      {children}
    </div>
  )
}

export default userLayout
