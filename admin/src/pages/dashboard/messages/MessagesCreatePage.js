import { Helmet } from "react-helmet-async";
// @mui
import { Container } from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// components
import { useSettingsContext } from "../../../components/settings";
import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";
// sections
import MessagesNewEditForm from "../../../sections/@dashboard/messages/MessagesNewEditForm";

// ----------------------------------------------------------------------

export default function MessagesCreatePage() {
    const { themeStretch } = useSettingsContext();

    return (
        <>
            <Helmet>
                <title>Messages: Create a new Messages </title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Create a new Messages"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "Messages",
                            href: PATH_DASHBOARD.messages.list,
                        },
                        { name: "New Messages" },
                    ]}
                />
                <MessagesNewEditForm />
            </Container>
        </>
    );
}
