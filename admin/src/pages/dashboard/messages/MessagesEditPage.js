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
import MessagesNewEditForm from "../../../sections/@dashboard/messages/MessagesNewEditForm";
import { useGetServicesIdQuery } from "../../../state/apiService";

// ----------------------------------------------------------------------

export default function MessagesEditPage() {
    const { themeStretch } = useSettingsContext();

    const { name } = useParams();
    const { data, isServiseLoading } = useGetServicesIdQuery(name);
    // const { data } = useGetServicesIdQuery(name)
    // console.log("🚀 ~ file: UserEditPage.js:24 ~ Service ~ data:", data)
    // const [Service, { isLoading }] = useEditServicesMutation()

    // const currentService = data?.service?.find(
    //     (service) => paramCase(service.name) === name
    // );
    // console.log("🚀 ~ file: ServiceEditPage.js:31 ~ ServiceEditPage ~ currentService:", currentService)

    return (
        <>
            <Helmet>
                <title> Messages: Edit Messages</title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Edit Messages"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "Messages",
                            href: PATH_DASHBOARD.messages.list,
                        },
                        { name: data?.name },
                    ]}
                />
                {isServiseLoading ? "loading" :
                    <MessagesNewEditForm isEdit currentService={data?.servise} />
                }
            </Container>
        </>
    );
}
