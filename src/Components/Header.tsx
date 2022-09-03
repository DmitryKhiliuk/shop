import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Badge, {BadgeProps} from '@mui/material/Badge';
import {styled} from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useAppSelector} from "../App/store";
import {LinearProgress} from "@mui/material";
import {ErrorSnackbar} from "./ErrorSnackbar";

type HeaderType = {
    openCart: () => void
}

export const Header = (props: HeaderType) => {

    const cart = useAppSelector((state) => state.cart)
    const status = useAppSelector((state) => state.app.status)

    let costForCart = 0
    cart.length && cart.map((el) => costForCart += el.cost * el.count)

    const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));

    const onClickHandler = () => {
        props.openCart()
    }
    return (
        <Box sx={{ flexGrow: 1 , marginBottom: '65px'}}>
            <ErrorSnackbar/>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        MOBILE SHOP
                    </Typography>
                    <IconButton aria-label="cart">
                    <StyledBadge badgeContent={costForCart!==0?costForCart + '$':costForCart} max={9999} color="secondary">
                        <ShoppingCartIcon fontSize={'large'} color={'inherit'} onClick={onClickHandler}/>
                    </StyledBadge>
                </IconButton>
                </Toolbar>
                {status === 'loading' && <LinearProgress/>}
            </AppBar>
        </Box>
    );
}

