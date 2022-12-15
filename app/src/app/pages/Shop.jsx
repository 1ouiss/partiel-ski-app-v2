import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import shopService from "../../setup/services/shop.service";
import { Link } from "react-router-dom";

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
            <Box>
                {shops.map((shop) => (
                    <Typography key={shop._id}>
                        <Link to={`/shop/${shop._id}`}>{shop.name}</Link>
                    </Typography>
                ))}
            </Box>
        </>
    );
}
 
export default Shop;