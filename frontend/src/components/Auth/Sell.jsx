import { Box, Button, InputLabel, Select, MenuItem } from '@mui/material'
import React from 'react'
import './../ContactUs/Form/form.css'
import theme from '../../util/theme';

const Sell = () => {
    const [propertyType, setPropertyType] = React.useState('');

    const handleChange = (event) => {
        setPropertyType(event.target.value);
    }
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
                        <Box sx={{ width: '100%', }}  >
                            <InputLabel htmlFor="bootstrap-input" sx={{ my: 1 }} >
                                Location <span style={{ color: '#FFA53B' }} >*</span>
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
                                Address<span style={{ color: '#FFA53B' }} >*</span>
                            </InputLabel>
                            <input
                                required
                                style={{ backgroundColor: '#FFF' }}
                                id="address"
                                variant="filled"
                                size="medium"
                                name='address'
                                className='input'
                            />
                        </Box>
                        <Box sx={{ width: { md: '100%', xs: '100%' }, }}>
                            <InputLabel sx={{ color: '#000', my: 1 }} >Select PropertyType</InputLabel>
                            <Select
                                labelId="PropertyType"
                                id="PropertyType"
                                value={propertyType}
                                onChange={handleChange}
                                sx={{

                                    '.MuiInputLabel-formControl': {
                                        color: '#fff',
                                    }, border: '2px solid #fff', width: '100%',
                                    color: '#fff',
                                    background:'#FFF'
                                }}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
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
        </>
    )
}

export default Sell