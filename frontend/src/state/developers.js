
import { api } from "./apiUser";

export const ApiAuth = api.injectEndpoints({
    reducerPath: "apiUser",
    endpoints: (build) => ({
        getDevelopers: build.query({
            query: ({ lng, currentPage }) => `/developers?local=${lng}&page=${currentPage}&per_page=9`,
            providesTags: ["developers"],
        }),
        getDevelopersId: build.query({
            query: ({ id, lng }) => `/developers/${id}?local=${lng}`,
            providesTags: ["developers"],
        }),
    }),
});


export const {
    useGetDevelopersQuery,
    useGetDevelopersIdQuery,
} = ApiAuth;