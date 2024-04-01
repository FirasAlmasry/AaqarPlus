import { Helmet } from "react-helmet-async";
// @mui
import { Container } from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// components
import { useSettingsContext } from "../../../components/settings";
import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";
// sections
import AttachesNewEditForm from "../../../sections/@dashboard/attaches/AttachesNewEditForm";

// ----------------------------------------------------------------------

export default function AttachesCreatePage() {
    const { themeStretch } = useSettingsContext();

    return (
        <>
            <Helmet>
                <title>Facilities: Create a new Facilities</title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Create a new Facilities"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "Facilities",
                            href: PATH_DASHBOARD.attaches.list,
                        },
                        { name: "New Facilities" },
                    ]}
                />
                <AttachesNewEditForm />
            </Container>
        </>
    );
}
