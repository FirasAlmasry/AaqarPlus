
import { api } from "./apiUser";

export const ApiAuth = api.injectEndpoints({
    reducerPath: "apiUser",
    endpoints: (build) => ({
        getCompounds: build.query({
            query: ({currentPage, limit}) => `/compounds?page=${currentPage}&per_page=${limit}`,
            providesTags: ["compounds"],
        }),
        getCompoundsId: build.query({
            query: (id) => `/compounds/${id}?local=none`,
            providesTags: ["compounds"],
        }),
        addCompounds: build.mutation({
            query: (formData) => ({
                url: '/compounds',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['compounds'],
        }),
        editCompounds: build.mutation({
            query: ({ formData, id }) => ({
                url: `/compounds/${id}`,
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['/compounds'],
        }),
        deleteCompounds: build.mutation({
            query: (id) => ({
                url: `/compounds/${id}`,
                method: 'Delete',
                body: build,
            }),
            invalidatesTags: ['/compounds'],
        }),
    }),
});


export const {
    useGetCompoundsQuery,
    useGetCompoundsIdQuery,
    useAddCompoundsMutation,
    useEditCompoundsMutation,
    useDeleteCompoundsMutation
} = ApiAuth;