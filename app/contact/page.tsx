import React from 'react'
import ButtonComponent from './button'
const page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await res.json()
  console.log(data)
  return (
    <div>
      <ButtonComponent />
    </div>
  )
}

export default page
