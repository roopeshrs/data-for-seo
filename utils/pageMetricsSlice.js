import {createSlice} from '@reduxjs/toolkit'

const pageMetricsSlice = createSlice({
    name: 'pageMetrics',
    initialState: {
        screenshot: null,
        data: {}
    },
    reducers: {
        addScreenshot: (state, action) => {
            state.screenshot = action.payload;
        },
        addData: (state, action) => {
            state.data = action.payload;
        },
        removeScreenshot: (state) => {
            state.screenshot = null;
        },
        removeData: (state) => {
            state.data = {};
        }
    }
})

export const {addScreenshot, addData, removeScreenshot, removeData} = pageMetricsSlice.actions;
export default pageMetricsSlice.reducer;