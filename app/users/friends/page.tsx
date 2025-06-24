import React from 'react'
// server component version

async function MakePostRequest() {
  const res = await fetch(`${process.env.NEXT_URL}/api/hello`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({name: "John"}),
  })
  const data = await res.json()
  return {data}
}

const page = async () => {
  const {data} = await MakePostRequest()
  return (
    <div>
      <h1>Friends</h1>
      <p>{data.message}</p>
    </div>
  )
}

export default page
