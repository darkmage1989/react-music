import { createSlice } from '@reduxjs/toolkit'
const songsSlice = createSlice({
  name: 'songsData',
  initialState: {
    songArr: []
  },
  reducers: {
    addSongsData: (state, actions) => ({
      ...state,
      songArr: actions.payload.filteredData
    })
  }
})
export const { addSongsData } = songsSlice.actions
export default songsSlice.reducer
