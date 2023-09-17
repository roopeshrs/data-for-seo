import {configureStore} from '@reduxjs/toolkit'
import pageMetricsSlice from './pageMetricsSlice';

const store = configureStore({
    reducer: {
        pageMetrics: pageMetricsSlice,
    }
})

export default store;