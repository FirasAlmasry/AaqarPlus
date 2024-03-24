import { Helmet } from "react-helmet-async";
// @mui
import { Container } from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// components
import { useSettingsContext } from "../../../components/settings";
import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";
// sections
import DescriptionContactNewEditForm from "../../../sections/@dashboard/descriptionContact/DescriptionContactNewEditForm";

// ----------------------------------------------------------------------

export default function DescriptionContactCreatePage() {
    const { themeStretch } = useSettingsContext();

    return (
        <>
            <Helmet>
                <title>DescriptionContact: Create a new DescriptionContact </title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Create a new DescriptionContact"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "DescriptionContact",
                            href: PATH_DASHBOARD.descriptionContact.list,
                        },
                        { name: "New DescriptionContact" },
                    ]}
                />
                <DescriptionContactNewEditForm />
            </Container>
        </>
    );
}
