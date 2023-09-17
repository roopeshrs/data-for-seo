import React from 'react'
import {useForm} from 'react-hook-form'
import {makeApiRequest} from '../../utils/helperFunctions';
import { useDispatch } from 'react-redux';
import { addScreenshot, addData, removeScreenshot, removeData } from '../../utils/pageMetricsSlice';

const Input = ({setIsLoading, setIsSubmit}) => {
  const dispatch = useDispatch();
  const {register, handleSubmit, formState: {errors}, reset} = useForm();
  const onSubmit = (data) => {
    dispatch(removeScreenshot())
    dispatch(removeData())
    reset();
    setIsSubmit(true);
    createTask(data.url);
  }
  const createTask = async (url) => {
    try {
      setIsLoading(true)
      const payload = [
        {
          target: url,
          max_crawl_pages: 10,
          load_resources: true,
          enable_javascript: true,
          enable_browser_rendering: true,
        },
      ]
      const data = await makeApiRequest('https://sandbox.dataforseo.com/v3/on_page/task_post', payload);
      const taskId = data.tasks[0].id;
      getScreenshot(url);
      getPageMetrics(taskId);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  }
  const getScreenshot = async (url) => {
    try {
      const payload = [{ url }];
      const data = await makeApiRequest('https://sandbox.dataforseo.com/v3/on_page/page_screenshot', payload);
      const image = data.tasks[0].result[0].items[0].image;
      dispatch(addScreenshot(image));
    } catch (error) {
      console.log(error);
    }
  }
  const getPageMetrics = async (id) => {
    try {
      const payload = [{ id }];
      const data = await makeApiRequest('https://sandbox.dataforseo.com/v3/on_page/pages', payload);
      const page = data.tasks[0].result[0].items[0];
      dispatch(addData(page));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  }
  return (
    <div className='flex-col shadow-lg'>
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className='flex sm:flex-col w-full justify-center gap-8 sm:gap-3 py-4 sm:px-4'
      >
        <input 
          type='text' 
          placeholder='Website URL' 
          {...register("url", {
            required: "URL required", 
            pattern: {
              value: /^((https?):\/\/)?(www.)?[a-z0-9]+\.[a-z]+\.?([a-z]+)?\/?([a-zA-Z0-9\-#]+\.?([a-z]+)?\/?)*$/i, 
              message: "Invalid URL"
            }})
          } 
          className='outline-none border border-gray-300 rounded p-2 font-semibold'
          aria-label='Website URL'
        />
        <button 
          type='submit' 
          className='bg-[#0451e5] hover:bg-[#161fdc] text-white px-4 sm:py-2 rounded'
          aria-label='Evaluate Performance'
        >Evaluate Performance</button>
      </form>
      {errors.url && <p className='text-red-800 text-md font-semibold text-center pb-2'>{errors.url.message}</p>}
    </div>
  )
}

export default Input