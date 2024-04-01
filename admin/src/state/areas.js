
import { api } from "./apiUser";

export const ApiAuth = api.injectEndpoints({
    reducerPath: "apiUser",
    endpoints: (build) => ({
        getAreas: build.query({
            query: () => `/areas`,
            providesTags: ["areas"],
        }),
        getAreasId: build.query({
            query: (id) => `/areas/${id}?local=none`,
            providesTags: ["areas"],
        }),
        addAreas: build.mutation({
            query: (formData) => ({
                url: '/areas',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['areas'],
        }),
        editAreas: build.mutation({
            query: ({ formData, id }) => ({
                url: `/areas/${id}`,
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['areas'],
        }),
        deleteAreas: build.mutation({
            query: (id) => ({
                url: `/areas/${id}`,
                method: 'Delete',
                body: build,
            }),
            invalidatesTags: ['areas'],
        }),
    }),
});


export const {
    useGetAreasQuery,
    useGetAreasIdQuery,
    useAddAreasMutation,
    useEditAreasMutation,
    useDeleteAreasMutation
} = ApiAuth;