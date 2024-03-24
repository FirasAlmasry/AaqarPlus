
import { api } from "./apiUser";

export const ApiAuth = api.injectEndpoints({
    reducerPath: "apiUser",
    endpoints: (build) => ({
        getConsoltings: build.query({
            query: ({ page, limit }) => `consoltings?page=${page}&limit=${limit}`,
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
            providesTags: ["consoltings"],
        }),
        getConsoltingsId: build.query({
            query: (id) => `/consoltings/${id}`,
            providesTags: ["consoltings"],
        }),
        addConsoltings: build.mutation({
            query: (formData) => ({
                url: '/consoltings',
                method: 'POST',
                body: formData,
                formData: true
            }),
            invalidatesTags: ['consoltings'],
        }),
        editConsoltings: build.mutation({
            query: ({ formData, id }) => ({
                url: `/consoltings/${id}`,
                method: 'PATCH',
                body: formData,
                formData: true,
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
            }),
            invalidatesTags: ['consoltings'],
        }),
        deleteConsoltings: build.mutation({
            query: (id) => ({
                url: `/consoltings/${id}`,
                method: 'Delete',
                body: build,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
            invalidatesTags: ['consoltings'],
        }),
    }),
});


export const {
    useGetConsoltingsQuery,
    useAddConsoltingsMutation,
    useEditConsoltingsMutation,
    useGetConsoltingsIdQuery,
    useDeleteConsoltingsMutation
} = ApiAuth;