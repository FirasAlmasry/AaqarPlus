
import { api } from "./apiUser";

export const ApiAuth = api.injectEndpoints({
    reducerPath: "apiUser",
    endpoints: (build) => ({
        getComingSoonItems: build.query({
            query: () => `/coming-soon-items`,
            providesTags: ["coming-soon-items"],
        }),
        getComingSoonItemsId: build.query({
            query: (id) => `/coming-soon-items/${id}`,
            providesTags: ["coming-soon-items"],
        }),
        addComingSoonItems: build.mutation({
            query: (formData) => ({
                url: '/coming-soon-items',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['coming-soon-items'],
        }),
        editComingSoonItems: build.mutation({
            query: ({ formData, id }) => ({
                url: `/coming-soon-items/${id}`,
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['/coming-soon-items'],
        }),
        deleteComingSoonItems: build.mutation({
            query: (id) => ({
                url: `/coming-soon-items/${id}`,
                method: 'Delete',
                body: build,
            }),
            invalidatesTags: ['/coming-soon-items'],
        }),
    }),
});


export const {
    useGetComingSoonItemsQuery,
    useGetComingSoonItemsIdQuery,
    useAddComingSoonItemsMutation,
    useEditComingSoonItemsMutation,
    useDeleteComingSoonItemsMutation
} = ApiAuth;