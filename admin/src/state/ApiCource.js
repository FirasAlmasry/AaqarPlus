
import { api } from "./apiUser";

export const ApiAuth = api.injectEndpoints({
    reducerPath: "apiUser",
    endpoints: (build) => ({
        getCourse: build.query({
            query: ({ page, limit }) => `courses?page=${page}&limit=${limit}`,
            // Only have one cache entry because the arg always maps to one string
            serializeQueryArgs: ({ endpointName }) => {
                return endpointName
            },
            // Always merge incoming data to the cache entry
            merge(currentCacheData, responseData, _meta, args) {
                console.log("🚀 ~ file: ApiCource.js:15 ~ merge ~ args:", args)
                console.log("🚀 ~ file: ApiCource.js:15 ~ merge ~ _meta:", _meta)
                console.log("🚀 ~ file: ApiCource.js:15 ~ merge ~ responseData:", responseData.courses)
                console.log("🚀 ~ file: ApiCource.js:15 ~ merge ~ currentCacheData:", currentCacheData.courses)
                if (responseData.courses === 0 && !currentCacheData.courses) {
                    return responseData;
                }
                if (responseData.courses > currentCacheData.courses) {
                    currentCacheData.courses.push(...responseData.courses);
                    currentCacheData.courses = responseData.courses
                    return currentCacheData;
                }
                return currentCacheData
            },
            // Refetch when the page arg changes
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg
            },
            providesTags: ["courses"],
        }),
        getCourseId: build.query({
            query: (id) => `/courses/${id}`,
            providesTags: ["courses"],
        }),
        addCourse: build.mutation({
            query: (formData) => ({
                url: '/courses',
                method: 'POST',
                body: formData,
                formData: true,
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
            }),
            invalidatesTags: ['courses'],
        }),
        editCourse: build.mutation({
            query: ({ formData, id }) => ({
                url: `/courses/${id}`,
                method: 'PATCH',
                body: formData,
                formData: true,
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
            }),
            invalidatesTags: ['courses'],
        }),
        deleteCourse: build.mutation({
            query: (id) => ({
                url: `/courses/${id}`,
                method: 'Delete',
                body: build,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
            invalidatesTags: ['courses'],
        }),
    }),
});


export const {
    useGetCourseQuery,
    useAddCourseMutation,
    useEditCourseMutation,
    useGetCourseIdQuery,
    useDeleteCourseMutation
} = ApiAuth;