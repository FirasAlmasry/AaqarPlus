import React, { useEffect, useState } from 'react'
import WrapperSection from '../global/WrapperSection'
import GlobalList from '../global/GlobalList'
import { Grid, CardMedia, Box } from '@mui/material'
import Slider from '../global/Slider'
import Details from '../global/Details'
// import img from './../../assets/wet-garden-vintage-nature-swimming.png'
import icon from './../../assets/Ellipse 59.png'
import HeaderSection from '../global/HeaderSection'
import CardProperty from '../global/CardProperty'
import i18next from 'i18next'
import { useParams } from 'react-router-dom'
import { useGetCompoundsIdQuery } from '../../state/compounds'
import Description from '../global/Description'
import PaymentPlans from './PaymentPlans'
import { useTranslation } from 'react-i18next'
import MultiItemSlider from '../global/MultiItemSlider'

const CompoundDetails = () => {

    const url = 'https://aqarbackend.revampbrands.com/storage/'
    let lng = i18next.language
    let { id } = useParams()
    const { data, isBrandsLoading } = useGetCompoundsIdQuery({ id, lng });
    const { t } = useTranslation()
    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        if (data && !isBrandsLoading) {
            setTableData(data?.data)
        }
    }, [data, tableData, isBrandsLoading])

    return (
        <>
            <WrapperSection>
                <GlobalList>
                    <Grid item md={6} xs={12} >
                        <Slider>
                            {tableData?.files?.map(img =>
                                <CardMedia key={img?.id} src={url + img?.file} component="img"
                                    height="auto"
                                    alt="green iguana"
                                    sx={{
                                        height: '300px',
                                        borderRadius: '18px',
                                        objectFit: 'fill',
                                        width: { md: '100%', xs: '100%' }
                                    }} />
                            )}
                        </Slider>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Details
                            title={tableData?.name}
                            address={tableData?.address}
                            startPrice={tableData?.start_price}
                            endPrice={tableData?.end_price}
                            whatsapp={tableData?.whatsapp}
                            phone_number={tableData?.phone_number} >
                            {tableData?.attacheds?.map((res) =>
                                <Box key={res?.name} sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap:'wrap' }}  >
                                    <CardMedia component={'img'} src={icon} sx={{ width: '18px', height: '18px' }} />
                                    {res?.name}
                                </Box>
                            )}
                        </Details>
                    </Grid>
                </GlobalList>
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }} >
                    <HeaderSection nameSection={tableData?.name} />
                    <Description data={tableData?.description} />
                </Box>
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2, p: 2 }}>
                    <HeaderSection nameSection={t("PaymentPlans")} />
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", width: 'fit-content', py: 2, px: 4, flexWrap: 'wrap' }} >
                        <PaymentPlans data={tableData?.payment_plans} />
                    </Box>
                </Box>
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2, p: 2 }}>
                    <HeaderSection nameSection={`${t("ExplorePropertiesIn")} ${tableData?.name}`} length={tableData?.properties?.length === 0 ? t("NoResults") : tableData?.properties?.length} />
                    <Box sx={{ width: '100%' }}>
                        {
                            tableData?.properties &&
                            <MultiItemSlider>
                                    {tableData?.properties?.map(res =>
                                    <Box key={res?.id} sx={{ my: 2 }}>
                                        <CardProperty img={url + res?.master_plan}
                                            name={lng === 'ar' ? res?.name?.ar : res?.name?.en}
                                            address={lng === 'ar' ? res?.address?.ar : res?.address?.en}
                                            num1={res?.bedrooms}
                                            num2={res?.bathrooms}
                                            num3={res?.house_area}
                                            month={res?.monthly_installment}
                                            years={res?.installment_years}
                                            price={res?.end_price}
                                            whatsapp={res?.whatsapp}
                                            phone_number={res?.phone_number}
                                            id={res?.id}
                                        />
                                    </Box>
                                )}
                            </MultiItemSlider>
                        }
                    </Box>
                    {/* <GlobalList>
                        {tableData?.properties?.map(res =>
                            <Grid item md={4} xs={12} key={res?.id}>
                                <CardProperty img={url + res?.master_plan}
                                    name={lng === 'ar' ? res?.name?.ar : res?.name?.en}
                                    address={lng === 'ar' ? res?.address?.ar : res?.address?.en}
                                    num1={res?.bedrooms}
                                    num2={res?.bathrooms}
                                    num3={res?.house_area}
                                    month={res?.monthly_installment}
                                    years={res?.installment_years}
                                    price={res?.end_price}
                                    whatsapp={res?.whatsapp}
                                    phone_number={res?.phone_number}
                                    id={res?.id}
                                />
                            </Grid>
                        )}
                    </GlobalList> */}
                </Box>
            </WrapperSection>
        </>
    )
}

export default CompoundDetails