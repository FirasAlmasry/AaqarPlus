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
import { useGetPropertyTypeIdQuery } from "../../../state/PropertyType";
import PropertyTypeNewEditForm from "../../../sections/@dashboard/propertyType/PropertyTypeNewEditForm";

// ----------------------------------------------------------------------

export default function AttachesEditPage() {
    const { themeStretch } = useSettingsContext();

    const { name } = useParams();
    const { data, isServiseLoading } = useGetPropertyTypeIdQuery(name);
    return (
        <>
            <Helmet>
                <title> Property Type: Edit Property Type</title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Edit PropertyType"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "PropertyType",
                            href: PATH_DASHBOARD.propertyType.list,
                        },
                        { name: data?.data.name.en },
                    ]}
                />
                {isServiseLoading ? "loading" :
                    <PropertyTypeNewEditForm isEdit currentService={data?.data} />
                }
            </Container>
        </>
    );
}
