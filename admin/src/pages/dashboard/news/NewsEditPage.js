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
import NewsNewEditForm from "../../../sections/@dashboard/news/NewsEditForm";
import { useGetFoundersIdQuery } from "../../../state/founders";

// ----------------------------------------------------------------------

export default function NewsEditPage() {
    const { themeStretch } = useSettingsContext();

    const { name } = useParams();
    const { data, isFoundersLoading } = useGetFoundersIdQuery(name);

    return (
        <>
            <Helmet>
                <title> News: Edit New</title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Edit New"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "News",
                            href: PATH_DASHBOARD.news.list,
                        },
                        { name: data?.data?.name.en },
                    ]}
                />
                {isFoundersLoading ? "loading" :
                    <NewsNewEditForm isEdit currentService={data?.data}/>
                }
            </Container>
        </>
    );
}
