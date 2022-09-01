import React from 'react';
import s from './ShoppingCart.module.css'
import {useAppSelector} from "../../App/store";
import {CartItem} from "./CartItem/CartItem";
import {Button, Paper, Typography} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from "react-router-dom";
import {Form} from "./Form/Form";

export const ShoppingCart = () => {

    const productItems = useAppSelector((state) => state.main)
    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate('/', {replace:true})
    }

    const productItemsForCart = productItems.length && productItems.filter((el) => el.status)
    console.log(productItemsForCart)
    let costForTotal = 0
    productItems.length && productItems.map((el) => el.status ? costForTotal += el.cost* el.count : el)

    return (
        <div className={s.cart}>
            <Button  variant="contained" startIcon={<ArrowBackIcon />} onClick={onClickHandler}>
                Back
            </Button>
            {productItemsForCart && productItemsForCart.length !== 0 ?
                <div className={s.content}>
                    <div className={s.items}>
                        {productItemsForCart && productItemsForCart.map((item) => {
                            return item.status && <Paper elevation={3} key={item.id}> <CartItem productItem={item}
                            />
                            </Paper>
                        })}
                    </div>
                    <div className={s.form}>
                        <Paper elevation={3} style={{width:'100%'}}>
                            <Form/>
                        </Paper>
                    </div>
                </div>:
                <Typography variant={'h5'} style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    Your basket is empty, please add an item to checkout.</Typography>
            }

            <Typography variant={'h4'} style={{fontWeight: 'bold', textDecoration: 'underline'}}>
                {'Total ' + costForTotal + '$'}
            </Typography>

        </div>
    );
};

