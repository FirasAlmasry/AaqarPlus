
import { api } from "./apiUser";

export const ApiAuth = api.injectEndpoints({
  reducerPath: "apiUser",
  endpoints: (build) => ({
    getBlogs: build.query({
      query: ({ currentPage, limit }) =>`/blogs?page=${currentPage}&per_page=${limit}`,
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
      }),
      invalidatesTags: ['blogs'],
    }),
      editBlogs: build.mutation({
        query: ({formData,id}) => ({
          url: `/blogs/${id}`,
          method: 'POST',
          body: formData,
        }),
        invalidatesTags: ['/blogs'],
      }),
      deleteBlogs: build.mutation({
        query: (id) => ({
          url: `/blogs/${id}`,
          method: 'Delete',
          body: build,
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