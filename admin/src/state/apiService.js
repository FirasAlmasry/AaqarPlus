
import { api } from "./apiUser";

export const ApiAuth = api.injectEndpoints({
  reducerPath: "apiUser",
  endpoints: (build) => ({
    getServices: build.query({
      query: ({ page, limit }) => `services?page=${page}&limit=${limit}`,
      // Only have one cache entry because the arg always maps to one string
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      // Always merge incoming data to the cache entry
      merge(currentCacheData, responseData, _meta, args) {
        if (responseData.data.page === 1 && !currentCacheData.data.page) {
          return responseData;
        }
        if (responseData.data.page > currentCacheData.data.page) {
          currentCacheData.data.users.push(...responseData.data.users);
          currentCacheData.data.page = responseData.data.page
          return currentCacheData;
        }
        return currentCacheData
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
      providesTags: ["services"],
    }),
    getServicesId: build.query({
      query: (id) => `/services/${id}`,
      providesTags: ["services"],
    }),
    addServices: build.mutation({
      query: (formData) => ({
        url: '/services',
        method: 'POST',
        body: formData,
        formData: true,
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
      }),
      invalidatesTags: ['services'],
    }),
    editServices: build.mutation({
      query: ({ formData, id }) => ({
        url: `/services/${id}`,
        method: 'PATCH',
        body: formData,
        formData: true,
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
      }),
      invalidatesTags: ['services'],
    }),
    deleteServices: build.mutation({
      query: (id) => ({
        url: `/services/${id}`,
        method: 'Delete',
        body: build,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['services'],
    }),
  }),
});


export const {
  useGetServicesQuery,
  useAddServicesMutation,
  useEditServicesMutation,
  useGetServicesIdQuery,
  useDeleteServicesMutation
} = ApiAuth;