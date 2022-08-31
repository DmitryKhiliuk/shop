import React, {useState} from 'react';
import {ProductItemsType} from "../../MainPage/mainPage-reducer";
import s from './CartItem.module.css'
import {Button, ButtonGroup, Typography} from "@mui/material";

type CartItemType = {
    productItem: ProductItemsType
}

export const CartItem = (props: CartItemType) => {

    const {id, status, name, description, cost, image} = props.productItem

    const [value, setValue] = useState(1)

    const onInc = () => {
        setValue(value + 1)
    }
    const onDec = () => {
        setValue(value - 1)
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
                    <Button onClick={onInc}>+</Button>
                    <div className={s.pageNumber}>{value}</div>
                    <Button onClick={onDec}>-</Button>
                </ButtonGroup>
            </div>

        </div>
    );
};

