
import { api } from "./apiUser";

export const ApiAuth = api.injectEndpoints({
    reducerPath: "apiUser",
    endpoints: (build) => ({
        getInfoText: build.query({
            query: () => `/info-text?local=none`,
            providesTags: ["info-text"],
        }),
        getInfoTextId: build.query({
            query: (type) => `/info-text/${type}`,
            providesTags: ["info-text"],
        }),
        editInfoText: build.mutation({
            query: (formData) => ({
                url: `/info-text`,
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['/info-text'],
        }),
    }),
});


export const {
    useGetInfoTextQuery,
    useEditInfoTextMutation,
    useGetInfoTextIdQuery,
} = ApiAuth;