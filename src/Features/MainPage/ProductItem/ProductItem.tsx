import React from 'react';
import {Button, Typography} from "@mui/material";
import s from './ProductItem.module.css'
import {useAppDispatch, useAppSelector} from "../../../App/store";
import {ProductItemsDomainType} from "../productItems-reducer";
import {addToCartAC, removeFromCartAC} from "../../ShoppingCart/cart-reducer";


type PIType = {
    productItem: ProductItemsDomainType
}

export const ProductItem = (props:PIType) => {


    const {id, status, name, description, cost, image} = props.productItem

    const cart = useAppSelector((state) => state.cart)
    const dispatch = useAppDispatch();

    let productStatus = cart.find((el) => el.id === id)
    const onClickHandler = () => {
        !productStatus ?
            dispatch(addToCartAC({cartItem: props.productItem})):
            dispatch(removeFromCartAC({id}))

    }

    return (
        <div className={s.item}>
            <div className={s.image}>
                <img src={image} alt="image"/>
            </div>
            <Typography variant={'h5'}>
                {name}
            </Typography >
            <Typography variant={'body2'} className={s.description}>
                {description}
            </Typography>
            <Typography variant={'h4'} className={s.cost}>
                {cost + '$'}
            </Typography>
            {!productStatus ?
                <Button variant="contained" onClick={onClickHandler}>Add to cart</Button> :
                <Button variant="contained" color={'success'} onClick={onClickHandler}>In the cart (cancel)</Button>
            }
        </div>
    );
};

