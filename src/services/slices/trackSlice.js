import { createSlice } from '@reduxjs/toolkit'
const trackSlice = createSlice({
  name: 'track',
  initialState: {
    trackData: [
      {
        indexSong: ''
      }
    ]
  },
  reducers: {
    addTrackData(state, acton) {
      state.trackData = [
        {
          indexSong: acton.payload.indexSong
        }
      ]
    }
  }
})
export const { addTrackData } = trackSlice.actions
export default trackSlice.reducer
