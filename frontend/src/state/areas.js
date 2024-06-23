
import { api } from "./apiUser";

export const ApiAuth = api.injectEndpoints({
    reducerPath: "apiUser",
    endpoints: (build) => ({
        getAreas: build.query({
            query: ({ lng, trending, currentPage, limit = 9 }) => {
                if (trending === 1) {
                    return `/areas?local=${lng}&trending=${trending}&page=${currentPage}&per_page=${limit}`;
                } else {
                    return `/areas?local=${lng}&page=${currentPage}&per_page=${limit}`;
                }
            },
            providesTags: ["areas"],
        }),
        getAreasId: build.query({
            query: ({ id, lng, currentPage }) => `/areas/${id}?page=${currentPage}&local=${lng}`,
            providesTags: ["areas"],
        }),
    }),
});


export const {
    useGetAreasQuery,
    useGetAreasIdQuery,
} = ApiAuth;