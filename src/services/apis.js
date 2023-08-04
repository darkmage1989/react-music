import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const trackApi = createApi({
  reducerPath: 'trackApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://painassasin.online/'
  }),
  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => 'catalog/track/all/'
    }),
    getAllSelections: builder.query({
      query: () => 'catalog/selection/'
    }),
    getAllFavorite: builder.query({
      query: (token) => ({
        url: 'catalog/track/favorite/all/',
        method: 'GET',
        headers: { authorization: `Bearer ${token}` }
      })
    }),
    likeSong: builder.mutation({
      query: ({ id, access }) => {
        return {
          url: `catalog/track/${id}/favorite/`,
          method: 'POST',
          headers: { authorization: `Bearer ${access}` }
        }
      }
    }),
    dislikeSong: builder.mutation({
      query: ({ id, access }) => {
        return {
          url: `catalog/track/${id}/favorite/`,
          method: 'DELETE',
          headers: { authorization: `Bearer ${access}` }
        }
      }
    })
  })
})
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://painassasin.online/'
  }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (body) => ({
        url: 'user/signup/',
        method: 'POST',
        body
      })
    }),
    logIn: builder.mutation({
      query: (body) => ({
        url: 'user/login/',
        method: 'POST',
        body
      })
    }),
    getToken: builder.mutation({
      query: (body) => ({
        url: 'user/token/',
        method: 'POST',
        body
      })
    }),
    refreshToken: builder.mutation({
      query: (body) => ({
        url: 'user/token/refresh/',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetAllTracksQuery,
  useGetAllSelectionsQuery,
  useGetAllFavoriteQuery,
  useLikeSongMutation,
  useDislikeSongMutation
} = trackApi
export const {
  useSignUpMutation,
  useLogInMutation,
  useGetTokenMutation,
  useRefreshTokenMutation
} = userApi
