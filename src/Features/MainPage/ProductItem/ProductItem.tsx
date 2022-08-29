import React from 'react';
import {Button, Typography} from "@mui/material";
import s from './ProductItem.module.css'


type PIType = {
    productItem: any
}

export const ProductItem = (props:PIType) => {


    return (
        <div className={s.item}>
            <div className={s.image}>
                <img src={props.productItem.image} alt="image"/>
            </div>
            <Typography variant={'h5'}>
                {props.productItem.name}
            </Typography >
            <Typography variant={'body2'} className={s.description}>
                {props.productItem.description}
            </Typography>
            <Typography variant={'h4'} className={s.cost}>
                {props.productItem.cost + '$'}
            </Typography>
            <Button variant="contained">Add to cart</Button>
        </div>
    );
};

