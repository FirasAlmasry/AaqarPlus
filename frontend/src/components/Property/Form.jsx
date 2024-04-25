import { Box, Button, InputLabel, Typography } from '@mui/material'
import React, { useRef } from 'react'
import theme from '../../util/theme'
import emailjs from '@emailjs/browser';
import './../ContactUs/Form/form.css'
const Form = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service', 'template', form.current, 'user')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <>
            <Box sx={{ py: 2, px: 3, borderRadius: '8px', boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", my: 2, mx: { md: 1 ,xs:0}  }}>
                <Typography color={'primary.main'} variant='h6' >Need Expert Advice?</Typography>
                <Typography color={'secondary.supMain'} my={2}>Fill out the form and one of our property
                    consultants will contact you.</Typography>
                <Box sx={{ borderRadius: '16px',  height: '100%', }}>
                    <Box sx={{ borderRadius: '16px', background: '#FFF', p: 2 }}>
                        <Box component={'form'} ref={form} onSubmit={sendEmail} >
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', textAlign:'left' }} >
                                <Box sx={{ width: { md: '100%', xs: '100%' }, }}>
                                    <InputLabel htmlFor="bootstrap-input" sx={{ my: 1 }} >
                                        Name <span style={{ color: '#FFA53B' }} >*</span> 
                                    </InputLabel>
                                    <input
                                        style={{ backgroundColor: '#FFF' }}
                                        required
                                        id="name"
                                        variant="filled"
                                        size="medium"
                                        name='name'
                                        className='input'
                                    />
                                </Box>
                                <Box sx={{ width: '100%', }}  >
                                    <InputLabel htmlFor="bootstrap-input" sx={{ my: 1 }} >
                                        Plane Hills New Cairo <span style={{ color: '#FFA53B' }} >*</span>
                                    </InputLabel>
                                    <input
                                        required
                                        style={{ backgroundColor: '#FFF' }}
                                        id="Phone"
                                        variant="filled"
                                        size="medium"
                                        name='phone'
                                        className='input'
                                    />
                                </Box>
                                <Box sx={{ width: { md: '100%', xs: '100%' }, }}  >
                                    <InputLabel htmlFor="bootstrap-input" sx={{ my: 1 }} >
                                        Phone Number<span style={{ color: '#FFA53B' }} >*</span>
                                    </InputLabel>
                                    <input
                                        required
                                        style={{ backgroundColor: '#FFF' }}
                                        id="email"
                                        variant="filled"
                                        size="medium"
                                        name='email'
                                        className='input'
                                    />
                                </Box>
                                <Box sx={{ width: { md: '100%', xs: '100%' }, }}  >
                                    <InputLabel htmlFor="bootstrap-input" sx={{ my: 1 }} >
                                        Message <span style={{ color: '#FFA53B' }} >*</span>
                                    </InputLabel>
                                    <textarea
                                        required
                                        style={{ backgroundColor: '#FFF', padding: '20px', height: '100px', resize: 'none' }}
                                        id="outlined-multiline-flexible"
                                        variant="filled"
                                        aria-multiline
                                        size="medium"
                                        name='message'
                                        className='input'
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
                                    }}>Submit</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Form