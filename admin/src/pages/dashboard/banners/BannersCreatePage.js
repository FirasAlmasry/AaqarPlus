import { Helmet } from "react-helmet-async";
// @mui
import { Container } from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// components
import { useSettingsContext } from "../../../components/settings";
import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";
// sections
import BannersNewEditForm from "../../../sections/@dashboard/banners/BannersNewEditForm";

// ----------------------------------------------------------------------

export default function BannersCreatePage() {
    const { themeStretch } = useSettingsContext();

    return (
        <>
            <Helmet>
                <title>Banners: Create a new Banners </title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Create a new Banners"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "Banners",
                            href: PATH_DASHBOARD.banners.list,
                        },
                        { name: "New Banners" },
                    ]}
                />
                <BannersNewEditForm />
            </Container>
        </>
    );
}
