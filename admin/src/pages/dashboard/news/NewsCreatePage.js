import { Helmet } from "react-helmet-async";
// @mui
import { Container } from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// components
import { useSettingsContext } from "../../../components/settings";
import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";
// sections
import NewsNewEditForm from "../../../sections/@dashboard/news/NewsEditForm";

// ----------------------------------------------------------------------

export default function NewsCreatePage() {
    const { themeStretch } = useSettingsContext();

    return (
        <>
            <Helmet>
                <title>News: Create a new News </title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Create a new News"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "News",
                            href: PATH_DASHBOARD.news.list,
                        },
                        { name: "New News" },
                    ]}
                />
                <NewsNewEditForm />
            </Container>
        </>
    );
}
