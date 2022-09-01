import React from 'react';
import {
    changeStatusProductItemAC,
    decCountAC,
    incCountAC,
    ProductItemsDomainType
} from "../../MainPage/mainPage-reducer";
import s from './CartItem.module.css'
import {Button, ButtonGroup, Typography} from "@mui/material";
import {useAppDispatch} from "../../../App/store";

type CartItemType = {
    productItem: ProductItemsDomainType
}

export const CartItem = (props: CartItemType) => {

    const {id, status, name, description, cost, image} = props.productItem

    const dispatch = useAppDispatch();

    const onInc = () => {
        dispatch(incCountAC({id}))
    }
    const onDec = () => {
        dispatch(decCountAC({id}))
    }

    if (props.productItem.count === 0) {
        dispatch(changeStatusProductItemAC({id, status}))
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
                    <div className={s.pageNumber}>{props.productItem.count}</div>
                    <Button onClick={onInc}>+</Button>
                </ButtonGroup>
            </div>

        </div>
    );
};

