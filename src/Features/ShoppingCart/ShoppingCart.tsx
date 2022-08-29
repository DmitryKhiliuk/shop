import React from 'react';
import {useAppSelector} from "../../App/store";
import {CartItem} from "./CartItem/CartItem";

export const ShoppingCart = () => {

    const productItems = useAppSelector((state) => state.main)

    return (
        <div>
            <div>
                {productItems.length && productItems.map((item) => {
                    const itemsForCart = item.status ? item : null
                    return <CartItem items={itemsForCart}
                                     key={item.id}/>
                })}
            </div>
        </div>
    );
};

