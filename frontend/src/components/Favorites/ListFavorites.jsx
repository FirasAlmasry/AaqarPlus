import React from 'react'
import WrapperSection from '../global/WrapperSection'
import HeaderSection from '../global/HeaderSection'
import GlobalList from '../global/GlobalList'
import img from './../../assets/external-view-contemporary-house-with-pool-dusk_190619-224.png'
import { Grid } from '@mui/material'
import CardProperty from '../global/CardProperty'

const ListFavorites = () => {
    return (
        <>
            <WrapperSection>
                <HeaderSection nameSection={'Favorites'} length={'21'} />
                <GlobalList>
                    <Grid item md={4} xs={12}>
                        <CardProperty
                            img={img}
                            name={'Resort Valley Ocs'}
                            address={'New Helioplis,Egypt '}
                            num1={'3'}
                            num2={'4'}
                            num3={'360'}
                            month={'108,534'}
                            years={'8'}
                            price={'6.800 $'}
                            is_favorite={true}/>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <CardProperty
                            img={img}
                            name={'Resort Valley Ocs'}
                            address={'New Helioplis,Egypt '}
                            num1={'3'}
                            num2={'4'}
                            num3={'360'}
                            month={'108,534'}
                            years={'8'}
                            price={'6.800 $'}
                            is_favorite={true}/>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <CardProperty
                            img={img}
                            name={'Resort Valley Ocs'}
                            address={'New Helioplis,Egypt '}
                            num1={'3'}
                            num2={'4'}
                            num3={'360'}
                            month={'108,534'}
                            years={'8'}
                            price={'6.800 $'}
                            is_favorite={true}/>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <CardProperty
                            img={img}
                            name={'Resort Valley Ocs'}
                            address={'New Helioplis,Egypt '}
                            num1={'3'}
                            num2={'4'}
                            num3={'360'}
                            month={'108,534'}
                            years={'8'}
                            price={'6.800 $'}
                            is_favorite={true}/>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <CardProperty
                            img={img}
                            name={'Resort Valley Ocs'}
                            address={'New Helioplis,Egypt '}
                            num1={'3'}
                            num2={'4'}
                            num3={'360'}
                            month={'108,534'}
                            years={'8'}
                            price={'6.800 $'}
                            is_favorite={true}/>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <CardProperty
                            img={img}
                            name={'Resort Valley Ocs'}
                            address={'New Helioplis,Egypt '}
                            num1={'3'}
                            num2={'4'}
                            num3={'360'}
                            month={'108,534'}
                            years={'8'}
                            price={'6.800 $'}
                            is_favorite={true}/>
                    </Grid>
                </GlobalList>
            </WrapperSection>
        </>
    )
}

export default ListFavorites