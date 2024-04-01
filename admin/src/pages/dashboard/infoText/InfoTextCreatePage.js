import { Helmet } from "react-helmet-async";
// @mui
import { Container } from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// components
import { useSettingsContext } from "../../../components/settings";
import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";
// sections
import InfoTextNewEditForm from "../../../sections/@dashboard/infoText/InfoTextNewEditForm";

// ----------------------------------------------------------------------

export default function InfoTextCreatePage() {
    const { themeStretch } = useSettingsContext();

    return (
        <>
            <Helmet>
                <title>InfoText: Create a new InfoText </title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Create a new InfoText"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "InfoText",
                            href: PATH_DASHBOARD.infoText.list,
                        },
                        { name: "New InfoText" },
                    ]}
                />
                <InfoTextNewEditForm />
            </Container>
        </>
    );
}
