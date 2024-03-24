import { Helmet } from "react-helmet-async";
// @mui
import { Container } from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// components
import { useSettingsContext } from "../../../components/settings";
import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";
// sections
import CoinsNewEditForm from "../../../sections/@dashboard/coins/CoinsNewEditForm";

// ----------------------------------------------------------------------

export default function CoinsCreatePage() {
    const { themeStretch } = useSettingsContext();

    return (
        <>
            <Helmet>
                <title>Coins: Create a new Coins </title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Create a new Coins"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "Coins",
                            href: PATH_DASHBOARD.coins.list,
                        },
                        { name: "New Coins" },
                    ]}
                />
                <CoinsNewEditForm />
            </Container>
        </>
    );
}
