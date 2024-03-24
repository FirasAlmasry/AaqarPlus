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
import { useGetCourseIdQuery } from "../../../state/ApiCource";

// ----------------------------------------------------------------------

export default function AreasEditPage() {
    const { themeStretch } = useSettingsContext();

    const { name } = useParams();

    const { data } = useGetCourseIdQuery(name)
    return (
        <>
            <Helmet>
                <title> Areas: Edit Areas | Alriada & Alebdaa</title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Edit Areas"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "Areas",
                            href: PATH_DASHBOARD.areas.list,
                        },
                        { name: data?.name },
                    ]}
                />

                <AreasNewEditForm isEdit currentCourse={data?.course} />
            </Container>
        </>
    );
}
