import React, { useEffect, useState } from 'react';
import { Typography, Box, Link, Collapse } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import i18next from 'i18next';
import { useGetCountryQuery } from '../../state/Country';

const CountryAccordion = ({ setDrawer }) => {
    const lng = i18next.language;
    const { data: country, isCountryLoading } = useGetCountryQuery(lng);
    const [countryData, setCountryData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (country && !isCountryLoading) {
            setCountryData(country?.data?.data);
        }
    }, [country, isCountryLoading]);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Box sx={{ boxShadow: 'none', position: 'static', m: 0 }}>
            <Box
                sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', p: 0 }}
                onClick={handleToggle}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography
                    sx={{
                        textDecoration: "none",
                        fontSize: 14,
                        textTransform: 'capitalize',
                        fontWeight: 'bold',
                        flexGrow: 1,
                        // mb:1.5
                    }}
                    className="link"
                >
                    {lng === 'en' ? 'Countries To Invest In' : "أستثمر بالخارج"}
                </Typography>
                {isOpen ? <RemoveIcon /> : <AddIcon />}
            </Box>
            <Collapse in={isOpen}>
                <Box sx={{ pl: 2, gap: 1, display: "flex", flexDirection: "column", mt: 1.5 }}>
                    {countryData?.map((res) => (
                        <Link
                            key={res?.id}
                            href={`/country/${res?.id}`}
                            style={{
                                textDecoration: "none",
                                fontSize: 13,
                                textTransform: 'capitalize',
                                fontWeight: 'bold'
                            }}
                            className="link"
                            onClick={() => setDrawer(false)}
                        >
                            - {res?.name}
                        </Link>
                    ))}
                </Box>
            </Collapse>
        </Box>
    );
}

export default CountryAccordion;
