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
import InfoTextNewEditForm from "../../../sections/@dashboard/infoText/InfoTextNewEditForm";
import { useGetInfoTextIdQuery } from "../../../state/info";

// ----------------------------------------------------------------------

export default function InfoTextEditPage() {
    const { themeStretch } = useSettingsContext();

    const { name } = useParams();
    console.log("🚀 ~ InfoTextEditPage ~ name:", name)
    const { data, isServiseLoading } = useGetInfoTextIdQuery(name);
    console.log("🚀 ~ file: ServiceEditPage.js:24 ~ ServiceEditPage ~ data:", data)

    return (
        <>
            <Helmet>
                <title> Page Content: Edit Page Content</title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Edit Page Content"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "Page Content",
                            href: PATH_DASHBOARD.infoText.list,
                        },
                        { name },
                    ]}
                />
                {isServiseLoading ? "loading" :
                    <InfoTextNewEditForm isEdit currentService={data} />
                }
            </Container>
        </>
    );
}
