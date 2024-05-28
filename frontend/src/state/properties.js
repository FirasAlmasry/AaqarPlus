
import { api } from "./apiUser";

export const ApiAuth = api.injectEndpoints({
    reducerPath: "apiUser",
    endpoints: (build) => ({
        getProperties: build.query({
            query: ({ lng, trending, currentPage, coming_soon }) => {
                if (trending === 1) {
                    return `/properties?local=${lng}&trending=${trending}&page=${currentPage}&per_page=9`; 
                } else {
                    return `/properties?local=${lng}&page=${currentPage}&coming_soon=${coming_soon}&per_page=9`; 
                }
            },
            providesTags: ["properties"],
        }),
        getPropertiesId: build.query({
            query: ({id, lng}) => `/properties/${id}?local=${lng}`,
            providesTags: ["properties"],
        }),
    }),
});


export const {
    useGetPropertiesQuery,
    useGetPropertiesIdQuery,
} = ApiAuth;