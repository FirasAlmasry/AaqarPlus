import { Helmet } from "react-helmet-async";
// @mui
import { Container } from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// components
import { useSettingsContext } from "../../../components/settings";
import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";
// sections
import FinishingNewEditForm from "../../../sections/@dashboard/finishing/FinishingNewEditForm";

// ----------------------------------------------------------------------

export default function FinishingCreatePage() {
    const { themeStretch } = useSettingsContext();

    return (
        <>
            <Helmet>
                <title>Finishing: Create a new Finishing </title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Create a new Finishing"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "Finishing",
                            href: PATH_DASHBOARD.finishing.list,
                        },
                        { name: "New Finishing" },
                    ]}
                />
                <FinishingNewEditForm />
            </Container>
        </>
    );
}
