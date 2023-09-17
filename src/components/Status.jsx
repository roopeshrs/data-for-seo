import React from 'react'
import { useSelector } from 'react-redux'

const Status = ({isLoading}) => {
  const data = useSelector(store => store.pageMetrics.data)
  return (
    isLoading ? (
    <div className='flex flex-col justify-center items-center my-8'>
        <h3 className='font-semibold text-xl'>Hang on, we are analyzing your page...</h3>
        <p className='text-sm font-semibold py-2'>This may take a few minutes. Please do not close this window.</p>
    </div>) : (
        <h2 className='text-4xl font-semibold text-center py-4'>Results for {data.url}</h2>
    ) 
  )
}

export default Status