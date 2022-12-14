import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import shopService from "../../setup/services/shop.service";
import PostsOfShop from "../components/PostsOfShop";


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
            <p>Shop ID: {id}</p>
            <PostsOfShop posts={shop.posts} idShop={id}/>
        </>
    );
}
 
export default ShopDetails;