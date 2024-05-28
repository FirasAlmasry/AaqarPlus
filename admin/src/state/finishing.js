
import { api } from "./apiUser";

export const ApiAuth = api.injectEndpoints({
    reducerPath: "apiUser",
    endpoints: (build) => ({
        getFinishing: build.query({
            query: () => `/finishing?per_page=100`,
            providesTags: ["finishing"],
        }),
        getFinishingId: build.query({
            query: (id) => `/finishing/${id}?local=none`,
            providesTags: ["finishing"],
        }),
        addFinishing: build.mutation({
            query: (formData) => ({
                url: '/finishing',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['finishing'],
        }),
        editFinishing: build.mutation({
            query: ({ formData, id }) => ({
                url: `/finishing/${id}`,
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['edit'],
        }),
        deleteFinishing: build.mutation({
            query: (id) => ({
                url: `/finishing/${id}`,
                method: 'Delete',
                body: build,
            }),
            invalidatesTags: ['Delete'],
        }),
    }),
});


export const {
    useGetFinishingQuery,
    useGetFinishingIdQuery,
    useAddFinishingMutation,
    useEditFinishingMutation,
    useDeleteFinishingMutation
} = ApiAuth;