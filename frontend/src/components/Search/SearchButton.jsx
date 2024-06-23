// import React from 'react';
// import { Box } from '@mui/material';
// import Btn from './../global/Btn';
// import { useDispatch } from 'react-redux';
// import { resetSearchInputs } from '../../redux/searchSlice'; // استبدل "searchSlice" بالاسم الصحيح للشريحة

// const SearchButton = ({ t, selectedItem, selectedChildId }) => {
//     const dispatch = useDispatch();

//     const handleLinkClick = () => {
//         // تشغيل إجراء Redux لإعادة تعيين البحث
//         dispatch(resetSearchInputs());

//         // توجيه المستخدم إلى صفحة البحث مع إضافة القيم المحددة كمعلمات في الرابط
//         const searchParams = new URLSearchParams({
//             selectedItem,
//             selectedChildId
//         }).toString();
//         const searchUrl = `/search?${searchParams}`;
//         window.location.href = searchUrl;
//     };

//     return (
//         <Box sx={{ width: { md: 'auto', xs: '100%' } }}>
//             <Btn text={t('btn')} wid={'100%'} widLa={'150px'} onClick={handleLinkClick} />
//         </Box>
//     );
// };

// export default SearchButton;

import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Btn from './../global/Btn';

const SearchButton = ({ handleLinkClick, resetSearchInputs, t }) => (
    <Box sx={{ width: { md: 'auto', xs: '100%' } }}>
        <Link to={handleLinkClick()} onClick={() => resetSearchInputs()}>
            <Btn text={t('btn')} wid={'100%'} widLa={'150px'} />
        </Link>
    </Box>
);

export default SearchButton;
