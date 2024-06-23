import { Suspense, lazy } from "react";
// components
import LoadingScreen from "../components/loading-screen";

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) =>
(
    <Suspense fallback={<LoadingScreen />}>
        <Component {...props} />
    </Suspense>
);

// ----------------------------------------------------------------------

// AUTH
export const LoginPage = Loadable(
    lazy(() => import("../pages/auth/LoginPage"))
);
export const RegisterPage = Loadable(
    lazy(() => import("../pages/auth/RegisterPage"))
);
export const VerifyCodePage = Loadable(
    lazy(() => import("../pages/auth/VerifyCodePage"))
);
export const NewPasswordPage = Loadable(
    lazy(() => import("../pages/auth/NewPasswordPage"))
);
export const ResetPasswordPage = Loadable(
    lazy(() => import("../pages/auth/ResetPasswordPage"))
);

// DASHBOARD: USER
export const UserProfilePage = Loadable(
    lazy(() => import("../pages/dashboard/UserProfilePage"))
);
export const UserCardsPage = Loadable(
    lazy(() => import("../pages/dashboard/UserCardsPage"))
);
export const UserListPage = Loadable(
    lazy(() => import("../pages/dashboard/UserListPage"))
);
export const UserAccountPage = Loadable(
    lazy(() => import("../pages/dashboard/UserAccountPage"))
);
export const UserCreatePage = Loadable(
    lazy(() => import("../pages/dashboard/UserCreatePage"))
);
export const UserEditPage = Loadable(
    lazy(() => import("../pages/dashboard/UserEditPage"))
);


// DASHBOARD: Areas
export const AreasListPage = Loadable(
    lazy(() => import("../pages/dashboard/areas/AreasListPage"))
);
export const AreasCreatePage = Loadable(
    lazy(() => import("../pages/dashboard/areas/AreasCreatePage"))
);
export const AreasEditPage = Loadable(
    lazy(() => import("../pages/dashboard/areas/AreasEditPage"))
);

// DASHBOARD: Country
export const CountryListPage = Loadable(
    lazy(() => import("../pages/dashboard/country/CountryListPage"))
);
export const CountryCreatePage = Loadable(
    lazy(() => import("../pages/dashboard/country/CountryCreatePage"))
);
export const CountryEditPage = Loadable(
    lazy(() => import("../pages/dashboard/country/CountryEditPage"))
);
// DASHBOARD: Finishing
export const FinishingListPage = Loadable(
    lazy(() => import("../pages/dashboard/finishing/FinishingListPage"))
);
export const FinishingCreatePage = Loadable(
    lazy(() => import("../pages/dashboard/finishing/FinishingCreatePage"))
);
export const FinishingEditPage = Loadable(
    lazy(() => import("../pages/dashboard/finishing/FinishingEditPage"))
);

// DASHBOARD: Developers
export const DevelopersListPage = Loadable(
    lazy(() => import("../pages/dashboard/developers/DevelopersListPage"))
);
export const DevelopersCreatePage = Loadable(
    lazy(() => import("../pages/dashboard/developers/DevelopersCreatePage"))
);
export const DevelopersEditPage = Loadable(
    lazy(() => import("../pages/dashboard/developers/DevelopersEditPage"))
);

// DASHBOARD: Attaches
export const AttachesListPage = Loadable(
    lazy(() => import("../pages/dashboard/attaches/AttachesListPage"))
);

export const AttachesEditPage = Loadable(
    lazy(() => import("../pages/dashboard/attaches/AttachesEditPage"))
);

export const AttachesCreatePage = Loadable(
    lazy(() => import("../pages/dashboard/attaches/AttachesCreatePage"))
);

// DASHBOARD: PropertyType
export const PropertyTypeListPage = Loadable(
    lazy(() => import("../pages/dashboard/PropertyType/PropertyTypeListPage"))
);

export const PropertyTypeEditPage = Loadable(
    lazy(() => import("../pages/dashboard/PropertyType/PropertyTypeEditPage"))
);

export const PropertyTypeCreatePage = Loadable(
    lazy(() => import("../pages/dashboard/PropertyType/PropertyTypeCreatePage"))
);

