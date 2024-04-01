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
import AttachesNewEditForm from "../../../sections/@dashboard/attaches/AttachesNewEditForm";
import { useGetAttachedsIdQuery } from "../../../state/facilities";

// ----------------------------------------------------------------------

export default function AttachesEditPage() {
    const { themeStretch } = useSettingsContext();

    const { name } = useParams();
    const { data, isServiseLoading } = useGetAttachedsIdQuery(name);
    return (
        <>
            <Helmet>
                <title> Facilities: Edit Attaches</title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Edit Facilities"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "Facilities",
                            href: PATH_DASHBOARD.attaches.list,
                        },
                        { name: data?.data?.name?.en },
                    ]}
                />
                {isServiseLoading ? "loading" :
                    <AttachesNewEditForm isEdit currentService={data?.data} />
                }
            </Container>
        </>
    );
}
