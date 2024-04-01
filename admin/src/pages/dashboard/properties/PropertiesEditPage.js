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
import PropertiesNewEditForm from "../../../sections/@dashboard/properties/PropertiesNewEditForm";
import { useGetPropertiesIdQuery } from "../../../state/properties";

// ----------------------------------------------------------------------

export default function PropertiesEditPage() {
    const { themeStretch } = useSettingsContext();

    const { name } = useParams();
    const { data, isPropertiesLoading } = useGetPropertiesIdQuery(name);
    return (
        <>
            <Helmet>
                <title> Properties: Edit property </title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Edit property"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "Properties",
                            href: PATH_DASHBOARD.properties.list,
                        },
                        { name: data?.data?.property?.name.en },
                    ]}
                />
                {isPropertiesLoading ? "loading" :
                    <PropertiesNewEditForm isEdit currentService={data?.data} />
                }
            </Container>
        </>
    );
}
