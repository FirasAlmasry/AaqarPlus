
import { api } from "./apiUser";

export const ApiAuth = api.injectEndpoints({
    reducerPath: "apiUser",
    endpoints: (build) => ({
        
        AddMessages: build.mutation({
            query: (formData) => ({
                url: `/message`,
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['/message'],
        }),
    }),
});


export const {
    useAddMessagesMutation,
} = ApiAuth;