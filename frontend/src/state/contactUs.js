
import { api } from "./apiUser";

export const ApiAuth = api.injectEndpoints({
    reducerPath: "apiUser",
    endpoints: (build) => ({
        getContactUs: build.query({
            query: () => `/contact-us`,
            providesTags: ["contact-us"],
        }),
    }),
});


export const {
    useGetContactUsQuery,
} = ApiAuth;