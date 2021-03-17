import React from 'react';
import IndividualShopItem from 'IndividualShopItem';
import {useContextProvider} from '../../context/ContextProvider';

    export default function ShopItemsList() {
        const {userPoints, setUserPoints} = useContextProvider();

        console.log("ShopItemsList worked.");

        return(
        <>
            <h1>ShopItemsList</h1>
            <IndividualShopItem />
        </>
    );
}