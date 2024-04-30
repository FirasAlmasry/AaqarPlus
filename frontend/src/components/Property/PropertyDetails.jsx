import React, { useEffect, useState } from 'react'
import WrapperSection from '../global/WrapperSection'
import GlobalList from '../global/GlobalList'
import { Box, CardMedia, Grid, Typography } from '@mui/material'
// import img from './../../assets/wet-garden-vintage-nature-swimming.png'
import icon from './../../assets/Ellipse 59.png'
import Slider from '../global/Slider'
import Details from '../global/Details'
// import TableData from './TableData'
import GalleryProperty from './GalleryProperty'
import PaymentPlans from './PaymentPlans'
import HeaderSection from '../global/HeaderSection'
import CardProperty from '../global/CardProperty'
import Form from '../ContactUs/Form/Form'
import i18next from 'i18next'
import { useParams } from 'react-router-dom'
import { useGetPropertiesIdQuery } from '../../state/properties'
import Description from '../global/Description'
import { useGetCompoundsIdQuery } from '../../state/compounds'
// import ImageGallery from "react-image-gallery";

// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
import { useTranslation } from 'react-i18next'
import Btn from '../global/Btn'
import theme from '../../util/theme'

const PropertyDetails = () => {
    const url = 'https://aqarbackend.revampbrands.com/storage/'
    let lng = i18next.language
    let { id } = useParams()
    const { data, isBrandsLoading } = useGetPropertiesIdQuery({ id, lng });

    const [tableData, setTableData] = useState([]);
    const { data: Compound, isCompoundLoading } = useGetCompoundsIdQuery({ id: tableData?.compound_id, lng });
    const [CompoundData, setCompoundData] = useState([]);
    const { t } = useTranslation()
    useEffect(() => {
        if (data && !isBrandsLoading) {
            setTableData(data?.data)
            setCompoundData(Compound?.data)
        }
    }, [data, tableData, isBrandsLoading, Compound])

    // const images = tableData?.files?.map(image => ({
    //     original: `${url}${image?.file}`, // رابط الصورة الأصلي
    //     thumbnail: `${url}${image?.file}`, // صورة مصغرة (يمكنك استبدالها بالحجم الصغير المطلوب)
    //     description: image.id.toString(), // وصف اختياري
    // }));
    
    return (
        <>
            <WrapperSection>
                <GlobalList>
                    <Grid item md={6} xs={12}>
                        {/* {tableData?.files &&
                            <ImageGallery items={images}
                                thumbnailPosition='left'
                                autoPlay={true}
                                disableKeyDown={true}
                                disableSwipe={true}
                                disableThumbnailScroll={true}
                                lazyLoad={true}
                                showFullscreenButton={false}
                            />
                        } */}
                        <Slider nav={false} >
                            {tableData?.files?.map(img =>
                                <CardMedia key={img?.id} src={url + img?.file} component="img"
                                    alt="green iguana"
                                    sx={{
                                        height: '400px',
                                        borderRadius: '18px',
                                        backgroundSize: '100% 100%',
                                        objectFit: 'contain',
                                        width: { md: '100%', xs: '100%' }
                                    }} />
                            )}
                        </Slider>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Details
                            title={tableData?.name}
                            address={tableData?.address}
                            finishing={tableData.finishing_name}
                            startPrice={tableData?.start_price}
                            endPrice={tableData?.end_price}
                            whatsapp={tableData?.whatsapp}
                            phone_number={tableData?.phone_number} >
                            {tableData?.amenities?.map((res) =>
                                <Box key={res?.name} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}  >
                                    <CardMedia component={'img'} src={res?.icon ? `${url}${res?.icon}` : icon} sx={{ width: '18px', height: '18px' }} />
                                    {res?.name}
                                </Box>
                            )}
                        </Details>
                    </Grid>
                </GlobalList>
            </WrapperSection>
            <WrapperSection position='static'>
                {/* <Box sx={{ pb:2, width:'100%' }} >
                    <TableData tableData={tableData} />
            </Box> */}
                <GlobalList>
                    <Grid item md={8} xs={12} >
                        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }} >
                            <GalleryProperty tableData={tableData} />
                            <HeaderSection nameSection={tableData?.name} />
                            <Description data={tableData?.description} />
                        </Box>
                        <Box>
                            <PaymentPlans
                                DownPayment={tableData?.down_payment}
                                InstallmentYears={tableData?.installment_years}
                                MonthlyInstallment={tableData?.monthly_installment}
                            />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }} >
                            <HeaderSection nameSection={t("Contacts.Location")} />
                            <Description data={tableData?.url_location} />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: 1, flexDirection: { md: 'row', xs: 'column' } }} >
                            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }} >
                                <HeaderSection nameSection={lng === 'en' ? 'DeliveryIn' : "الأستلام"} />
                                <Typography textAlign={'left'} >{tableData.delivery_in}</Typography>
                                {/* <Description data={tableData.delivery_in} /> */}
                            </Box>
                            {/* <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '100%', gap: 1 }}>
                                <Btn text={'ref.465457'} />
                                <Btn text={'156748977'} bg={'transparent'} color={'#062371'} />
                            </Box> */}
                        </Box>
                    </Grid>
                    <Grid item md={4} xs={12} >
                        <Box sx={{ mx: { md: 3, xs: 0 } }} >
                            {/* <CardProperty img={img}
                                name={'Resort Valley Ocs'}
                                address={'New Helioplis,Egypt '}
                                num1={'3'}
                                num2={'4'}
                                num3={'360'}
                                month={'108,534'}
                                years={'8'}
                                price={'6.800 $'} /> */}
                            <Form>
                                <Typography color={'primary.main'} variant='h6' >{lng === 'en' ? 'Need Expert Advice?' : 'هل تحتاج إلى مشورة الخبراء؟'}</Typography>
                                <Typography color={'secondary.supMain'} my={2}>{lng === 'en' ? `Fill out the form and one of our property
                                    consultants will contact you.`: `املأ النموذج وسيقوم أحد مستشارينا العقاريين بالاتصال بك.`}</Typography>
                            </Form>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: 1, mt:4 }}>
                                <Btn text={'ref.465457'} />
                                <Btn text={'156748977'} bg={'transparent'} color={'#062371'} borderColor={theme.palette.primary.main} />
                            </Box>
                        </Box>
                    </Grid>
                </GlobalList>
                <HeaderSection nameSection={t("SuggestedProperties")} />
                <GlobalList>
                    {isCompoundLoading ? 'Loading' : CompoundData?.properties?.slice(0, 3)?.map(res =>
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
                </GlobalList>
            </WrapperSection>
        </>
    )
}

export default PropertyDetails