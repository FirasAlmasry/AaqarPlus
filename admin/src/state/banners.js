
import { api } from "./apiUser";

export const ApiAuth = api.injectEndpoints({
    reducerPath: "apiUser",
    endpoints: (build) => ({
        getBanners: build.query({
            query: (limit) => `/banners?per_page=${3}`,
            providesTags: ["banners"],
        }),
        getBannersId: build.query({
            query: (id) => `/banners/${id}?local=none`,
            providesTags: ["banners"],
        }),
        addBanners: build.mutation({
            query: (formData) => ({
                url: '/banners',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['banners'],
        }),
        editBanners: build.mutation({
            query: ({ formData, id }) => ({
                url: `/banners/${id}`,
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['/banners'],
        }),
        deleteBanners: build.mutation({
            query: (id) => ({
                url: `/banners/${id}`,
                method: 'Delete',
                body: build,
            }),
            invalidatesTags: ['/banners'],
        }),
    }),
});


export const {
    useGetBannersQuery,
    useAddBannersMutation,
    useEditBannersMutation,
    useGetBannersIdQuery,
    useDeleteBannersMutation
} = ApiAuth;