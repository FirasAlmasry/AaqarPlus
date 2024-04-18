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
    return (
        <>
            <Header title={t("Terms.title")} />
            <SectionTerm name={t("Terms.Conditions")} description={tableData?.terms_and_conditions} />
            <SectionTerm name={t("Terms.AcceptableUse")} description={tableData?.acceptable_use} />
            <SectionTerm name={t("Terms.AutomatedQueries")} description={tableData?.automated_queries} />
        </>
    )
}

export default Terms