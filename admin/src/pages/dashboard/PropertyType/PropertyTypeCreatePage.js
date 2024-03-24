import { Helmet } from "react-helmet-async";
// @mui
import { Container } from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// components
import { useSettingsContext } from "../../../components/settings";
import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";
// sections
import PropertyTypeNewEditForm from "../../../sections/@dashboard/propertyType/PropertyTypeNewEditForm";

// ----------------------------------------------------------------------

export default function PropertyTypeCreatePage() {
    const { themeStretch } = useSettingsContext();

    return (
        <>
            <Helmet>
                <title>PropertyType: Create a new PropertyType</title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Create a new PropertyType"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "PropertyType",
                            href: PATH_DASHBOARD.propertyType.list,
                        },
                        { name: "New PropertyType" },
                    ]}
                />
                <PropertyTypeNewEditForm />
            </Container>
        </>
    );
}
