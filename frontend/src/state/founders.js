
import { api } from "./apiUser";

export const ApiAuth = api.injectEndpoints({
    reducerPath: "apiUser",
    endpoints: (build) => ({
        getFounders: build.query({
            query: ({ lng, type }) => `/founders?local=${lng}&type=${type}`,
            providesTags: ["founders"],
        }),
    }),
});


export const {
    useGetFoundersQuery,
} = ApiAuth;