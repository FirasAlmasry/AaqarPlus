
import { api } from "./apiUser";

export const ApiAuth = api.injectEndpoints({
  reducerPath: "apiUser",
  endpoints: (build) => ({
    resetPass: build.mutation({
      query: (build) => ({
        url: '/auth/reset-password-request',
        method: 'POST',
        body: build,
      }),
    }),
    newPass: build.mutation({
      query: (build) => ({
        url: '/auth/reset-password',
        method: 'POST',
        body: build,
      }),
    }),
  }),
});


export const {
  useResetPassMutation,
  useNewPassMutation
} = ApiAuth;