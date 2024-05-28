
import { api } from "./apiUser";

export const ApiAuth = api.injectEndpoints({
    reducerPath: "apiUser",
    endpoints: (build) => ({
        getCompounds: build.query({
            query: ({ lng, trending, currentPage, coming_soon }) => {
                if (trending === 1) {
                    return `/compounds?local=${lng}&trending=${trending}`;
                } else {
                    return `/compounds?local=${lng}&page=${currentPage}&coming_soon=${coming_soon}&per_page=9`;
                }
            },
            providesTags: ["compounds"],
        }),
        getCompoundsId: build.query({
            query: ({ id, lng }) => `/compounds/${id}?local=${lng}`,
            providesTags: ["compounds"],
        }),
    }),
});



export const {
    useGetCompoundsQuery,
    useGetCompoundsIdQuery,
} = ApiAuth;