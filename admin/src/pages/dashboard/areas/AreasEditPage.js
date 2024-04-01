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
import AreasNewEditForm from "../../../sections/@dashboard/areas/AreasNewEditForm";
import { useGetAreasIdQuery } from "../../../state/areas";

// ----------------------------------------------------------------------

export default function AreasEditPage() {
    const { themeStretch } = useSettingsContext();

    const { name } = useParams();

    const { data } = useGetAreasIdQuery(name)
    return (
        <>
            <Helmet>
                <title> Areas: Edit Areas </title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Edit area"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "areas",
                            href: PATH_DASHBOARD.areas.list,
                        },
                        { name: data?.data?.name.en },
                    ]}
                />

                <AreasNewEditForm isEdit currentAreas={data?.data} />
            </Container>
        </>
    );
}
