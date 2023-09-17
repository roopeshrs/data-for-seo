import React from 'react'
import { useSelector } from 'react-redux'

const Screenshot = ({isLoading}) => {
  const screenshot = useSelector(store => store.pageMetrics.screenshot)
  // const screenshot = 'https://api.dataforseo.com/cdn/screenshot/09170104-5830-0444-0000-cbcdac7f6fc9';
  return (
    <div className='w-[320px] h-[160px] border border-gray-400 rounded flex items-center justify-center relative'>
      {isLoading && <div className='line'></div>}
      {screenshot ? <img src={screenshot} /> : <p className='font-semibold text-xl text-center'>Image will not display<br/> using sandbox api</p>}
    </div>
  )
}

export default Screenshot