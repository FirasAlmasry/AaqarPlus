import { Helmet } from "react-helmet-async";
// @mui
import { Container } from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// components
import { useSettingsContext } from "../../../components/settings";
import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";
// sections
import SellersNewEditForm from "../../../sections/@dashboard/sellers/SellersNewEditForm";

// ----------------------------------------------------------------------

export default function SellersCreatePage() {
    const { themeStretch } = useSettingsContext();

    return (
        <>
            <Helmet>
                <title>Sellers: Create a new Sellers </title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Create a new Sellers"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "Sellers",
                            href: PATH_DASHBOARD.sellers.list,
                        },
                        { name: "New Sellers" },
                    ]}
                />
                <SellersNewEditForm />
            </Container>
        </>
    );
}
