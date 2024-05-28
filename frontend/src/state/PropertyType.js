
import { api } from "./apiUser";

export const ApiAuth = api.injectEndpoints({
    reducerPath: "apiUser",
    endpoints: (build) => ({
        getPropertyType: build.query({
            query: (lng) => `/property-type?local=${lng}`,
            invalidatesTags: ["property-type"],
        }),
        getPropertyTypeId: build.query({
            query: ({ id, lng, currentPage }) => `/property-type/${id}?page=${currentPage}&local=${lng}`,
            invalidatesTags: ["property-type"],
        })
    }),
});


export const {
    useGetPropertyTypeQuery,
    useGetPropertyTypeIdQuery,
} = ApiAuth;