import React, {useEffect} from 'react';
import {ProductItem} from "./ProductItem/ProductItem";
import {Grid, Paper} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../App/store";
import {fetchProductItemTC} from "./mainPage-reducer";
import s from './MainPage.module.css'



export const MainPage = () => {

    const productItems = useAppSelector((state) => state.main)
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!productItems.length) {
            dispatch(fetchProductItemTC())
        }
    },[])

    console.log(productItems)

    return (
        <div>
            <Grid container spacing={3} justifyContent={'center'}>
                {productItems.length && productItems.map((item) => {
                    return <Grid item md={4} sm={6} xs={10}  key={item.id}>
                        <Paper elevation={3} className={s.item}>
                            <ProductItem productItem={item} />
                        </Paper>
                    </Grid>
                })}
            </Grid>
        </div>
    );
};

