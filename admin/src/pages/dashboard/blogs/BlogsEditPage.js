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
import BlogsNewEditForm from "../../../sections/@dashboard/blogs/BlogsNewEditForm";
import { useGetBlogsIdQuery } from "../../../state/blog";
import { useEffect, useState } from "react";

// ----------------------------------------------------------------------

export default function BlogsEditPage() {
    const { themeStretch } = useSettingsContext();

    const { name } = useParams();
    const { data, isBlogLoading, refetch } = useGetBlogsIdQuery(name);

    const [blogData, setBlogData] = useState(null);

    useEffect(() => {
        if (data) {
            setBlogData(data.data);
        }
    }, [data]);

    useEffect(() => {
        refetch(); // سيؤدي إلى إعادة جلب البيانات عندما يتغير `name` في useParams
    }, [name, refetch]);

    return (
        <>
            <Helmet>
                <title> Blogs: Edit Blog </title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Edit Blog"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "Blogs",
                            href: PATH_DASHBOARD.blogs.list,
                        },
                        { name:  data?.data?.name.en },
                    ]}
                />
                {isBlogLoading ? "loading" :
                    <BlogsNewEditForm isEdit currentBlogs={blogData} />
                }
            </Container>
        </>
    );
}
