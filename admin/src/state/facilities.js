
import { api } from "./apiUser";

export const ApiAuth = api.injectEndpoints({
    reducerPath: "apiUser",
    endpoints: (build) => ({
        getAttacheds: build.query({
            query: () => `/attacheds?per_page=100`,
        }),
        invalidatesTags: ["attacheds"],
        getAttachedsId: build.query({
            query: (id) => `/attacheds/${id}`,
            invalidatesTags: ["attacheds"],
        }),
        addAttacheds: build.mutation({
            query: (formData) => ({
                url: '/attacheds',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['attacheds'],
        }),
        editAttacheds: build.mutation({
            query: ({ formData, id }) => ({
                url: `/attacheds/${id}`,
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['attacheds'],
        }),
        deleteAttacheds: build.mutation({
            query: (id) => ({
                url: `/attacheds/${id}`,
                method: 'Delete',
                body: build,
            }),
            invalidatesTags: ['attacheds'],
        }),
    }),
});


export const {
    useGetAttachedsQuery,
    useAddAttachedsMutation,
    useEditAttachedsMutation,
    useGetAttachedsIdQuery,
    useDeleteAttachedsMutation
} = ApiAuth;