
import { api } from "./apiUser";

export const ApiAuth = api.injectEndpoints({
    reducerPath: "apiUser",
    endpoints: (build) => ({
        getCountry: build.query({
            query: ({ currentPage, limit }) => `/countries?page=${currentPage}&per_page=${limit}`,
            providesTags: ["countries"],
        }),
        getCountryId: build.query({
            query: (id) => `/countries/${id}?local=none`,
            providesTags: ["countries"],
        }),
        addCountry: build.mutation({
            query: (formData) => ({
                url: '/countries',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['countries'],
        }),
        editCountry: build.mutation({
            query: ({ formData, id }) => ({
                url: `/countries/${id}`,
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['countries'],
        }),
        deleteCountry: build.mutation({
            query: (id) => ({
                url: `/countries/${id}`,
                method: 'Delete',
                body: build,
            }),
            invalidatesTags: ['countries'],
        }),
    }),
});


export const {
    useGetCountryQuery,
    useGetCountryIdQuery,
    useAddCountryMutation,
    useEditCountryMutation,
    useDeleteCountryMutation
} = ApiAuth;