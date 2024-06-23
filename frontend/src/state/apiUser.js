import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    mode: 'cors',
    baseUrl: 'https://api.aqarpluseg.com/api',
    prepareHeaders: (headers, { getState }) => { 
      headers.set("Accept", "application/json") 
      headers.set("Cache-Control", "no-cache");
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
      }),
      invalidatesTags: ['users'],
    }),
    editUser: build.mutation({
      query: ({ formData, id }) => ({
        url: `/users/${id}`,
        method: 'post',
        body: formData, 
    }), 
    invalidatesTags: ['users'],
  }),
    deleteUser: build.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'Delete',
        body: build,
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