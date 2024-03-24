import { Helmet } from "react-helmet-async";
// @mui
import { Container } from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// components
import { useSettingsContext } from "../../../components/settings";
import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";
// sections
import SliderImageNewEditForm from "../../../sections/@dashboard/sliderImage/SliderImageNewEditForm";

// ----------------------------------------------------------------------

export default function SliderImageCreatePage() {
    const { themeStretch } = useSettingsContext();

    return (
        <>
            <Helmet>
                <title>SliderImage: Create a new SliderImage </title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Create a new SliderImage"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "SliderImage",
                            href: PATH_DASHBOARD.sliderImage.list,
                        },
                        { name: "New SliderImage" },
                    ]}
                />
                <SliderImageNewEditForm />
            </Container>
        </>
    );
}
