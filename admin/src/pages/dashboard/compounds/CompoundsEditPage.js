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
import CompoundsNewEditForm from "../../../sections/@dashboard/compounds/CompoundsNewEditForm";
import { useGetCompoundsIdQuery } from "../../../state/compounds";
import { useEffect, useState } from "react";

// ----------------------------------------------------------------------

export default function CompoundsEditPage() {
    const { themeStretch } = useSettingsContext();

    const { name } = useParams();
    const { data, isCompoundsLoading, refetch } = useGetCompoundsIdQuery(name);
    const [compoundData, setCompoundData] = useState(null);

    useEffect(() => {
        if (data) {
            setCompoundData(data.data);
        }
    }, [data]);

    useEffect(() => {
        refetch(); // سيؤدي إلى إعادة جلب البيانات عندما يتغير `name` في useParams
    }, [name, refetch]);

    return (
        <>
            <Helmet>
                <title> Compounds: Edit Compounds </title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Edit Compound"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "Compounds",
                            href: PATH_DASHBOARD.compounds.list,
                        },
                        { name: compoundData?.compound?.name.en },
                    ]}
                />
                {isCompoundsLoading ? "loading" :
                    <CompoundsNewEditForm isEdit currentService={compoundData} />
                }
            </Container>
        </>
    );
}
