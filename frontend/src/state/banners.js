
import { api } from "./apiUser";

export const ApiAuth = api.injectEndpoints({
    reducerPath: "apiUser",
    endpoints: (build) => ({
        getBanners: build.query({
            query: (lng) => `/banners?local=${lng}`,
            providesTags: ["banners"],
        }),
        getBannersId: build.query({
            query: (id) => `/banners/${id}?local=none`,
            providesTags: ["banners"],
        }),
    }),
});


export const {
    useGetBannersQuery,
    useGetBannersIdQuery,
} = ApiAuth;