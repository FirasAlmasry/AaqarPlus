
import { api } from "./apiUser";

export const ApiAuth = api.injectEndpoints({
    reducerPath: "apiUser",
    endpoints: (build) => ({
        getMessages: build.query({
            query: (currentPage) => `/messages?page=${currentPage}&per_page=5`,
            providesTags: ["messages"],
        }),
        deleteMessages: build.mutation({
            query: (id) => ({
                url: `/messages/${id}`,
                method: 'Delete',
                body: build,
            }),
            invalidatesTags: ['/messages'],
        }),
    }),
});


export const {
    useGetMessagesQuery,
    useDeleteMessagesMutation,
} = ApiAuth;