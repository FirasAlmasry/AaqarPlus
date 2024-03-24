import { Helmet } from "react-helmet-async";
// @mui
import { Container } from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// components
import { useSettingsContext } from "../../../components/settings";
import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";
// sections
import AddressNewEditForm from "../../../sections/@dashboard/address/AddressNewEditForm";

// ----------------------------------------------------------------------

export default function AddressCreatePage() {
    const { themeStretch } = useSettingsContext();

    return (
        <>
            <Helmet>
                <title>Address: Create a new Address </title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Create a new Address"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "Address",
                            href: PATH_DASHBOARD.address.list,
                        },
                        { name: "New Address" },
                    ]}
                />
                <AddressNewEditForm />
            </Container>
        </>
    );
}
