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

// ----------------------------------------------------------------------

export default function DevelopersEditPage() {
    const { themeStretch } = useSettingsContext();

    const { name } = useParams();

    const { data } = useGetDevelopersIdQuery(name)
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
                        { name: data?.data?.name.en },
                    ]}
                />

                <DevelopersNewEditForm isEdit currentDevelopers={data?.data} />
            </Container>
        </>
    );
}
