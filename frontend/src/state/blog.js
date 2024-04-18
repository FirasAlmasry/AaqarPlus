
import { api } from "./apiUser";

export const ApiAuth = api.injectEndpoints({
  reducerPath: "apiUser",
  endpoints: (build) => ({
    getBlogs: build.query({
      query: ({lng, currentPage}) => `/blogs?local=${lng}&page=${currentPage}&per_page=9`,
      providesTags: ["blogs"],
    }),
    getBlogsId: build.query({
      query: ({ id, lng }) => `/blogs/${id}?local=${lng}`,
      providesTags: ["blogs"],
    }),
  }),
});


export const {
  useGetBlogsQuery,
  useGetBlogsIdQuery
} = ApiAuth;