// DASHBOARD: Compounds
export const CompoundsListPage = Loadable(
    lazy(() => import("../pages/dashboard/compounds/CompoundsListPage"))
);

export const CompoundsEditPage = Loadable(
    lazy(() => import("../pages/dashboard/compounds/CompoundsEditPage"))
);

export const CompoundsCreatePage = Loadable(
    lazy(() => import("../pages/dashboard/compounds/CompoundsCreatePage"))
);

// DASHBOARD: Properties
export const PropertiesListPage = Loadable(
    lazy(() => import("../pages/dashboard/properties/PropertiesListPage"))
);

export const PropertiesListArchefPage = Loadable(
    lazy(() => import("../pages/dashboard/properties/PropertiesArchefListPage"))
);

export const PropertiesEditPage = Loadable(
    lazy(() => import("../pages/dashboard/properties/PropertiesEditPage"))
);

export const PropertiesCreatePage = Loadable(
    lazy(() => import("../pages/dashboard/properties/PropertiesCreatePage"))
);

// DASHBOARD: Founders
export const FoundersListPage = Loadable(
    lazy(() => import("../pages/dashboard/founders/FoundersListPage"))
);

export const FoundersEditPage = Loadable(
    lazy(() => import("../pages/dashboard/founders/FoundersEditPage"))
);

export const FoundersCreatePage = Loadable(
    lazy(() => import("../pages/dashboard/founders/FoundersCreatePage"))
);

// DASHBOARD: Banners
export const BannersListPage = Loadable(
    lazy(() => import("../pages/dashboard/banners/BannersListPage"))
);

export const BannersEditPage = Loadable(
    lazy(() => import("../pages/dashboard/banners/BannersEditPage"))
);

export const BannersCreatePage = Loadable(
    lazy(() => import("../pages/dashboard/banners/BannersCreatePage"))
);

// DASHBOARD: Blogs
export const BlogsListPage = Loadable(
    lazy(() => import("../pages/dashboard/blogs/BlogsListPage"))
);

export const BlogsEditPage = Loadable(
    lazy(() => import("../pages/dashboard/blogs/BlogsEditPage"))
);

export const BlogsCreatePage = Loadable(
    lazy(() => import("../pages/dashboard/blogs/BlogsCreatePage"))
);

// DASHBOARD: Sellers
export const SellersListPage = Loadable(
    lazy(() => import("../pages/dashboard/sellers/SellersListPage"))
);

export const SellersEditPage = Loadable(
    lazy(() => import("../pages/dashboard/sellers/SellersEditPage"))
);

export const SellersCreatePage = Loadable(
    lazy(() => import("../pages/dashboard/sellers/SellersCreatePage"))
);

// DASHBOARD: Messages
export const MessagesListPage = Loadable(
    lazy(() => import("../pages/dashboard/messages/MessagesListPage"))
);

export const MessagesEditPage = Loadable(
    lazy(() => import("../pages/dashboard/messages/MessagesEditPage"))
);

export const MessagesCreatePage = Loadable(
    lazy(() => import("../pages/dashboard/messages/MessagesCreatePage"))
);

// DASHBOARD: SliderImage
export const SliderImageListPage = Loadable(
    lazy(() => import("../pages/dashboard/sliderImage/SliderImageListPage"))
);

export const SliderImageEditPage = Loadable(
    lazy(() => import("../pages/dashboard/sliderImage/SliderImageEditPage"))
);

export const SliderImageCreatePage = Loadable(
    lazy(() => import("../pages/dashboard/sliderImage/SliderImageCreatePage"))
);

// DASHBOARD: InfoText
export const InfoTextListPage = Loadable(
    lazy(() => import("../pages/dashboard/infoText/InfoTextListPage"))
);

export const InfoTextEditPage = Loadable(
    lazy(() => import("../pages/dashboard/infoText/InfoTextEditPage"))
);

export const InfoTextCreatePage = Loadable(
    lazy(() => import("../pages/dashboard/infoText/InfoTextCreatePage"))
);
// DASHBOARD: AboutUs
export const AboutUsListPage = Loadable(
    lazy(() => import("../pages/dashboard/aboutUs/AboutUsListPage"))
);

export const AboutUsEditPage = Loadable(
    lazy(() => import("../pages/dashboard/aboutUs/AboutUsEditPage"))
);

