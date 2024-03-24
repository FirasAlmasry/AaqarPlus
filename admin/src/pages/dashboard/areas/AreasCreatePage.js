import { Helmet } from "react-helmet-async";
// @mui
import { Container } from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// components
import { useSettingsContext } from "../../../components/settings";
import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";
// sections
import AreasNewEditForm from "../../../sections/@dashboard/areas/AreasNewEditForm";

// ----------------------------------------------------------------------

export default function AreasCreatePage() {
    const { themeStretch } = useSettingsContext();

    return (
        <>
            <Helmet>
                <title>Areas: Create a new Areas </title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Create a new Areas"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "areas",
                            href: PATH_DASHBOARD.areas.list,
                        },
                        { name: "New areas" },
                    ]}
                />
                <AreasNewEditForm />
            </Container>
        </>
    );
}
