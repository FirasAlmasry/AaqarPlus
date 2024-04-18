import React, { useEffect, useState } from 'react'
import Header from '../components/global/Header'
import Details from '../components/AboutUs/Details'
// import ListImages from '../components/Design/ListImages'
// import DescContact from '../components/Design/DescContact'
import { useGetInfoTextQuery } from '../state/info'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'

const Design = () => {
const {t} = useTranslation()
    let lng = i18next.language

    const { data, isBrandsLoading } = useGetInfoTextQuery(lng);

    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        if (data && !isBrandsLoading) {
            setTableData(data?.data)
        }
    }, [data, tableData, isBrandsLoading])

    return (
        <>
            <Header title={t("Design")} />
            <Details data={tableData?.design} />
            {/* <ListImages /> */}
            {/* <DescContact data={tableData?.design} /> */}
        </>
    )
}

export default Design