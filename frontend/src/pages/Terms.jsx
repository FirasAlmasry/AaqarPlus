import React, { useEffect, useState } from 'react'
import Header from '../components/global/Header'
import SectionTerm from '../components/Terms/SectionTerm'
import i18next from 'i18next'
import { useGetInfoTextQuery } from '../state/info'
import { useTranslation } from 'react-i18next'

const Terms = () => {
    let lng = i18next.language

    const { data, isBrandsLoading } = useGetInfoTextQuery(lng);

    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        if (data && !isBrandsLoading) {
            setTableData(data?.data)
        }
    }, [data, tableData, isBrandsLoading])
const {t} = useTranslation()
// console.log(tableData?.acceptable_use)
// console.log(tableData?.automated_queries)
    return (
        <>
            <Header title={t("Terms.title")} />
            <SectionTerm name={t("Terms.Conditions")} description={tableData?.terms_and_conditions} />
            {/* {tableData?.acceptable_use && <SectionTerm name={t("Terms.AcceptableUse")} description={tableData?.acceptable_use} />} */}
            {/* {tableData?.automated_queries && <SectionTerm name={t("Terms.AutomatedQueries")} description={tableData?.automated_queries} />} */}

            <SectionTerm name={t("Terms.PrivacyPolicy")} description={t("Terms.PrivacyPolicyDesc")} />
            <SectionTerm name={t("Terms.Disclaimer_of_Responsibility")} description={t("Terms.Disclaimer_of_ResponsibilityDesc")} />
            <SectionTerm name={t("Terms.NoGuarantee")} description={t("Terms.NoGuaranteeDesc")} />
            <SectionTerm name={t("Terms.Compensation")} description={t("Terms.CompensationDesc")} />
            <SectionTerm name={t("Terms.UseOfWebsiteContent")} description={t("Terms.UseOfWebsiteContentDesc")} />
            <SectionTerm name={t("Terms.Monitor")} description={t("Terms.MonitorDesc")} />
            <SectionTerm name={t("Terms.YourResponsibilities")} description={t("Terms.YourResponsibilitiesDesc")} />
            <SectionTerm name={t("Terms.ContactUs")} description={t("Terms.ContactUsDesc")} />
        </>
    )
}

export default Terms