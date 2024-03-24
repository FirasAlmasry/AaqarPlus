import { Helmet } from "react-helmet-async";
// @mui
import { Container } from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// components
import { useSettingsContext } from "../../../components/settings";
import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";
// sections
import DesignNewEditForm from "../../../sections/@dashboard/design/DesignNewEditForm";

// ----------------------------------------------------------------------

export default function DesignCreatePage() {
    const { themeStretch } = useSettingsContext();

    return (
        <>
            <Helmet>
                <title>Design: Create a new Design </title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Create a new Design"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "Design",
                            href: PATH_DASHBOARD.design.list,
                        },
                        { name: "New Design" },
                    ]}
                />
                <DesignNewEditForm />
            </Container>
        </>
    );
}
