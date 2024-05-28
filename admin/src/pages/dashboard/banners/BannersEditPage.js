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
import BannersNewEditForm from "../../../sections/@dashboard/banners/BannersNewEditForm";
import { useGetBannersIdQuery } from "../../../state/banners";
import { useEffect, useState } from "react";

// ----------------------------------------------------------------------

export default function BannersEditPage() {
    const { themeStretch } = useSettingsContext();

    const { name } = useParams();
    const { data, isBannersLoading, refetch } = useGetBannersIdQuery(name);

    const [BannersData, setBannersData] = useState(null);
    console.log("🚀 ~ BannersEditPage ~ BannersData:", BannersData)

    useEffect(() => {
        if (data) {
            setBannersData(data.data);
        }
    }, [data]);

    useEffect(() => {
        refetch(); // سيؤدي إلى إعادة جلب البيانات عندما يتغير `name` في useParams
    }, [name, refetch]);

    return (
        <>
            <Helmet>
                <title> Banners: Edit Banners</title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Edit Banners"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "Banners",
                            href: PATH_DASHBOARD.banners.list,
                        },
                        { name: data?.data?.title.en },
                    ]}
                />
                {isBannersLoading ? "loading" :
                    <BannersNewEditForm isEdit currentService={BannersData} />
                }
            </Container>
        </>
    );
}
