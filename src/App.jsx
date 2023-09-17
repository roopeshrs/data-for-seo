import React, {useState} from 'react'
import Input from './components/Input'
import PageMetrics from './components/PageMetrics';
import {Provider} from 'react-redux';
import store from '../utils/store';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  return (
    <>
      <Provider store={store}>
        <Input setIsLoading={setIsLoading} setIsSubmit={setIsSubmit} />
        {isSubmit && <PageMetrics isLoading={isLoading}/>}
      </Provider>
    </>
  )
}

export default App