// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// components
import SvgColor from "../../../components/svg-color";

// ----------------------------------------------------------------------

const icon = (name) => (
    <SvgColor
        src={`/assets/icons/navbar/${name}.svg`}
        sx={{ width: 1, height: 1 }}
    />
);

const ICONS = {
    blog: icon("ic_blog"),
    cart: icon("ic_cart"),
    chat: icon("ic_chat"),
    mail: icon("ic_mail"),
    user: icon("ic_user"),
    file: icon("ic_file"),
    lock: icon("ic_lock"),
    label: icon("ic_label"),
    blank: icon("ic_blank"),
    kanban: icon("ic_kanban"),
    folder: icon("ic_folder"),
    banking: icon("ic_banking"),
    booking: icon("ic_booking"),
    invoice: icon("ic_invoice"),
    calendar: icon("ic_calendar"),
    disabled: icon("ic_disabled"),
    external: icon("ic_external"),
    menuItem: icon("ic_menu_item"),
    ecommerce: icon("ic_ecommerce"),
    analytics: icon("ic_analytics"),
    dashboard: icon("ic_dashboard"),
};

const navConfig = [
    // MANAGEMENT
    // ----------------------------------------------------------------------
    {
        subheader: "management",
        items: [
            // USER
            {
                title: "user",
                path: PATH_DASHBOARD.user.root,
                icon: ICONS.user,
                children: [
                    { title: "list", path: PATH_DASHBOARD.user.list },
                    { title: "create", path: PATH_DASHBOARD.user.new },
                ],
            },
            {
                title: "Areas",
                path: PATH_DASHBOARD.areas.root,
                icon: ICONS.label,
                children: [
                    { title: "list", path: PATH_DASHBOARD.areas.list },
                    { title: "create", path: PATH_DASHBOARD.areas.new },
                ],
            },
            {
                title: "Attaches",
                path: PATH_DASHBOARD.attaches.root,
                icon: ICONS.label,
                children: [
                    { title: "list", path: PATH_DASHBOARD.attaches.list },
                    { title: "create", path: PATH_DASHBOARD.attaches.new },
                ],
            },
            {
                title: "propertyType",
                path: PATH_DASHBOARD.propertyType.root,
                icon: ICONS.label,
                children: [
                    { title: "list", path: PATH_DASHBOARD.propertyType.list },
                    { title: "create", path: PATH_DASHBOARD.propertyType.new },
                ],
            },
            {
                title: "compounds",
                path: PATH_DASHBOARD.compounds.root,
                icon: ICONS.label,
                children: [
                    { title: "list", path: PATH_DASHBOARD.compounds.list },
                    { title: "create", path: PATH_DASHBOARD.compounds.new },
                ],
            },
            {
                title: "properties",
                path: PATH_DASHBOARD.properties.root,
                icon: ICONS.label,
                children: [
                    { title: "list", path: PATH_DASHBOARD.properties.list },
                    { title: "create", path: PATH_DASHBOARD.properties.new },
                ],
            },
            {
                title: "founders",
                path: PATH_DASHBOARD.founders.root,
                icon: ICONS.label,
                children: [
                    { title: "list", path: PATH_DASHBOARD.founders.list },
                    { title: "create", path: PATH_DASHBOARD.founders.new },
                ],
            },
            {
                title: "blogs",
                path: PATH_DASHBOARD.blogs.root,
                icon: ICONS.label,
                children: [
                    { title: "list", path: PATH_DASHBOARD.blogs.list },
                    { title: "create", path: PATH_DASHBOARD.blogs.new },
                ],
            },
            {
                title: "comingSoonItems",
                path: PATH_DASHBOARD.comingSoonItems.root,
                icon: ICONS.label,
                children: [
                    { title: "list", path: PATH_DASHBOARD.comingSoonItems.list },
                    { title: "create", path: PATH_DASHBOARD.comingSoonItems.new },
                ],
            },
            {
                title: "sellers",
                path: PATH_DASHBOARD.sellers.root,
                icon: ICONS.label,
                children: [
                    { title: "list", path: PATH_DASHBOARD.sellers.list },
                    { title: "create", path: PATH_DASHBOARD.sellers.new },
                ],
            },
            {
                title: "messages",
                path: PATH_DASHBOARD.messages.root,
                icon: ICONS.label,
                children: [
                    { title: "list", path: PATH_DASHBOARD.messages.list },
                    { title: "create", path: PATH_DASHBOARD.messages.new },
                ],
            },
            {
                title: "sliderImage",
                path: PATH_DASHBOARD.sliderImage.root,
                icon: ICONS.label,
                children: [
                    { title: "list", path: PATH_DASHBOARD.sliderImage.list },
                    { title: "create", path: PATH_DASHBOARD.sliderImage.new },
                ],
            },
            {
                title: "design",
                path: PATH_DASHBOARD.design.root,
                icon: ICONS.label,
                children: [
                    { title: "list", path: PATH_DASHBOARD.design.list },
                    // { title: "create", path: PATH_DASHBOARD.design.new },
                ],
            },
            {
                title: "aboutUs",
                path: PATH_DASHBOARD.aboutUs.root,
                icon: ICONS.label,
                children: [
                    { title: "list", path: PATH_DASHBOARD.aboutUs.list },
                    // { title: "create", path: PATH_DASHBOARD.aboutUs.new },
                ],
            },
            {
                title: "address",
                path: PATH_DASHBOARD.address.root,
                icon: ICONS.label,
                children: [
                    { title: "list", path: PATH_DASHBOARD.address.list },
                    // { title: "create", path: PATH_DASHBOARD.aboutUs.new },
                ],
            },
            {
                title: "descriptionContact",
                path: PATH_DASHBOARD.descriptionContact.root,
                icon: ICONS.label,
                children: [
                    { title: "list", path: PATH_DASHBOARD.descriptionContact.list },
                    // { title: "create", path: PATH_DASHBOARD.aboutUs.new },
                ],
            },
            // {
            //     title: "descriptionBuyer",
            //     path: PATH_DASHBOARD.descriptionBuyer.root,
            //     icon: ICONS.label,
            //     children: [
            //         { title: "list", path: PATH_DASHBOARD.descriptionBuyer.list },
            //         // { title: "create", path: PATH_DASHBOARD.aboutUs.new },
            //     ],
            // },
            {
                title: "contactUs",
                path: PATH_DASHBOARD.contactUs.root,
                icon: ICONS.label,
                children: [
                    { title: "list", path: PATH_DASHBOARD.contactUs.list },
                    { title: "create", path: PATH_DASHBOARD.contactUs.new },
                ],
            },
            {
                title: "coins",
                path: PATH_DASHBOARD.coins.root,
                icon: ICONS.label,
                children: [
                    { title: "list", path: PATH_DASHBOARD.coins.list },
                    { title: "create", path: PATH_DASHBOARD.coins.new },
                ],
            },
            {
                title: "news",
                path: PATH_DASHBOARD.news.root,
                icon: ICONS.label,
                children: [
                    { title: "list", path: PATH_DASHBOARD.news.list },
                    { title: "create", path: PATH_DASHBOARD.news.new },
                ],
            },
        ],
    },

];

export default navConfig;
