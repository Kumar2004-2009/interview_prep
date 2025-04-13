import AuthForm from '@/components/AuthForm'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <AuthForm type="sign-in" />
    </div>
  )
}

export default page
