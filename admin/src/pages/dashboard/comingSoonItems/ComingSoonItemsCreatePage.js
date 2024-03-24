import { Helmet } from "react-helmet-async";
// @mui
import { Container } from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// components
import { useSettingsContext } from "../../../components/settings";
import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";
// sections
import ComingSoonItemsNewEditForm from "../../../sections/@dashboard/comingSoonItems/ComingSoonItemsNewEditForm";

// ----------------------------------------------------------------------

export default function ComingSoonItemsCreatePage() {
    const { themeStretch } = useSettingsContext();

    return (
        <>
            <Helmet>
                <title>ComingSoonItems: Create a new ComingSoonItems </title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Create a new ComingSoonItems"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "ComingSoonItems",
                            href: PATH_DASHBOARD.comingSoonItems.list,
                        },
                        { name: "New ComingSoonItems" },
                    ]}
                />
                <ComingSoonItemsNewEditForm />
            </Container>
        </>
    );
}
