import AddressListTabBarCard from './addressListTabBarCard';
import { Grid } from '@mui/material';
import { Stack } from '@mui/material';
/*
const addressListTabBar = () => {
    return <div>
        <Grid container spacing={0}
        >
            <Grid item xs={6}>
        <AddressListTabBarCard/>
            </Grid>
            <Grid item xs={6}>
        <AddressListTabBarCard/>
        </Grid>
       </Grid>
        
    </div>

}
*/

const addressListTabBar = () => {
    return <Stack direction="row">
        <AddressListTabBarCard/>
        <AddressListTabBarCard/>
    </Stack>
}

export default addressListTabBar;  

