import React from 'react';
import {ProductItemsDomainType} from "../../MainPage/productItems-reducer";
import s from './CartItem.module.css'
import {Button, ButtonGroup, Typography} from "@mui/material";
import {useAppDispatch} from "../../../App/store";
import {decCountAC, incCountAC, removeFromCartAC} from "../cart-reducer";

type CartItemType = {
    cart: ProductItemsDomainType
}

export const CartItem = (props: CartItemType) => {

    const {id, status, name, description, cost, image, count} = props.cart

    const dispatch = useAppDispatch();

    const onInc = () => {
        dispatch(incCountAC({id}))
    }
    const onDec = () => {
        dispatch(decCountAC({id}))
    }

    if (count === 0) {
        dispatch(removeFromCartAC({id}))
        dispatch(incCountAC({id}))
    }

    return (
        <div className={s.cartItem}>
            <div className={s.image}>
                <img src={image} alt="image" />
            </div>
            <div className={s.name}>
                <Typography variant={'h5'}>{name}</Typography>
                {description}
                <Typography variant={'h5'}>{cost + '$'}</Typography>
            </div>
            <div>
                <ButtonGroup
                    disableElevation
                    variant="contained"
                    aria-label="Disabled elevation buttons"
                    size={'small'}
                >
                    <Button onClick={onDec}>-</Button>
                    <div className={s.pageNumber}>{count}</div>
                    <Button onClick={onInc}>+</Button>
                </ButtonGroup>
            </div>

        </div>
    );
};

