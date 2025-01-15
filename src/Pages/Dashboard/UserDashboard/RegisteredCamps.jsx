import useRegCamp from '@/Hooks/useRegCamp'
import React from 'react'

const RegisteredCamps = () => {
  const [regCamp]=useRegCamp()
  console.log(regCamp);
  return (
    <div>
      <h1>RegisteredCamps: {regCamp.length}</h1>
    </div>
  )
}

export default RegisteredCamps