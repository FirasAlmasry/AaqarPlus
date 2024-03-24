import { Helmet } from "react-helmet-async";
// @mui
import { Container } from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// components
import { useSettingsContext } from "../../../components/settings";
import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";
// sections
import ContactUsNewEditForm from "../../../sections/@dashboard/contactUs/ContactUsNewEditForm";

// ----------------------------------------------------------------------

export default function ContactUsCreatePage() {
    const { themeStretch } = useSettingsContext();

    return (
        <>
            <Helmet>
                <title>ContactUs: Create a new ContactUs</title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Create a new ContactUs"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "ContactUs",
                            href: PATH_DASHBOARD.contactUs.list,
                        },
                        { name: "New ContactUs" },
                    ]}
                />
                <ContactUsNewEditForm />
            </Container>
        </>
    );
}
