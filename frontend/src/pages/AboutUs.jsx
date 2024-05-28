import React, { useEffect, useState } from 'react'
import Header from '../components/global/Header'
import Details from '../components/AboutUs/Details'
import ListFounders from '../components/AboutUs/Founder/ListFounders'
import OurProducts from '../components/AboutUs/OurProducts'
import OurNews from '../components/AboutUs/OurNews'
import ContactUs from '../components/ContactUs'
import i18next from 'i18next'
import { useGetInfoTextQuery } from '../state/info'
import { useTranslation } from 'react-i18next'
import SectionTerm from '../components/Terms/SectionTerm'

const AboutUs = () => {
    let lng = i18next.language

    const { data, isBrandsLoading } = useGetInfoTextQuery(lng);

    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        if (data && !isBrandsLoading) {
            setTableData(data?.data)
        }
    }, [data, tableData, isBrandsLoading])
    const { t } = useTranslation()
    
    return (
        <>
            <Header title={t("aboutUs")} />
            <Details data={tableData?.about_us} />
            <SectionTerm name={t("Terms.Mission")} description={t("Terms.MissionDesc")} />
            <SectionTerm name={t("Terms.Vision")} description={t("Terms.VisionDesc")} />
            <SectionTerm name={t("Terms.Values")} description={t("Terms.ValuesDesc")} />
            <ListFounders />
            <OurProducts data={tableData?.our_products} />
            <OurNews />
            <ContactUs />
        </>
    )
}

export default AboutUs