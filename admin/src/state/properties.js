
import { api } from "./apiUser";

export const ApiAuth = api.injectEndpoints({
    reducerPath: "apiUser",
    endpoints: (build) => ({
        getProperties: build.query({
            query: () => `/properties`,
            providesTags: ["properties"],
        }),
        getPropertiesId: build.query({
            query: (id) => `/properties/${id}?local=none`,
            providesTags: ["properties"],
        }),
        addProperties: build.mutation({
            query: (formData) => ({
                url: '/properties',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['properties'],
        }),
        editProperties: build.mutation({
            query: ({ formData, id }) => ({
                url: `/properties/${id}`,
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['/properties'],
        }),
        deleteProperties: build.mutation({
            query: (id) => ({
                url: `/properties/${id}`,
                method: 'Delete',
                body: build,
            }),
            invalidatesTags: ['/properties'],
        }),
    }),
});


export const {
    useGetPropertiesQuery,
    useGetPropertiesIdQuery,
    useAddPropertiesMutation,
    useEditPropertiesMutation,
    useDeletePropertiesMutation
} = ApiAuth;