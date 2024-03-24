import { Helmet } from "react-helmet-async";
// @mui
import { Container } from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// components
import { useSettingsContext } from "../../../components/settings";
import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";
// sections
import AboutUsNewEditForm from "../../../sections/@dashboard/aboutUs/AboutUsNewEditForm";

// ----------------------------------------------------------------------

export default function AboutUsCreatePage() {
    const { themeStretch } = useSettingsContext();

    return (
        <>
            <Helmet>
                <title>AboutUs: Create a new AboutUs </title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Create a new AboutUs"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "AboutUs",
                            href: PATH_DASHBOARD.aboutUs.list,
                        },
                        { name: "New AboutUs" },
                    ]}
                />
                <AboutUsNewEditForm />
            </Container>
        </>
    );
}
