import React from 'react';
import IndividualShopItem from 'IndividualShopItem';
import {useAuthContext} from '../context/AuthProvider';

    export default function ShopItemsList() {
        const {userPoints, setUserPoints} = useAuthContext();

        return(
        <>
            <h1>ShopItemsList</h1>
            <IndividualShopItem />
        </>
    );
}