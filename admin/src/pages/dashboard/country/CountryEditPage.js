import { Helmet } from "react-helmet-async";
// import { paramCase } from "change-case";
import { useParams } from "react-router-dom";
// @mui
import { Container } from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// _mock_
// import { _consoltingList } from "../../../_mock/arrays";
// components
import { useSettingsContext } from "../../../components/settings";
import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";
// sections
import CountryNewEditForm from "../../../sections/@dashboard/country/CountryNewEditForm";
import { useGetCountryIdQuery } from "../../../state/Country";

// ----------------------------------------------------------------------

export default function CountryEditPage() {
    const { themeStretch } = useSettingsContext();

    const { name } = useParams();

    const { data } = useGetCountryIdQuery(name)
    return (
        <>
            <Helmet>
                <title> Country: Edit Country </title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Edit Country"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "Country",
                            href: PATH_DASHBOARD.country.list,
                        },
                        { name: data?.data?.name.en },
                    ]}
                />

                <CountryNewEditForm isEdit currentCountry={data?.data} />
            </Container>
        </>
    );
}
