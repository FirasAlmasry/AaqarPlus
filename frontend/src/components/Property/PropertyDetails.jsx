import React, { useEffect, useState } from 'react'
import WrapperSection from '../global/WrapperSection'
import GlobalList from '../global/GlobalList'
import { Box, CardMedia, Grid, Typography } from '@mui/material'
import icon from './../../assets/Ellipse 59.png'
import Slider from '../global/Slider'
import Details from '../global/Details'
import GalleryProperty from './GalleryProperty'
import PaymentPlans from './PaymentPlans'
import HeaderSection from '../global/HeaderSection'
import CardProperty from '../global/CardProperty'
import Form from '../ContactUs/Form/Form'
import i18next from 'i18next'
import { useParams } from 'react-router-dom'
import { useGetPropertiesIdQuery } from '../../state/properties'
import Description from '../global/Description'

// import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
// import "react-image-gallery/styles/css/image-gallery.css";
import { useTranslation } from 'react-i18next'
import Btn from '../global/Btn'
import theme from '../../util/theme'
import MultiItemSlider from '../global/MultiItemSlider'

const url = 'https://aqarbackend.revampbrands.com/storage/'

const renderMedia = (link, type) => {
    if (type === 'IMAGE') {
        return (
            <CardMedia
                src={url + link}
                component="img"
                alt="image"
                sx={{
                    height: '400px',
                    borderRadius: '18px',
                    backgroundSize: '100% 100%',
                    objectFit: 'fill',
                    width: { md: '100%', xs: '100%' }
                }}
            />
        );
    } else if (type === 'VIDEO') {
        return (
            <video controls style={{ height: '400px', borderRadius: '18px', width: '100%', position: 'relative', zIndex: 99 }} autoPlay >
                <source src={url + link} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        );
    }
};

const PropertyDetails = () => {
    
    let lng = i18next.language
    let { id } = useParams()
    const { data, isBrandsLoading } = useGetPropertiesIdQuery({ id, lng });

    const [tableData, setTableData] = useState([]);
    console.log("🚀 ~ PropertyDetails ~ tableData:", tableData)
    const { t } = useTranslation()
    useEffect(() => {
        if (data && !isBrandsLoading) {
            setTableData(data?.data)
        }
    }, [data, tableData, isBrandsLoading])

    const extractSrcFromIframe = (iframeText) => {
        const regex = /src="([^"]+)"/;
        const match = regex.exec(iframeText);
        if (match && match.length > 1) {
            return match[1]; // يحتوي match[1] على قيمة src
        } else {
            return null; // في حالة عدم العثور على src أو في حالة الخطأ
        }
    };
    const src = extractSrcFromIframe(tableData?.url_location);
    return (
        <>
            <WrapperSection>
                <GlobalList>
                    <Grid item md={6} xs={12}>
                        <Slider nav={false} >
                            {tableData?.files?.map(img => renderMedia(img?.file, img?.type))}
                        </Slider>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Details
                            title={tableData?.name}
                            refNumber={tableData.ref_number}
                            address={tableData?.address}
                            finishing={tableData.finishing_name}
                            startPrice={tableData?.start_price}
                            endPrice={tableData?.end_price}
                            whatsapp={tableData?.whatsapp}
                            phone_number={tableData?.phone_number} >
                            {tableData?.amenities?.map((res) =>
                                <Box key={res?.name} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}  >
                                    <CardMedia alt="green iguana" component={'img'} src={res?.icon ? `${url}${res?.icon}` : icon} sx={{ width: '18px', height: '18px' }} />
                                    {res?.name}
                                </Box>
                            )}
                        </Details>
                    </Grid>
                </GlobalList>
            </WrapperSection>
            <WrapperSection position='static'>
                <GlobalList>
                    <Grid item md={8} xs={12} >
                        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }} >
                            <GalleryProperty tableData={tableData} />
                            {tableData?.description && <>
                                <HeaderSection nameSection={`${lng === 'en' ? 'Details about' : 'تفاصيل عن'} ${tableData?.name}`} />
                                <Description data={tableData?.description} />
                            </>}
                        </Box>
                        <Box>
                            <PaymentPlans
                                DownPayment={tableData?.down_payment}
                                InstallmentYears={tableData?.installment_years}
                                MonthlyInstallment={tableData?.monthly_installment}
                            />
                        </Box>
                        {tableData?.url_location && <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }} >
                            <HeaderSection nameSection={t("Contacts.Location")} />
                            <iframe src={src} width="100%" height="100%" title={'test'} style={{ border: 0, marginTop: '16px' }}
                                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            {/* <Description data={tableData?.url_location} /> */}
                        </Box>}
                        {
                            tableData.delivery_in &&
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: 1, flexDirection: { md: 'row', xs: 'column' } }} >
                                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }} >
                                    <HeaderSection nameSection={lng === 'en' ? 'Delivery In' : "الأستلام"} />
                                    <Typography textAlign={'left'} >{tableData.delivery_in}</Typography>
                                </Box>
                            </Box>
                        }
                    </Grid>
                    <Grid item md={4} xs={12} >
                        <Box sx={{ mx: { md: 3, xs: 0 } }} >
                            <Form>
                                <Typography color={'primary.main'} variant='h6' >{lng === 'en' ? 'Need Expert Advice?' : 'هل تحتاج إلى مشورة الخبراء؟'}</Typography>
                                <Typography color={'secondary.supMain'} my={2}>{lng === 'en' ? `Fill out the form and one of our property
                                    consultants will contact you.`: `املأ النموذج وسيقوم أحد مستشارينا العقاريين بالاتصال بك.`}</Typography>
                            </Form>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: 1, mt: 4 }}>
                                <Typography color={'#fff'} bgcolor={'#062371'} sx={{ px:2, py:1, borderRadius:'8px', textAlign:'center' }} >{tableData.ref_number}</Typography>
                                {/* <Btn text={tableData.ref_number} /> */}
                                {
                                    tableData?.agent_code &&
                                    <Btn text={tableData.agent_code || '000'} bg={'transparent'} color={'#062371'} borderColor={theme.palette.primary.main} />
                                }
                            </Box>
                        </Box>
                    </Grid>
                </GlobalList>
                <Box sx={{ width: '100%' }}>
                    <HeaderSection nameSection={t("SuggestedProperties")} />
                    {
                        tableData?.similar_properties && <MultiItemSlider>
                            {tableData?.similar_properties?.slice(0, 5)?.map(res =>
                                <Box key={res?.id} sx={{ my: 2 }}>
                                    <CardProperty img={url + res?.master_plan}
                                        name={lng === 'en' ? res?.name?.en : res?.name.ar}
                                        address={lng === 'en' ? res?.address?.en : res?.address.ar}
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
                                    />
                                </Box>
                            )}
                        </MultiItemSlider>
                    }
                   
                </Box>
                {/* <HeaderSection nameSection={t("SuggestedProperties")} />
                <GlobalList>
                    {tableData?.similar_properties?.slice(0, 5)?.map(res =>
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
                                agent_id={res?.agent_code}
                            />
                        </Grid>
                    )}
                </GlobalList> */}
            </WrapperSection>
        </>
    )
}

export default PropertyDetails