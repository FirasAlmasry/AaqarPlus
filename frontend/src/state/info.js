
import { api } from "./apiUser";

export const ApiAuth = api.injectEndpoints({
    reducerPath: "apiUser",
    endpoints: (build) => ({
        getInfoText: build.query({
            query: (lng) => `/info-text?local=${lng}`,
            providesTags: ["info-text"],
        }),
    }),
});


export const {
    useGetInfoTextQuery,
} = ApiAuth;