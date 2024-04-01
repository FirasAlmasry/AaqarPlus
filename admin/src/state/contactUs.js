
import { api } from "./apiUser";

export const ApiAuth = api.injectEndpoints({
    reducerPath: "apiUser",
    endpoints: (build) => ({
        getContactUs: build.query({
            query: () => `/contact-us`,
            providesTags: ["contact-us"],
        }),
        editContactUs: build.mutation({
            query: (formData) => ({
                url: `/contact-us`,
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['/contact-us'],
        }),
    }),
});


export const {
    useGetContactUsQuery,
    useEditContactUsMutation,
} = ApiAuth;