import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const api = createApi({
  baseQuery: fetchBaseQuery({
    mode: 'cors',
    baseUrl: 'https://aqarbackend.revampbrands.com/api/admin',
    prepareHeaders: (headers, { getState }) => {
      headers.set('Authorization', `Bearer ${localStorage.getItem('accessToken')}`) 
      // headers.set('Authorization', `Bearer 47|kXdXMgngSi7fwPF4L2icZXAbSwUCdPcUqASPW8HI219bd80b`)
      return headers
    } 
  }),
  reducerPath: "apiUser",
  tagTypes: ["User"],
  endpoints: (build) => ({
    getUser: build.query({
      query: () => `/users`,
      providesTags: ["users"],
    }),
    getUserId: build.query({
      query: (id) => `/users/${id}`,
      providesTags: ["users"],
    }),
    addUser: build.mutation({
      query: (formData) => ({
        url: '/users',
        method: 'POST',
        body: formData,
        formData: true,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }, 
      }),
      invalidatesTags: ['users'],
    }),
    editUser: build.mutation({
      query: ({ formData, id }) => ({
        url: `/users/${2}`,
        method: 'POST',
        body: formData,
        formData: true,
      }),
      invalidatesTags: ['users'],
    }),
    deleteUser: build.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'Delete',
        body: build,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['users'],
    }),
  }),
});


export const {
  useGetUserQuery,
  useAddUserMutation,
  useEditUserMutation,
  useGetUserIdQuery,
  useDeleteUserMutation
} = api;