
import { api } from "./apiUser";

export const ApiAuth = api.injectEndpoints({
    reducerPath: "apiUser",
    endpoints: (build) => ({
        getConsoltingsOrder: build.query({
            query: ({ page, limit }) => `consoltings-order?page=${page}&limit=${limit}`,
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
            providesTags: ["consoltings-order"],
        }),
        getConsoltingsOrderId: build.query({
            query: (id) => `/consoltings-order/${id}`,
            providesTags: ["consoltings-order"],
        }),
        addConsoltingsOrder: build.mutation({
            query: (data) => ({
                url: '/consoltings-order',
                method: 'POST',
                body: data,
                formData: true,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
            invalidatesTags: ['consoltings-order'],
        }),
        editConsoltingsOrder: build.mutation({
            query: ({ formData, id }) => ({
                url: `/consoltings-order/${id}`,
                method: 'PATCH',
                body: formData,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
            invalidatesTags: ['consoltings-order'],
        }),
        deleteConsoltingsOrder: build.mutation({
            query: (id) => ({
                url: `/consoltings-order/${id}`,
                method: 'Delete',
                body: build,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
            invalidatesTags: ['consoltings-order'],
        }),
    }),
});


export const {
    useGetConsoltingsOrderQuery,
    useAddConsoltingsOrderMutation,
    useEditConsoltingsOrderMutation,
    useGetConsoltingsOrderIdQuery,
    useDeleteConsoltingsOrderMutation
} = ApiAuth;