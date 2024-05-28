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
import DevelopersNewEditForm from "../../../sections/@dashboard/developers/DevelopersNewEditForm";
import { useGetDevelopersIdQuery } from "../../../state/developers";
import { useEffect, useState } from "react";

// ----------------------------------------------------------------------

export default function DevelopersEditPage() {
    const { themeStretch } = useSettingsContext();

    const { name } = useParams();

    const { data, isDevelopersLoading, refetch } = useGetDevelopersIdQuery(name);
    const [developerData, setDeveloperData] = useState(null);

    useEffect(() => {
        if (data) {
            setDeveloperData(data.data);
        }
    }, [data]);

    useEffect(() => {
        refetch(); // سيؤدي إلى إعادة جلب البيانات عندما يتغير `name` في useParams
    }, [name, refetch]);
    
    return (
        <>
            <Helmet>
                <title> Developers: Edit Developers </title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Edit Developer"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "Developers",
                            href: PATH_DASHBOARD.developers.list,
                        },
                        { name: developerData?.name?.en },
                    ]}
                />

                <DevelopersNewEditForm isEdit currentDevelopers={developerData} />
            </Container>
        </>
    );
}
