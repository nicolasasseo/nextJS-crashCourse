import React from 'react'
import Link from 'next/link'

const users = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await res.json()

  return (
    <ul>
      {users.map((user: {id: number; name: string}) => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`}>
            <h3>{user.name}</h3>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default users
