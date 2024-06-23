import React, { useEffect, useState } from 'react'
import WrapperSection from '../global/WrapperSection'
import HeaderSection from '../global/HeaderSection'
import GlobalList from '../global/GlobalList'
import { Grid } from '@mui/material'
import CardProperty from '../global/CardProperty'
import { useGetPropertiesQuery } from '../../state/properties'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import CostPagination from '../global/CostPagination'


const ListIncomeProperty = () => {

    let lng = i18next.language

    const [currentPage, setCurrentPage] = useState(1);
    const { data, isLoading } = useGetPropertiesQuery({ lng, currentPage, coming_soon: 1 });
    const [tableData, setTableData] = useState([]);
    const { t } = useTranslation()

    useEffect(() => {
        if (data && !isLoading) {
            setTableData(data?.data?.data)
        }
    }, [data, isLoading])

    return (
        <>
            <WrapperSection>
                <HeaderSection nameSection={t("IncomeProperty")} length={tableData?.length} />
                <GlobalList>
                    {tableData?.map(res =>
                        <Grid item md={4} xs={12} key={res?.id}>
                            <CardProperty img={res?.master_plan}
                                name={res?.name}
                                address={res?.area_name}
                                num1={res?.bedrooms}
                                num2={res?.bathrooms}
                                num3={res?.house_area}
                                month={res?.monthly_installment}
                                years={res?.installment_years}
                                price={res?.end_price}
                                whatsapp={res?.whatsapp}
                                phone_number={res?.phone_number}
                                id={res?.id}
                                agent_id={res?.agent_code}
                                // is_favorite={res?.is_favorite}
                                // toggleFavorite={toggleFavorite}
                            />
                        </Grid>
                    )}
                </GlobalList>
                <CostPagination
                    setCurrentPage={setCurrentPage}
                    count={data?.data?.last_page}
                    currentPage={currentPage} />
            </WrapperSection>
        </>
    )
}

export default ListIncomeProperty