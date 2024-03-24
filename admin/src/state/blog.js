
import { api } from "./apiUser";

export const ApiAuth = api.injectEndpoints({
  reducerPath: "apiUser",
  endpoints: (build) => ({
    getBlogs: build.query({
        query: () =>`/blogs`,
        providesTags: ["blogs"],
      }),
    getBlogsId: build.query({
      query: (id) => `/blogs/${id}?local=none`,
      providesTags: ["blogs"],
    }),
    addBlogs: build.mutation({
      query: (formData) => ({
        url: '/blogs',
        method: 'POST',
        body: formData,
        formData: true,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['blogs'],
    }),
      editBlogs: build.mutation({
        query: ({formData,id}) => ({
          url: `/blogs/${id}`,
          method: 'POST',
          body: formData,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }),
        invalidatesTags: ['/blogs'],
      }),
      deleteBlogs: build.mutation({
        query: (id) => ({
          url: `/blogs/${id}`,
          method: 'Delete',
          body: build,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }),
        invalidatesTags: ['/blogs'],
      }),
  }),
});


export const {
    useGetBlogsQuery,
  useAddBlogsMutation,
  useEditBlogsMutation,
  useGetBlogsIdQuery,
  useDeleteBlogsMutation
} = ApiAuth;