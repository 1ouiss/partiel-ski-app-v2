import { useEffect, useState } from "react";
import shopService from "../../setup/services/shop.service";

const Shop = () => {
    const [shops, setShops] = useState([]);

    const fetchShops = async () => {
        try {
            const response = await shopService.getAllShops();
            console.log(response);
            setShops(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchShops();
    }, []);

    return (
        <>
            <h1>Select Shop</h1>
            <ul>
                {shops.map((shop) => (
                    <li key={shop._id}>
                        <a href={`/shop/${shop._id}`}>{shop.name}</a>
                    </li>
                ))}
            </ul>
        </>
    );
}
 
export default Shop;