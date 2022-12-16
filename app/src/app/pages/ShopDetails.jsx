import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import PostsOfShop from "../components/PostsOfShop";
import shopFunctions from "../functions/shop.functions";
import { Box, Button, Typography } from "@mui/material";
import BookingOfShop from "../components/BookingOfShop";

const ShopDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [shop, setShop] = useState({});
    const [view, setView] = useState('posts');

    useEffect(() => {
        shopFunctions.fetchShop(id, setShop);
    }, []);


    return (
        <>
            <Box>
                <Typography variant="h4">
                    {shop.name}
                </Typography>
                <Typography variant="h6">
                    {shop.description}
                </Typography>
                <Button onClick={() => navigate(`/updateshop/${id}`)}>
                    Update shop
                </Button>
                <img src={shop.imageUrl} alt={shop.name} />
            </Box>

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
                        <BookingOfShop shop={shop} setShop={setShop} idShop={id} fetchShop={shopFunctions.fetchShop}/>
                    )
            }
        </>
    );
}
 
export default ShopDetails;