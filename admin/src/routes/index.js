import { Navigate, useRoutes } from "react-router-dom";
// auth
import AuthGuard from "../auth/AuthGuard";
import GuestGuard from "../auth/GuestGuard";
// layouts
// import MainLayout from "../layouts/main";
import SimpleLayout from "../layouts/simple";
import CompactLayout from "../layouts/compact";
import DashboardLayout from "../layouts/dashboard";
// config
import { PATH_AFTER_LOGIN } from "../config-global";
//
import {
    // Auth
    LoginPage,
    RegisterPage,
    VerifyCodePage,
    NewPasswordPage,
    ResetPasswordPage,

    // Dashboard: User
    UserListPage,
    UserEditPage,
    UserCreatePage,
    UserAccountPage,

    // Dashboard: Areas
    AreasListPage,
    AreasCreatePage,
    AreasEditPage,

    // Dashboard: Attaches
    AttachesListPage,
    AttachesEditPage,
    AttachesCreatePage,

    // PropertyType
    PropertyTypeListPage,
    PropertyTypeCreatePage,
    PropertyTypeEditPage,

    // Compounds
    CompoundsListPage,
    CompoundsCreatePage,
    CompoundsEditPage,

    // Properties
    PropertiesListPage,
    PropertiesCreatePage,
    PropertiesEditPage,

    // Founders
    FoundersListPage,
    FoundersCreatePage,
    FoundersEditPage,

    // Blogs
    BlogsListPage,
    BlogsCreatePage,
    BlogsEditPage,

    // ComingSoonItems
    ComingSoonItemsListPage,
    ComingSoonItemsCreatePage,
    ComingSoonItemsEditPage,

    // Sellers
    SellersListPage,
    SellersCreatePage,
    SellersEditPage,

    // Messages
    MessagesListPage,
    MessagesCreatePage,
    MessagesEditPage,
    // SliderImage
    SliderImageListPage,
    SliderImageCreatePage,
    SliderImageEditPage,
    // InfoText
    InfoTextListPage,
    InfoTextCreatePage,
    InfoTextEditPage,
    // ContactUs
    ContactUsListPage,
    ContactUsCreatePage,
    ContactUsEditPage,
    // Coins
    CoinsListPage,
    CoinsCreatePage,
    CoinsEditPage,
    // Main
    Page500,
    Page403,
    Page404,
    PricingPage,
    PaymentPage,
    NewsListPage,
    NewsCreatePage,
    NewsEditPage,
    AboutUsListPage,
    AboutUsCreatePage,
    AboutUsEditPage,
    AddressListPage,
    AddressCreatePage,
    AddressEditPage,
    DescriptionContactListPage,
    DescriptionContactCreatePage,
    DescriptionContactEditPage,
    DevelopersListPage,
    DevelopersCreatePage,
    DevelopersEditPage,
    FinishingListPage,
    FinishingCreatePage,
    FinishingEditPage,
    CountryListPage,
    CountryCreatePage,
    CountryEditPage,
    PropertiesListArchefPage,
    BannersListPage,
    BannersCreatePage,
    BannersEditPage,
    // DescriptionBuyerListPage,
    // DescriptionBuyerCreatePage,
    // DescriptionBuyerEditPage,
    


} from "./elements";

// ----------------------------------------------------------------------

