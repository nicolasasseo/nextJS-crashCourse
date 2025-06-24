import React from 'react'
import { notFound } from 'next/navigation'

async function fetchUser(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  if (!res.ok) {
    notFound()
  }
  const user = await res.json()
  return user
}

const userPage = async ({params}: {params: Promise<{userId: string}>}) => {
  const {userId} = await params
  const user = await fetchUser(userId)

  return (
    <div>
      <h1>{user.name}</h1>
      <p><strong>Email: </strong>{user.email}</p>
    </div>
  )

}

export default userPage
