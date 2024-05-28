
import { api } from "./apiUser";

export const ApiAuth = api.injectEndpoints({
    reducerPath: "apiUser",
    endpoints: (build) => ({
        getCountry: build.query({
            query: (lng) => `/countries?local=${lng}`,
            providesTags: ["countries"],
        }),
        getCountryId: build.query({
            query: ({ id, lng, currentPage }) => `/countries/${id}?page=${currentPage}&local=${lng}`,
            providesTags: ["countries"],
        }),
    }),
});


export const {
    useGetCountryQuery,
    useGetCountryIdQuery
} = ApiAuth;