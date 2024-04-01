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
import ComingSoonItemsNewEditForm from "../../../sections/@dashboard/comingSoonItems/ComingSoonItemsNewEditForm";
import { useGetComingSoonItemsIdQuery } from "../../../state/comingSoonItems";

// ----------------------------------------------------------------------

export default function ComingSoonItemsEditPage() {
    const { themeStretch } = useSettingsContext();

    const { name } = useParams();
    console.log("🚀 ~ ComingSoonItemsEditPage ~ name:", name)
    const { data, isServiseLoading } = useGetComingSoonItemsIdQuery(name);
    console.log("🚀 ~ file: ServiceEditPage.js:24 ~ ServiceEditPage ~ data:", data?.data)
    return (
        <>
            <Helmet>
                <title> ComingSoonItems: Edit ComingSoonItems </title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Edit ComingSoonItems"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "ComingSoonItems",
                            href: PATH_DASHBOARD.comingSoonItems.list,
                        },
                        { name: data?.data?.name?.en },
                    ]}
                />
                {isServiseLoading ? "loading" :
                    <ComingSoonItemsNewEditForm isEdit currentService={data?.data} />
                }
            </Container>
        </>
    );
}
