import { configureStore } from '@reduxjs/toolkit'
import { trackApi, userApi } from '../services/apis'
import trackReducer from '../services/slices/trackSlice'
import LoginData from '../services/slices/loginSlice '
import filterData from '../services/slices/filterSlice '
import songsData from '../services/slices/songsSlice'

export const store = configureStore({
  reducer: {
    track: trackReducer,
    [trackApi.reducerPath]: trackApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    LoginData,
    filterData,
    songsData
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(trackApi.middleware)
      .concat(userApi.middleware)
})
