import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PostsOfShop from "../components/PostsOfShop";
import shopFunctions from "../functions/shop.functions";
import { Box, Button } from "@mui/material";
import bookingService from "../../setup/services/booking.service";

const ShopDetails = () => {
    const { id } = useParams();

    const [shop, setShop] = useState({});
    const [view, setView] = useState('posts');

    useEffect(() => {
        shopFunctions.fetchShop(id, setShop);
    }, []);


    return (
        <>
            <h1>Shop Details</h1>
            <h2>{shop.name}</h2>
            <p>{shop.addresse}</p>

            <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
                <Button onClick={() => setView('posts')}>
                    View Posts
                </Button>
                <Button onClick={() => setView('bookings')}>
                    View Booking
                </Button>
            </Box>


            {
                view === 'posts' ?
                    (
                        <PostsOfShop posts={shop.posts} idShop={id}/>
                    )
                : 
                    (
                        <h1>yoooo</h1>
                    )
            }

            {/* <PostsOfShop posts={shop.posts} idShop={id}/> */}
        </>
    );
}
 
export default ShopDetails;