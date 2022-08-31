import React, {useEffect} from 'react';
import {Button, Typography} from "@mui/material";
import s from './ProductItem.module.css'
import {useAppDispatch} from "../../../App/store";
import {changeStatusProductItemTC, fetchProductItemTC, ProductItemsType} from "../mainPage-reducer";


type PIType = {
    productItem: ProductItemsType
}

export const ProductItem = (props:PIType) => {


    const {id, status, name, description, cost, image} = props.productItem

    const dispatch = useAppDispatch();

    const onClickHandler = () => {
        dispatch(changeStatusProductItemTC({id, status}))
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
            {!status ?
                <Button variant="contained" onClick={onClickHandler}>Add to cart</Button> :
                <Button variant="contained" color={'success'} onClick={onClickHandler}>In the cart</Button>
            }
        </div>
    );
};

