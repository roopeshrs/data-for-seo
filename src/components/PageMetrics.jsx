import React from 'react'
import Screenshot from './Screenshot'
import Status from './Status'
import OnPageResults from './OnPageResults'

const PageMetrics = ({isLoading}) => {
  return (
    <>
      <div className='w-11/12 mx-auto my-8 flex flex-col justify-center items-center'>
          <Screenshot isLoading={isLoading} />
          <Status isLoading={isLoading} />
          <OnPageResults />
      </div>
    </>
  )
}

export default PageMetrics