export default function Router() {
    return useRoutes([
        // Auth
        {
            path: "auth",
            children: [
                {
                    path: "login",
                    element: (
                        <GuestGuard>
                            <LoginPage />
                        </GuestGuard>
                    ),
                },
                {
                    path: "register",
                    element: (
                        <GuestGuard>
                            <RegisterPage />
                        </GuestGuard>
                    ),
                },
                { path: "login-unprotected", element: <LoginPage /> },
                { path: "register-unprotected", element: <RegisterPage /> },
                {
                    element: <CompactLayout />,
                    children: [
                        {
                            path: "reset-password",
                            element: <ResetPasswordPage />,
                        },
                        { path: "new-password", element: <NewPasswordPage /> },
                        { path: "verify", element: <VerifyCodePage /> },
                    ],
                },
            ],
        },

        // Dashboard
        {
            path: "dashboard",
            element: (
                <AuthGuard>
                    <DashboardLayout />
                </AuthGuard>
            ),
            children: [
                {
                    element: <Navigate to={PATH_AFTER_LOGIN} replace />,
                    index: true,
                },
                {
                    path: "user",
                    children: [
                        {
                            element: (
                                <Navigate to="/dashboard/user/list" replace />
                            ),
                            index: true,
                        },
                        { path: "list", element: <UserListPage /> },
                        { path: "new", element: <UserCreatePage /> },
                        { path: ":name/edit", element: <UserEditPage /> },
                        { path: "account", element: <UserAccountPage /> },
                    ],
                },
                {
                    path: "areas",
                    children: [
                        {
                            element: (
                                <Navigate to="/dashboard/areas/list" replace />
                            ),
                            index: true,
                        },
                        { path: "list", element: <AreasListPage /> },
                        { path: "new", element: <AreasCreatePage /> },
                        { path: ":name/edit", element: <AreasEditPage /> },
                    ],
                },
                {
                    path: "country",
                    children: [
                        {
                            element: (
                                <Navigate to="/dashboard/country/list" replace />
                            ),
                            index: true,
                        },
                        { path: "list", element: <CountryListPage /> },
                        { path: "new", element: <CountryCreatePage /> },
                        { path: ":name/edit", element: <CountryEditPage /> },
                    ],
                },
                {
                    path: "finishing",
                    children: [
                        {
                            element: (
                                <Navigate to="/dashboard/finishing/list" replace />
                            ),
                            index: true,
                        },
                        { path: "list", element: <FinishingListPage /> },
                        { path: "new", element: <FinishingCreatePage /> },
                        { path: ":name/edit", element: <FinishingEditPage /> },
                    ],
                },
                {
                    path: "developers",
                    children: [
                        {
                            element: (
                                <Navigate to="/dashboard/developers/list" replace />
                            ),
                            index: true,
                        },
                        { path: "list", element: <DevelopersListPage /> },
                        { path: "new", element: <DevelopersCreatePage /> },
                        { path: ":name/edit", element: <DevelopersEditPage /> },
                    ],
                },
                {
                    path: "attaches",
                    children: [
                        {
                            element: (
                                <Navigate to="/dashboard/attaches/list" replace />
                            ),
                            index: true,
                        },
                        { path: "list", element: <AttachesListPage /> },
                        { path: "new", element: <AttachesCreatePage /> },
                        { path: ":name/edit", element: <AttachesEditPage /> },
                    ],
                },
                {
                    path: "propertyType",
                    children: [
                        {
                            element: (
                                <Navigate to="/dashboard/propertyType/list" replace />
                            ),
                            index: true,
                        },
                        { path: "list", element: <PropertyTypeListPage /> },
                        { path: "new", element: <PropertyTypeCreatePage /> },
                        { path: ":name/edit", element: <PropertyTypeEditPage /> },
                    ],
                },
                {
                    path: "compounds",
                    children: [
                        {
                            element: (
                                <Navigate to="/dashboard/compounds/list" replace />
                            ),
                            index: true,
                        },
                        { path: "list", element: <CompoundsListPage /> },
                        { path: "new", element: <CompoundsCreatePage /> },
                        { path: ":name/edit", element: <CompoundsEditPage /> },
                    ],
                },
                {
                    path: "properties",
                    children: [
                        {
                            element: (
                                <Navigate to="/dashboard/properties/list" replace />
                            ),
                            index: true,
                        },
                        { path: "list", element: <PropertiesListPage /> },
                        { path: "list/archef", element: <PropertiesListArchefPage /> },
                        { path: "new", element: <PropertiesCreatePage /> },
                        { path: ":name/edit", element: <PropertiesEditPage /> },
                    ],
                },
                {
                    path: "founders",
                    children: [
                        {
                            element: (
                                <Navigate to="/dashboard/founders/list" replace />
                            ),
                            index: true,
                        },
                        { path: "list", element: <FoundersListPage /> },
                        { path: "new", element: <FoundersCreatePage /> },
                        { path: ":name/edit", element: <FoundersEditPage /> },
                    ],
                },
                {
                    path: "banners",
                    children: [
                        {
                            element: (
                                <Navigate to="/dashboard/banners/list" replace />
                            ),
                            index: true,
                        },
                        { path: "list", element: <BannersListPage /> },
                        { path: "new", element: <BannersCreatePage /> },
                        { path: ":name/edit", element: <BannersEditPage /> },
                    ],
                },
                {
                    path: "blogs",
                    children: [
                        {
                            element: (
                                <Navigate to="/dashboard/blogs/list" replace />
                            ),
                            index: true,
                        },
                        { path: "list", element: <BlogsListPage /> },
                        { path: "new", element: <BlogsCreatePage /> },
                        { path: ":name/edit", element: <BlogsEditPage /> },
                    ],
                },
                {
                    path: "comingSoonItems",
                    children: [
                        {
                            element: (
                                <Navigate to="/dashboard/comingSoonItems/list" replace />
                            ),
                            index: true,
                        },
                        { path: "list", element: <ComingSoonItemsListPage /> },
                        { path: "new", element: <ComingSoonItemsCreatePage /> },
                        { path: ":name/edit", element: <ComingSoonItemsEditPage /> },
                    ],
                },
                {
                    path: "sellers",
                    children: [
                        {
                            element: (
                                <Navigate to="/dashboard/sellers/list" replace />
                            ),
                            index: true,
                        },
                        { path: "list", element: <SellersListPage /> },
                        { path: "new", element: <SellersCreatePage /> },
                        { path: ":name/edit", element: <SellersEditPage /> },
                    ],
                },
                {
                    path: "messages",
                    children: [
                        {
                            element: (
                                <Navigate to="/dashboard/messages/list" replace />
                            ),
                            index: true,
                        },
                        { path: "list", element: <MessagesListPage /> },
                        { path: "new", element: <MessagesCreatePage /> },
                        { path: ":name/edit", element: <MessagesEditPage /> },
                    ],
                },
                {
                    path: "sliderImage",
                    children: [
                        {
                            element: (
                                <Navigate to="/dashboard/sliderImage/list" replace />
                            ),
                            index: true,
                        },
                        { path: "list", element: <SliderImageListPage /> },
                        { path: "new", element: <SliderImageCreatePage /> },
                        { path: ":name/edit", element: <SliderImageEditPage /> },
                    ],
                },
                {
                    path: "infoText",
                    children: [
                        {
                            element: (
                                <Navigate to="/dashboard/infoText/list" replace />
                            ),
                            index: true,
                        },
                        { path: "list", element: <InfoTextListPage /> },
                        { path: "new", element: <InfoTextCreatePage /> },
                        { path: ":name/edit", element: <InfoTextEditPage /> },
                    ],
                },
                {
                    path: "aboutUs",
                    children: [
                        {
                            element: (
                                <Navigate to="/dashboard/aboutUs/list" replace />
                            ),
                            index: true,
                        },
                        { path: "list", element: <AboutUsListPage /> },
                        { path: "new", element: <AboutUsCreatePage /> },
                        { path: ":name/edit", element: <AboutUsEditPage /> },
                    ],
                },
                {
                    path: "address",
                    children: [
                        {
                            element: (
                                <Navigate to="/dashboard/address/list" replace />
                            ),
                            index: true,
                        },
                        { path: "list", element: <AddressListPage /> },
                        { path: "new", element: <AddressCreatePage /> },
                        { path: ":name/edit", element: <AddressEditPage /> },
                    ],
                },
                {
                    path: "descriptionContact",
                    children: [
                        {
                            element: (
                                <Navigate to="/dashboard/descriptionContact/list" replace />
                            ),
                            index: true,
                        },
                        { path: "list", element: <DescriptionContactListPage /> },
                        { path: "new", element: <DescriptionContactCreatePage /> },
                        { path: ":name/edit", element: <DescriptionContactEditPage /> },
                    ],
                },
                // {
                //     path: "descriptionBuyer",
                //     children: [
                //         {
                //             element: (
                //                 <Navigate to="/dashboard/descriptionBuyer/list" replace />
                //             ),
                //             index: true,
                //         },
                //         { path: "list", element: <DescriptionBuyerListPage /> },
                //         { path: "new", element: <DescriptionBuyerCreatePage /> },
                //         { path: ":name/edit", element: <DescriptionBuyerEditPage /> },
                //     ],
                // },
                {
                    path: "contactUs",
                    children: [
                        {
                            element: (
                                <Navigate to="/dashboard/contactUs/list" replace />
                            ),
                            index: true,
                        },
                        { path: "list", element: <ContactUsListPage /> },
                        { path: "new", element: <ContactUsCreatePage /> },
                        { path: ":name/edit", element: <ContactUsEditPage /> },
                    ],
                },
                {
                    path: "coins",
                    children: [
                        {
                            element: (
                                <Navigate to="/dashboard/coins/list" replace />
                            ),
                            index: true,
                        },
                        { path: "list", element: <CoinsListPage /> },
                        { path: "new", element: <CoinsCreatePage /> },
                        { path: ":name/edit", element: <CoinsEditPage /> },
                    ],
                },
                {
                    path: "news",
                    children: [
                        {
                            element: (
                                <Navigate to="/dashboard/news/list" replace />
                            ),
                            index: true,
                        },
                        { path: "list", element: <NewsListPage /> },
                        { path: "new", element: <NewsCreatePage /> },
                        { path: ":name/edit", element: <NewsEditPage /> },
                    ],
                },
            ],
        },

        // Main Routes
        {
            // element: <MainLayout />,
            children: [
                {
                    element: (
                        <GuestGuard>
                            <LoginPage />
                        </GuestGuard>
                    ),
                    index: true,
                },
            ],
        },
        {
            element: <SimpleLayout />,
            children: [
                { path: "pricing", element: <PricingPage /> },
                { path: "payment", element: <PaymentPage /> },
            ],
        },
        {
            element: <CompactLayout />,
            children: [
                { path: "500", element: <Page500 /> },
                { path: "404", element: <Page404 /> },
                { path: "403", element: <Page403 /> },
            ],
        },
        { path: "*", element: <Navigate to="/404" replace /> },
    ]);
}
