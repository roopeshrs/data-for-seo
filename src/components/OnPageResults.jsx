import React from 'react'
import { useSelector } from 'react-redux'
import CircularProgress from './CircularProgress'

const OnPageResults = () => {
  const data = useSelector(store => store.pageMetrics.data)
  if(Object.keys(data).length === 0){
    return null;
  }
  return (
    <>
      <div className='py-5 flex flex-col justify-center items-center'>
        <CircularProgress size={150} strokeWidth={10} percentage={Math.floor(data?.onpage_score)} color="green" />
        <h3 className='text-xl py-2'>On-Page Score</h3>
      </div>
      <div className='flex flex-wrap my-8 justify-center'>
          <div className='w-72 px-2 mb-5'>
            <div className="property-container">
              <p className='font-semibold text-xl'>{data?.meta?.internal_links_count}</p>
              <h3 className='text-center'>Internal Links</h3>
            </div>
          </div>
          <div className='w-72 px-2 mb-5'>
            <div className="property-container">
              <p className='font-semibold text-xl'>{data?.meta?.external_links_count}</p>
              <h3 className='text-center'>External Links</h3>
            </div>
          </div>
          <div className='w-72 px-2 mb-5'>
            <div className="property-container">
              <p className='font-semibold text-xl'>{data?.meta?.images_count}</p>
              <h3 className='text-center'>Number of Images</h3>
            </div>
          </div>
          <div className='w-72 px-2 mb-5'>
            <div className="property-container">
              <p className='font-semibold text-xl'>{data?.meta?.images_size}</p>
              <h3 className='text-center'>Images Size</h3>
            </div>
          </div>
          <div className='w-72 px-2 mb-5'>
            <div className="property-container">
              <p className='font-semibold text-xl'>{data?.meta?.scripts_count}</p>
              <h3 className='text-center'>Scripts</h3>
            </div>
          </div>
          <div className='w-72 px-2 mb-5'>
            <div className="property-container">
              <p className='font-semibold text-xl'>{data?.meta?.scripts_size}</p>
              <h3 className='text-center'>Scripts Size</h3>
            </div>
          </div>
          <div className='w-72 px-2 mb-5'>
            <div className="property-container">
              <p className='font-semibold text-xl'>{data?.meta?.content?.plain_text_size}</p>
              <h3 className='text-center'>Plain Text Size</h3>
            </div>
          </div>
          <div className='w-72 px-2 mb-5'>
            <div className="property-container">
              <p className='font-semibold text-xl'>{data?.meta?.content?.plain_text_rate.toFixed(2)}</p>
              <h3 className='text-center'>Plain Text Rate</h3>
            </div>
          </div>
          <div className='w-72 px-2 mb-5'>
            <div className="property-container">
              <p className='font-semibold text-xl'>{data?.meta?.content?.plain_text_word_count}</p>
              <h3 className='text-center'>Plain Text Word Count</h3>
            </div>
          </div>
          <div className='w-72 px-2 mb-5'>
            <div className="property-container">
              <p className='font-semibold text-xl'>{data?.meta?.content?.automated_readability_index.toFixed(2)}</p>
              <h3 className='text-center'>Automated Readability Index</h3>
            </div>
          </div>
          <div className='w-72 px-2 mb-5'>
            <div className="property-container">
              <p className='font-semibold text-xl'>{data?.meta?.content?.coleman_liau_readability_index.toFixed(2)}</p>
              <h3 className='text-center'>Coleman Liau Readability Index</h3>
            </div>
          </div>
          <div className='w-72 px-2 mb-5'>
            <div className="property-container">
              <p className='font-semibold text-xl'>{data?.meta?.content?.dale_chall_readability_index.toFixed(2)}</p>
              <h3 className='text-center'>Dale Chall Readability Index</h3>
            </div>
          </div>
          <div className='w-72 px-2 mb-5'>
            <div className="property-container">
              <p className='font-semibold text-xl'>{data?.meta?.content?.flesch_kincaid_readability_index.toFixed(2)}</p>
              <h3 className='text-center'>Flesch Kincaid Readability Index</h3>
            </div>
          </div>
          <div className='w-72 px-2 mb-5'>
            <div className="property-container">
              <p className='font-semibold text-xl'>{data?.meta?.content?.smog_readability_index.toFixed(2)}</p>
              <h3 className='text-center'>Smog Readability Index</h3>
            </div>
          </div>
          <div className='w-72 px-2 mb-5'>
            <div className="property-container">
              <p className='font-semibold text-xl'>{data?.meta?.content?.title_to_content_consistency.toFixed(2)}</p>
              <h3 className='text-center'>Title to Content Consistency</h3>
            </div>
          </div>
      </div>
    </>
  )
}

export default OnPageResults