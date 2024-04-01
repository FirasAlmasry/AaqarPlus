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
import FoundersNewEditForm from "../../../sections/@dashboard/founders/FoundersNewEditForm";
import { useGetFoundersIdQuery } from "../../../state/founders";

// ----------------------------------------------------------------------

export default function FoundersEditPage() {
    const { themeStretch } = useSettingsContext();

    const { name } = useParams();
    const { data, isFoundersLoading } = useGetFoundersIdQuery(name);
    return (
        <>
            <Helmet>
                <title> Founders: Edit Founders</title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Edit Founder"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "Founders",
                            href: PATH_DASHBOARD.founders.list,
                        },
                        { name: data?.data?.name.en },
                    ]}
                />
                {isFoundersLoading ? "loading" :
                    <FoundersNewEditForm isEdit currentService={data?.data} />
                }
            </Container>
        </>
    );
}
