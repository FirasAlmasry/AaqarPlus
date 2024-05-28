import { api } from "./apiUser";

export const ApiAuth = api.injectEndpoints({
    reducerPath: "apiUser",
    endpoints: (build) => ({
        getSearchText: build.query({
            query: ({ type, country, property_type, area, tags, max_price, per_page, lng, currentPage }) => {
                let queryUrl = `/search?`;

                // فحص وإضافة قيم property_type إذا كانت غير فارغة
                if (type) {
                    queryUrl += `type=${type}&`;
                }
                // فحص وإضافة قيم property_type إذا كانت غير فارغة
                if (country) {
                    queryUrl += `country=${country}&`;
                }
                // فحص وإضافة قيم property_type إذا كانت غير فارغة
                if (property_type) {
                    queryUrl += `property_type=${property_type}&`;
                }

                // فحص وإضافة قيم area إذا كانت غير فارغة
                if (area) {
                    queryUrl += `area=${area}&`;
                }

                // فحص وإضافة قيم tags إذا كانت غير فارغة
                if (tags) {
                    queryUrl += `tags=${tags}&`;
                }

                // فحص وإضافة قيم max_price إذا كانت غير فارغة
                if (max_price) {
                    queryUrl += `max_price=${max_price}&`;
                }

                // فحص وإضافة قيم per_page إذا كانت غير فارغة
                if (per_page) {
                    queryUrl += `per_page=${per_page}&`;
                }

                // إزالة العلامة '&' من النهاية إذا كانت موجودة
                queryUrl = queryUrl.endsWith('&') ? queryUrl.slice(0, -1) : queryUrl;

                // إضافة قيمة local إلى النهاية
                queryUrl += `&local=${lng}&page=${currentPage}`;

                return queryUrl;
            },
            providesTags: ["search"],
        }),
    }),
});


export const {
    useGetSearchTextQuery,
} = ApiAuth;