"use client"
import React, { useState } from 'react'

async function MakePostRequest() {
  const res = await fetch("/api/hello", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({name: "Patty"}),
  })
  const data = await res.json()
  return {data}
}

const page = () => {
  const [message, setMessage] = useState("")
  const onClick = async () => {
    const {data} = await MakePostRequest()
    setMessage(data.message)
  }
  return (
    <div>
      <h1>Friends</h1>
      <p>{message}</p>
      <button onClick={onClick}>Click me</button>
    </div>
  )
}

export default page
