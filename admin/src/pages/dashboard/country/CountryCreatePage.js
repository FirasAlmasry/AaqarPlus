import { Helmet } from "react-helmet-async";
// @mui
import { Container } from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// components
import { useSettingsContext } from "../../../components/settings";
import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";
// sections
import CountryNewEditForm from "../../../sections/@dashboard/country/CountryNewEditForm";

// ----------------------------------------------------------------------

export default function CountryCreatePage() {
    const { themeStretch } = useSettingsContext();

    return (
        <>
            <Helmet>
                <title>Country: Create a new Country </title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Create a new Country"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "Country",
                            href: PATH_DASHBOARD.country.list,
                        },
                        { name: "New Country" },
                    ]}
                />
                <CountryNewEditForm />
            </Container>
        </>
    );
}
