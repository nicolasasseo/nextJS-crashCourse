 import React from 'react'
 import Link from 'next/link'
 
 const NotFoundPage = () => {
   return (
     <div className='flex flex-col items-center justify-center h-screen'>
       <h1 className='text-4xl font-bold text-center'>404 - Page Not Found</h1>
       <p className='text-lg'>The page you are looking for does not exist.</p>
       <Link href="/" className='text-blue-500'>Go back to the home page</Link>
     </div>
   )
 }
 
 export default NotFoundPage
 