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
import { useEffect, useState } from "react";

// ----------------------------------------------------------------------

export default function AttachesEditPage() {
    const { themeStretch } = useSettingsContext();

    const { name } = useParams();
    const { data, isServiseLoading, refetch } = useGetPropertyTypeIdQuery(name);

    const [propertyTypeData, setPropertyTypeData] = useState(null);

    useEffect(() => {
        if (data) {
            setPropertyTypeData(data.data.property_type);
        }
    }, [data]);
    useEffect(() => {
        refetch(); // هذا سيؤدي إلى إعادة جلب البيانات عندما يتغير `name` في useParams
    }, [name, refetch]);
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
                        { name: data?.data?.property_type?.name?.en },
                    ]}
                />
                {isServiseLoading ? "loading" :
                    <PropertyTypeNewEditForm isEdit currentService={propertyTypeData} />
                }
            </Container>
        </>
    );
}