export const AboutUsCreatePage = Loadable(
    lazy(() => import("../pages/dashboard/aboutUs/AboutUsCreatePage"))
);
// DASHBOARD: Address
export const AddressListPage = Loadable(
    lazy(() => import("../pages/dashboard/address/AddressListPage"))
);

export const AddressEditPage = Loadable(
    lazy(() => import("../pages/dashboard/address/AddressEditPage"))
);

export const AddressCreatePage = Loadable(
    lazy(() => import("../pages/dashboard/address/AddressCreatePage"))
);
// DASHBOARD: DescriptionContact
export const DescriptionContactListPage = Loadable(
    lazy(() => import("../pages/dashboard/descriptionContact/DescriptionContactListPage"))
);

export const DescriptionContactEditPage = Loadable(
    lazy(() => import("../pages/dashboard/descriptionContact/DescriptionContactEditPage"))
);

export const DescriptionContactCreatePage = Loadable(
    lazy(() => import("../pages/dashboard/descriptionContact/DescriptionContactCreatePage"))
);
// // DASHBOARD: DescriptionBuyer
// export const DescriptionBuyerListPage = Loadable(
//     lazy(() => import("../pages/dashboard/descriptionBuyer/DescriptionBuyerListPage"))
// );

// export const DescriptionBuyerEditPage = Loadable(
//     lazy(() => import("../pages/dashboard/descriptionBuyer/DescriptionBuyerEditPage"))
// );

// export const DescriptionBuyerCreatePage = Loadable(
//     lazy(() => import("../pages/dashboard/descriptionBuyer/DescriptionBuyerCreatePage"))
// );

// DASHBOARD: ContactUs
export const ContactUsListPage = Loadable(
    lazy(() => import("../pages/dashboard/contactUs/ContactUsListPage"))
);

export const ContactUsEditPage = Loadable(
    lazy(() => import("../pages/dashboard/contactUs/ContactUsEditPage"))
);

export const ContactUsCreatePage = Loadable(
    lazy(() => import("../pages/dashboard/contactUs/ContactUsCreatePage"))
);

// DASHBOARD: Coins
export const CoinsListPage = Loadable(
    lazy(() => import("../pages/dashboard/coins/CoinsListPage"))
);

export const CoinsEditPage = Loadable(
    lazy(() => import("../pages/dashboard/coins/CoinsEditPage"))
);

export const CoinsCreatePage = Loadable(
    lazy(() => import("../pages/dashboard/coins/CoinsCreatePage"))
);
// DASHBOARD: News
export const NewsListPage = Loadable(
    lazy(() => import("../pages/dashboard/news/NewsListPage"))
);

export const NewsEditPage = Loadable(
    lazy(() => import("../pages/dashboard/news/NewsEditPage"))
);

export const NewsCreatePage = Loadable(
    lazy(() => import("../pages/dashboard/news/NewsCreatePage"))
);

// TEST RENDER PAGE BY ROLE
export const PermissionDeniedPage = Loadable(
    lazy(() => import("../pages/dashboard/PermissionDeniedPage"))
);

// BLANK PAGE
export const BlankPage = Loadable(
    lazy(() => import("../pages/dashboard/BlankPage"))
);

// MAIN
export const Page500 = Loadable(lazy(() => import("../pages/Page500")));
export const Page403 = Loadable(lazy(() => import("../pages/Page403")));
export const Page404 = Loadable(lazy(() => import("../pages/Page404")));
export const HomePage = Loadable(lazy(() => import("../pages/HomePage")));
export const FaqsPage = Loadable(lazy(() => import("../pages/FaqsPage")));
export const AboutPage = Loadable(lazy(() => import("../pages/AboutPage")));
export const Contact = Loadable(lazy(() => import("../pages/ContactPage")));
export const PricingPage = Loadable(lazy(() => import("../pages/PricingPage")));
export const PaymentPage = Loadable(lazy(() => import("../pages/PaymentPage")));
export const ComingSoonPage = Loadable(
    lazy(() => import("../pages/ComingSoonPage"))
);
export const MaintenancePage = Loadable(
    lazy(() => import("../pages/MaintenancePage"))
);
