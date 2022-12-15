import { Card, CardMedia, CardContent, Typography} from '@mui/material';
import { useNavigate } from "react-router-dom";


const PostCard = ({post}) => {
    const navigate = useNavigate();

    return (
        <Card sx={{ display: 'flex', flexDirection: 'row', }} onClick={()=> navigate(`/${post._id}`)}>
            <CardMedia
            component="img"
            height="140"
            image={post.imageUrl}
            alt="green iguana"
            sx={{maxWidth: 345}}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {post.description}
                </Typography>
            </CardContent>
        </Card>
    );
}
 
export default PostCard;