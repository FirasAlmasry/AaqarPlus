import { Helmet } from "react-helmet-async";
// @mui
import { Container } from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// components
import { useSettingsContext } from "../../../components/settings";
import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";
// sections
import BlogsNewEditForm from "../../../sections/@dashboard/blogs/BlogsNewEditForm";

// ----------------------------------------------------------------------

export default function BlogsCreatePage() {
    const { themeStretch } = useSettingsContext();

    return (
        <>
            <Helmet>
                <title>Blogs: Create a new Blog </title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Create a new Blog"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "Blogs",
                            href: PATH_DASHBOARD.blogs.list,
                        },
                        { name: "New Blogs" },
                    ]}
                />
                <BlogsNewEditForm />
            </Container>
        </>
    );
}
