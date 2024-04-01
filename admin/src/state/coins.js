
import { api } from "./apiUser";

export const ApiAuth = api.injectEndpoints({
    reducerPath: "apiUser",
    endpoints: (build) => ({
        getCoins: build.query({
            query: () => `/coins`,
            providesTags: ["coins"],
        }),
        editCoins: build.mutation({
            query: ({formData, id}) => ({
                url: `/coins/${id}`,
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['/coins'],
        }),
    }),
});


export const {
    useGetCoinsQuery,
    useEditCoinsMutation,
} = ApiAuth;