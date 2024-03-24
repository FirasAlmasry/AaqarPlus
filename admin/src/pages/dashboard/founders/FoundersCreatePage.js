import { Helmet } from "react-helmet-async";
// @mui
import { Container } from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// components
import { useSettingsContext } from "../../../components/settings";
import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";
// sections
import FoundersNewEditForm from "../../../sections/@dashboard/founders/FoundersNewEditForm";

// ----------------------------------------------------------------------

export default function FoundersCreatePage() {
    const { themeStretch } = useSettingsContext();

    return (
        <>
            <Helmet>
                <title>Founders: Create a new Founders </title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Create a new Founders"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "Founders",
                            href: PATH_DASHBOARD.founders.list,
                        },
                        { name: "New Founders" },
                    ]}
                />
                <FoundersNewEditForm />
            </Container>
        </>
    );
}
