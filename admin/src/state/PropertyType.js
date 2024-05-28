
import { api } from "./apiUser";

export const ApiAuth = api.injectEndpoints({
    reducerPath: "apiUser",
    endpoints: (build) => ({
        getPropertyType: build.query({
            query: () => `/property-type?per_page=50`,
            invalidatesTags: ["property-type"],
        }),
        getPropertyTypeId: build.query({
            query: (id) => `/property-type/${id}`,
            invalidatesTags: ["property-type"],
        }),
        addPropertyType: build.mutation({
            query: (formData) => ({
                url: '/property-type',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['property-type'],
        }),
        editPropertyType: build.mutation({
            query: ({ formData, id }) => ({
                url: `/property-type/${id}`,
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['property-type'],
        }),
        deletePropertyType: build.mutation({
            query: (id) => ({
                url: `/property-type/${id}`,
                method: 'Delete',
                body: build,
            }),
            invalidatesTags: ['property-type'],
        }),
    }),
});


export const {
    useGetPropertyTypeQuery,
    useAddPropertyTypeMutation,
    useEditPropertyTypeMutation,
    useGetPropertyTypeIdQuery,
    useDeletePropertyTypeMutation
} = ApiAuth;