import { Card, CardMedia, CardContent, Typography, Box} from '@mui/material';
import { useNavigate } from "react-router-dom";
import shopService from '../../setup/services/shop.service';
import { useState, useEffect } from 'react';


const PostCard = ({post}) => {
    const navigate = useNavigate();
    const [shop, setShop] = useState({});

    const getShopData = async () => {
        try {
            const response = await shopService.getOneShopById(post.shop);
            console.log(response);
            setShop(response);
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        getShopData();
    }, []);

    return (
        <Card sx={{ display: 'flex', flexDirection: 'row', m:2}} onClick={()=> navigate(`/${post._id}`)} key={post._id}>
            <CardMedia
            component="img"
            height="140"
            image={post.imageUrl}
            alt={post.title}
            sx={{maxWidth: 345}}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {post.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {post.price} €
                </Typography>

                <Box sx={{mt:1}}>
                    <Typography variant="body2" color="text.secondary">
                        {shop?.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {shop?.addresse}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
 
export default PostCard;