// ----------------------------------------------------------------------

function path(root, sublink) {
    return `${root}${sublink}`;
}

const ROOTS_AUTH = "/auth";
const ROOTS_DASHBOARD = "/dashboard";

// ----------------------------------------------------------------------

export const PATH_AUTH = {
    root: ROOTS_AUTH,
    login: path(ROOTS_AUTH, "/login"),
    register: path(ROOTS_AUTH, "/register"),
    loginUnprotected: path(ROOTS_AUTH, "/login-unprotected"),
    registerUnprotected: path(ROOTS_AUTH, "/register-unprotected"),
    verify: path(ROOTS_AUTH, "/verify"),
    resetPassword: path(ROOTS_AUTH, "/reset-password"),
    newPassword: path(ROOTS_AUTH, "/new-password"),
};

export const PATH_PAGE = {
    comingSoon: "/coming-soon",
    maintenance: "/maintenance",
    pricing: "/pricing",
    payment: "/payment",
    about: "/about-us",
    contact: "/contact-us",
    faqs: "/faqs",
    page403: "/403",
    page404: "/404",
    page500: "/500",
    components: "/components",
};

export const PATH_DASHBOARD = {
    root: ROOTS_DASHBOARD,
    kanban: path(ROOTS_DASHBOARD, "/kanban"),
    calendar: path(ROOTS_DASHBOARD, "/calendar"),
    fileManager: path(ROOTS_DASHBOARD, "/files-manager"),
    permissionDenied: path(ROOTS_DASHBOARD, "/permission-denied"),
    blank: path(ROOTS_DASHBOARD, "/blank"),
    user: {
        root: path(ROOTS_DASHBOARD, "/user"),
        new: path(ROOTS_DASHBOARD, "/user/new"),
        list: path(ROOTS_DASHBOARD, "/user/list"),
        cards: path(ROOTS_DASHBOARD, "/user/cards"),
        profile: path(ROOTS_DASHBOARD, "/user/profile"),
        account: path(ROOTS_DASHBOARD, "/user/account"),
        edit: (name) => path(ROOTS_DASHBOARD, `/user/${name}/edit`),
        demoEdit: path(ROOTS_DASHBOARD, `/user/reece-chung/edit`),
    },
    areas: {
        root: path(ROOTS_DASHBOARD, "/areas"),
        new: path(ROOTS_DASHBOARD, "/areas/new"),
        list: path(ROOTS_DASHBOARD, "/areas/list"),
        edit: (name) => path(ROOTS_DASHBOARD, `/areas/${name}/edit`),
    },
    country: {
        root: path(ROOTS_DASHBOARD, "/country"),
        new: path(ROOTS_DASHBOARD, "/country/new"),
        list: path(ROOTS_DASHBOARD, "/country/list"),
        edit: (name) => path(ROOTS_DASHBOARD, `/country/${name}/edit`),
    },
    finishing: {
        root: path(ROOTS_DASHBOARD, "/finishing"),
        new: path(ROOTS_DASHBOARD, "/finishing/new"),
        list: path(ROOTS_DASHBOARD, "/finishing/list"),
        edit: (name) => path(ROOTS_DASHBOARD, `/finishing/${name}/edit`),
    },
    developers: {
        root: path(ROOTS_DASHBOARD, "/developers"),
        new: path(ROOTS_DASHBOARD, "/developers/new"),
        list: path(ROOTS_DASHBOARD, "/developers/list"),
        edit: (name) => path(ROOTS_DASHBOARD, `/developers/${name}/edit`),
    },
    attaches: {
        root: path(ROOTS_DASHBOARD, "/attaches"),
        new: path(ROOTS_DASHBOARD, "/attaches/new"),
        list: path(ROOTS_DASHBOARD, "/attaches/list"),
        edit: (name) => path(ROOTS_DASHBOARD, `/attaches/${name}/edit`),
    },
    propertyType: {
        root: path(ROOTS_DASHBOARD, "/propertyType"),
        new: path(ROOTS_DASHBOARD, "/propertyType/new"),
        list: path(ROOTS_DASHBOARD, "/propertyType/list"),
        edit: (name) => path(ROOTS_DASHBOARD, `/propertyType/${name}/edit`),
    },
    compounds: {
        root: path(ROOTS_DASHBOARD, "/compounds"),
        new: path(ROOTS_DASHBOARD, "/compounds/new"),
        list: path(ROOTS_DASHBOARD, "/compounds/list"),
        edit: (name) => path(ROOTS_DASHBOARD, `/compounds/${name}/edit`),
    },
    properties: {
        root: path(ROOTS_DASHBOARD, "/properties"),
        new: path(ROOTS_DASHBOARD, "/properties/new"),
        list: path(ROOTS_DASHBOARD, "/properties/list"),
        archef: path(ROOTS_DASHBOARD, "/properties/list/archef"),
        edit: (name) => path(ROOTS_DASHBOARD, `/properties/${name}/edit`),
    },
    founders: {
        root: path(ROOTS_DASHBOARD, "/founders"),
        new: path(ROOTS_DASHBOARD, "/founders/new"),
        list: path(ROOTS_DASHBOARD, "/founders/list"),
        edit: (name) => path(ROOTS_DASHBOARD, `/founders/${name}/edit`),
    },
    banners: {
        root: path(ROOTS_DASHBOARD, "/banners"),
        new: path(ROOTS_DASHBOARD, "/banners/new"),
        list: path(ROOTS_DASHBOARD, "/banners/list"),
        edit: (name) => path(ROOTS_DASHBOARD, `/banners/${name}/edit`),
    },
    blogs: {
        root: path(ROOTS_DASHBOARD, "/blogs"),
        new: path(ROOTS_DASHBOARD, "/blogs/new"),
        list: path(ROOTS_DASHBOARD, "/blogs/list"),
        edit: (name) => path(ROOTS_DASHBOARD, `/blogs/${name}/edit`),
    },
    
    sellers : {
        root: path(ROOTS_DASHBOARD, "/sellers"),
        new: path(ROOTS_DASHBOARD, "/sellers/new"),
        list: path(ROOTS_DASHBOARD, "/sellers/list"),
        edit: (name) => path(ROOTS_DASHBOARD, `/sellers/${name}/edit`),
    },
    messages : {
        root: path(ROOTS_DASHBOARD, "/messages"),
        new: path(ROOTS_DASHBOARD, "/messages/new"),
        list: path(ROOTS_DASHBOARD, "/messages/list"),
        edit: (name) => path(ROOTS_DASHBOARD, `/messages/${name}/edit`),
    },
    sliderImage : {
        root: path(ROOTS_DASHBOARD, "/sliderImage"),
        new: path(ROOTS_DASHBOARD, "/sliderImage/new"),
        list: path(ROOTS_DASHBOARD, "/sliderImage/list"),
        edit: (name) => path(ROOTS_DASHBOARD, `/sliderImage/${name}/edit`),
    },
    infoText : {
        root: path(ROOTS_DASHBOARD, "/infoText"),
        new: path(ROOTS_DASHBOARD, "/infoText/new"),
        list: path(ROOTS_DASHBOARD, "/infoText/list"),
        edit: (name) => path(ROOTS_DASHBOARD, `/infoText/${name}/edit`),
    },
    aboutUs : {
        root: path(ROOTS_DASHBOARD, "/aboutUs"),
        new: path(ROOTS_DASHBOARD, "/aboutUs/new"),
        list: path(ROOTS_DASHBOARD, "/aboutUs/list"),
        edit: (name) => path(ROOTS_DASHBOARD, `/aboutUs/${name}/edit`),
    },
    address : {
        root: path(ROOTS_DASHBOARD, "/address"),
        new: path(ROOTS_DASHBOARD, "/address/new"),
        list: path(ROOTS_DASHBOARD, "/address/list"),
        edit: (name) => path(ROOTS_DASHBOARD, `/address/${name}/edit`),
    },
    descriptionContact : {
        root: path(ROOTS_DASHBOARD, "/descriptionContact"),
        new: path(ROOTS_DASHBOARD, "/descriptionContact/new"),
        list: path(ROOTS_DASHBOARD, "/descriptionContact/list"),
        edit: (name) => path(ROOTS_DASHBOARD, `/descriptionContact/${name}/edit`),
    },
    // descriptionBuyer : {
    //     root: path(ROOTS_DASHBOARD, "/descriptionBuyer"),
    //     new: path(ROOTS_DASHBOARD, "/descriptionBuyer/new"),
    //     list: path(ROOTS_DASHBOARD, "/descriptionBuyer/list"),
    //     edit: (name) => path(ROOTS_DASHBOARD, `/descriptionBuyer/${name}/edit`),
    // },
    contactUs : {
        root: path(ROOTS_DASHBOARD, "/contactUs"),
        new: path(ROOTS_DASHBOARD, "/contactUs/new"),
        list: path(ROOTS_DASHBOARD, "/contactUs/list"),
        edit: (name) => path(ROOTS_DASHBOARD, `/contactUs/${name}/edit`),
    },
    coins : {
        root: path(ROOTS_DASHBOARD, "/coins"),
        new: path(ROOTS_DASHBOARD, "/coins/new"),
        list: path(ROOTS_DASHBOARD, "/coins/list"),
        edit: (name) => path(ROOTS_DASHBOARD, `/coins/${name}/edit`),
    },
    news : {
        root: path(ROOTS_DASHBOARD, "/news"),
        new: path(ROOTS_DASHBOARD, "/news/new"),
        list: path(ROOTS_DASHBOARD, "/news/list"),
        edit: (name) => path(ROOTS_DASHBOARD, `/news/${name}/edit`),
    },
};
