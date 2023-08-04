import { createSlice } from '@reduxjs/toolkit'
const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    author: '',
    genre: '',
    release_date: ''
  },
  reducers: {
    addFilterData: (state, action) => {
      if (action.payload.author) {
        state.author = action.payload.author
      }
      if (action.payload.genre) {
        state.genre = action.payload.genre
      }
      if (action.payload.filterDate) {
        state.filterDate = action.payload.filterDate
      }
    }
  }
})
export const { addFilterData } = filterSlice.actions
export default filterSlice.reducer
