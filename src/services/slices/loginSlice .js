import { createSlice } from '@reduxjs/toolkit'
const loginSlice = createSlice({
  name: 'loginData',
  initialState: {
    access: '',
    refresh: ''
  },
  reducers: {
    addLoginData: (state, action) => {
      state.access = action.payload.access
      if (action.payload.refresh) {
        state.refresh = action.payload.refresh
      }
    }
  }
})
export const { addLoginData } = loginSlice.actions
export default loginSlice.reducer
