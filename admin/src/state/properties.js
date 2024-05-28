
import { api } from "./apiUser";

export const ApiAuth = api.injectEndpoints({
    reducerPath: "apiUser",
    endpoints: (build) => ({
        getProperties: build.query({
            query: ({ onlyTrashed, currentPage, limit, ref_number } ) => {
                if (onlyTrashed === 'true') {
                    return `/properties?onlyTrashed=true&page=${currentPage}&per_page=${limit}&ref_number=${ref_number}`;
                } else {
                    return `/properties?page=${currentPage}&per_page=${limit}&ref_number=${ref_number}`;
                }
            },
            // query: (onlyTrashed) => `/properties?onlyTrashed=${onlyTrashed}`,
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
        restoreProperties: build.mutation({
            query: (id) => ({
                url: `/properties/${id}/restore`,
                method: 'POST',
                body: build,
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
        deleteArchefProperties: build.mutation({
            query: (id) => ({
                url: `/properties/${id}/force-delete`,
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
    useRestorePropertiesMutation,
    useDeletePropertiesMutation,
    useDeleteArchefPropertiesMutation
} = ApiAuth;