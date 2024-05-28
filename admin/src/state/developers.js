
import { api } from "./apiUser";

export const ApiAuth = api.injectEndpoints({
    reducerPath: "apiUser",
    endpoints: (build) => ({
        getDevelopers: build.query({
            query: ({currentPage, limit}) => `/developers?page=${currentPage}&per_page=${limit}`,
            providesTags: ["developers"],
        }),
        getDevelopersId: build.query({
            query: (id) => `/developers/${id}?local=none`,
            providesTags: ["developers"],
        }),
        addDevelopers: build.mutation({
            query: (formData) => ({
                url: '/developers',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['developers'],
        }),
        editDevelopers: build.mutation({
            query: ({ formData, id }) => ({
                url: `/developers/${id}`,
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['/developers'],
        }),
        deleteDevelopers: build.mutation({
            query: (id) => ({
                url: `/developers/${id}`,
                method: 'Delete',
                body: build,
            }),
            invalidatesTags: ['/developers'],
        }),
    }),
});


export const {
    useGetDevelopersQuery,
    useGetDevelopersIdQuery,
    useAddDevelopersMutation,
    useEditDevelopersMutation,
    useDeleteDevelopersMutation
} = ApiAuth;