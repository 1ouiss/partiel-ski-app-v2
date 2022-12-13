import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import shopService from "../../setup/services/shop.service";


const ShopDetails = () => {
    const { id } = useParams();
    const [shop, setShop] = useState({});

    const fetchShop = async () => {
        try {
            const response = await shopService.getOneShopById(id);
            console.log(response);
            setShop(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchShop();
    }, []);


    return (
        <>
            <h1>Shop Details</h1>
        </>
    );
}
 
export default ShopDetails;