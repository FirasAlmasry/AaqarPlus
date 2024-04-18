import { Box, Button, InputLabel } from '@mui/material'
import React from 'react'
import './form.css'
import theme from '../../../util/theme';
import * as Yup from "yup";
import { useAddMessagesMutation } from '../../../state/message';
// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"; 
import { enqueueSnackbar } from "notistack";
import { useTranslation } from 'react-i18next';

const Form = ({ children }) => {
const { t } = useTranslation()
    const NewMessagesSchema = Yup.object().shape({
        name: Yup.string(),
        phone_number: Yup.string(),
        location: Yup.string(),
        preferred_location: Yup.string(),
        description: Yup.string(),
    });

    const { register, handleSubmit, reset } = useForm({
        resolver: yupResolver(NewMessagesSchema),
    });


    const [addMessage] = useAddMessagesMutation()

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("phone_number", data.phone_number);
            formData.append("location", data.location);
            formData.append("preferred_location", data.preferred_location);
            formData.append("description", data.description);
            await addMessage(formData)
            reset();
            enqueueSnackbar("تم ارسال البيانات بنجاح")
        } catch (err) {
            console.log(err);
            const errorMessage = err.message || 'An error occurred';
            enqueueSnackbar(errorMessage, { variant: 'error' });
        }
    }
    return (
        <div>
            <Box sx={{ borderRadius: '16px', background: '#FFF', p: 2, boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
                {children}
                <Box component={'form'} onSubmit={handleSubmit(onSubmit)} >
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }} >
                        <Box sx={{ width: { md: '100%', xs: '100%' }, }}>
                            <InputLabel htmlFor="name" sx={{ my: 1 }} >
                                {t("Form.name")} <span style={{ color: '#FFA53B' }} >*</span>
                            </InputLabel>
                            <input
                                style={{ backgroundColor: '#FFF' }}
                                // required
                                id="name"
                                variant="filled"
                                size="medium"
                                name='name'
                                {...register("name")}
                                className='input'
                            />
                        </Box>
                        <Box sx={{ width: { md: '100%', xs: '100%' }, }}  >
                            <InputLabel htmlFor="phone_number" sx={{ my: 1 }} >
                                {t("Form.PhoneNumber")}<span style={{ color: '#FFA53B' }} >*</span>
                            </InputLabel>
                            <input
                                // required
                                style={{ backgroundColor: '#FFF' }}
                                id="phone_number"
                                variant="filled"
                                size="medium"
                                name='phone_number'
                                className='input'
                                {...register("phone_number")}
                            />
                        </Box>
                        <Box sx={{ width: '100%', }}  >
                            <InputLabel htmlFor="location" sx={{ my: 1 }} >
                                {t("Form.Location")} <span style={{ color: '#FFA53B' }} >*</span>
                            </InputLabel>
                            <input
                                // required
                                style={{ backgroundColor: '#FFF' }}
                                id="location"
                                variant="filled"
                                size="medium"
                                name='location'
                                className='input'
                                {...register("location")}
                            />
                        </Box>
                        <Box sx={{ width: '100%', }}  >
                            <InputLabel htmlFor="preferred_location" sx={{ my: 1 }} >
                                {t("Form.preferred_location")} <span style={{ color: '#FFA53B' }} >*</span>
                            </InputLabel>
                            <input
                                // required
                                style={{ backgroundColor: '#FFF' }}
                                id="preferred_location"
                                variant="filled"
                                size="medium"
                                name='preferred_location'
                                className='input'
                                {...register("preferred_location")}
                            />
                        </Box>
                        <Box sx={{ width: { md: '100%', xs: '100%' }, }}  >
                            <InputLabel htmlFor="description" sx={{ my: 1 }} >
                                {t("Form.Message")} <span style={{ color: '#FFA53B' }} >*</span>
                            </InputLabel>
                            <textarea
                                // required
                                style={{ backgroundColor: '#FFF', padding: '20px', height: '100px', resize: 'none' }}
                                id="description"
                                variant="filled"
                                aria-multiline
                                size="medium"
                                name='description'
                                className='input'
                                {...register("description")}
                            />
                        </Box>
                    </Box>
                    <Box mt={2} >
                        <Button variant="contained"
                            type="submit"
                            sx={{
                                backgroundColor: theme.palette.primary.main, ':hover': {
                                    backgroundColor: theme.palette.primary.main
                                },
                                color: "#FFF",
                                fontWeight: 'bold',
                                width: '100px'
                            }}>{t("Form.btn")}</Button>
                    </Box>
                </Box>
            </Box>
        </div >
    )
}
export default Form
