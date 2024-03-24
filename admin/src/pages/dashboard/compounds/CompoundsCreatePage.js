import { Helmet } from "react-helmet-async";
// @mui
import { Container } from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// components
import { useSettingsContext } from "../../../components/settings";
import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";
// sections
import CompoundsNewEditForm from "../../../sections/@dashboard/compounds/CompoundsNewEditForm";

// ----------------------------------------------------------------------

export default function CompoundsCreatePage() {
    const { themeStretch } = useSettingsContext();

    return (
        <>
            <Helmet>
                <title>Compounds: Create a new Compounds | Alriada & Alebdaa</title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Create a new Compounds"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "Compounds",
                            href: PATH_DASHBOARD.compounds.list,
                        },
                        { name: "New Compounds" },
                    ]}
                />
                <CompoundsNewEditForm />
            </Container>
        </>
    );
}
