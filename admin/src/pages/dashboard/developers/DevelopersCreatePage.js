import { Helmet } from "react-helmet-async";
// @mui
import { Container } from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// components
import { useSettingsContext } from "../../../components/settings";
import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";
// sections
import DevelopersNewEditForm from "../../../sections/@dashboard/developers/DevelopersNewEditForm";

// ----------------------------------------------------------------------

export default function DevelopersCreatePage() {
    const { themeStretch } = useSettingsContext();

    return (
        <>
            <Helmet>
                <title>Developers: Create a new Developers </title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Create a new developer"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "Developers",
                            href: PATH_DASHBOARD.developers.list,
                        },
                        { name: "New Developer" },
                    ]}
                />
                <DevelopersNewEditForm />
            </Container>
        </>
    );
}
