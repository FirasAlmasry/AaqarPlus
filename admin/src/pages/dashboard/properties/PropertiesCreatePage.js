import { Helmet } from "react-helmet-async";
// @mui
import { Container } from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// components
import { useSettingsContext } from "../../../components/settings";
import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";
// sections
import PropertiesNewEditForm from "../../../sections/@dashboard/properties/PropertiesNewEditForm";

// ----------------------------------------------------------------------

export default function PropertiesCreatePage() {
    const { themeStretch } = useSettingsContext();

    return (
        <>
            <Helmet>
                <title>Properties: Create a new property </title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Create a new property"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "Properties",
                            href: PATH_DASHBOARD.properties.list,
                        },
                        { name: "New Property" },
                    ]}
                />
                <PropertiesNewEditForm />
            </Container>
        </>
    );
}
