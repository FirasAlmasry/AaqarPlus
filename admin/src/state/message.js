
import { api } from "./apiUser";

export const ApiAuth = api.injectEndpoints({
    reducerPath: "apiUser",
    endpoints: (build) => ({
        getMessages: build.query({
            query: () => `/messages`,
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