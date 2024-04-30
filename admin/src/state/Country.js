
import { api } from "./apiUser";

export const ApiAuth = api.injectEndpoints({
    reducerPath: "apiUser",
    endpoints: (build) => ({
        getCountry: build.query({
            query: () => `/country`,
            providesTags: ["country"],
        }),
        getCountryId: build.query({
            query: (id) => `/country/${id}?local=none`,
            providesTags: ["country"],
        }),
        addCountry: build.mutation({
            query: (formData) => ({
                url: '/country',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['country'],
        }),
        editCountry: build.mutation({
            query: ({ formData, id }) => ({
                url: `/country/${id}`,
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['country'],
        }),
        deleteCountry: build.mutation({
            query: (id) => ({
                url: `/country/${id}`,
                method: 'Delete',
                body: build,
            }),
            invalidatesTags: ['country'],
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