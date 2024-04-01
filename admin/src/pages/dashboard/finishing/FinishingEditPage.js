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
import FinishingNewEditForm from "../../../sections/@dashboard/finishing/FinishingNewEditForm";
import { useGetFinishingIdQuery } from "../../../state/finishing";

// ----------------------------------------------------------------------

export default function FinishingEditPage() {
    const { themeStretch } = useSettingsContext();

    const { name } = useParams();

    const { data } = useGetFinishingIdQuery(name)
    console.log("🚀 ~ FinishingEditPage ~ data:", data?.data)
    return (
        <>
            <Helmet>
                <title> Finishing: Edit Finishing </title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Edit Finishing"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "Finishing",
                            href: PATH_DASHBOARD.finishing.list,
                        },
                        { name: data?.data?.name.en },
                    ]}
                />

                <FinishingNewEditForm isEdit currentFinishing={data?.data} />
            </Container>
        </>
    );
}
