import { Box, Button, InputLabel } from '@mui/material'
import React from 'react'
import './../ContactUs/Form/form.css'
import theme from '../../util/theme';

const SignUp = () => {
    const sendData = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <Box sx={{ borderRadius: '16px', p: 2 }}>
                <Box component={'form'} onSubmit={sendData} >
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }} >
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
                        <Box sx={{ width: { md: '100%', xs: '100%' }, }}>
                            <InputLabel htmlFor="bootstrap-input" sx={{ my: 1 }} >
                                Email <span style={{ color: '#FFA53B' }} >*</span>
                            </InputLabel>
                            <input
                                style={{ backgroundColor: '#FFF' }}
                                required
                                id="email"
                                variant="filled"
                                size="medium"
                                name='email'
                                className='input'
                            />
                        </Box>
                        <Box sx={{ width: '100%', }}  >
                            <InputLabel htmlFor="bootstrap-input" sx={{ my: 1 }} >
                                Password <span style={{ color: '#FFA53B' }} >*</span>
                            </InputLabel>
                            <input
                                required
                                style={{ backgroundColor: '#FFF' }}
                                id="password"
                                variant="filled"
                                size="medium"
                                name='password'
                                className='input'
                            />
                        </Box>
                        <Box sx={{ width: '100%', }}  >
                            <InputLabel htmlFor="bootstrap-input" sx={{ my: 1 }} >
                                Re-type Password <span style={{ color: '#FFA53B' }} >*</span>
                            </InputLabel>
                            <input
                                required
                                style={{ backgroundColor: '#FFF' }}
                                id="Re-typePassword"
                                variant="filled"
                                size="medium"
                                name='Re-typePassword'
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
                                width: '200px'
                            }}>Create Account</Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default SignUp