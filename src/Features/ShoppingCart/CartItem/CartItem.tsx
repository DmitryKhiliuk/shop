import React from 'react';
import {ProductItemsType} from "../../MainPage/mainPage-reducer";

type CartItemType = {
    items: ProductItemsType | null
}

export const CartItem = (props: CartItemType) => {
    return (
        <div>
            {props.items!.name}
        </div>
    );
};

