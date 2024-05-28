
import { api } from "./apiUser";

export const ApiAuth = api.injectEndpoints({
    reducerPath: "apiUser",
    endpoints: (build) => ({
        getFounders: build.query({
            query: (type) => `/founders?type=${type}&per_page=4`,
            providesTags: ["founders"],
        }),
        getFoundersId: build.query({
            query: (id) => `/founders/${id}`,
            providesTags: ["founders"],
        }),
        addFounders: build.mutation({
            query: (formData) => ({
                url: '/founders',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['founders'],
        }),
        editFounders: build.mutation({
            query: ({ formData, id }) => ({
                url: `/founders/${id}`,
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['/founders'],
        }),
        deleteFounders: build.mutation({
            query: (id) => ({
                url: `/founders/${id}`,
                method: 'Delete',
                body: build,
            }),
            invalidatesTags: ['/founders'],
        }),
    }),
});


export const {
    useGetFoundersQuery,
    useAddFoundersMutation,
    useEditFoundersMutation,
    useGetFoundersIdQuery,
    useDeleteFoundersMutation
} = ApiAuth;