import postService from "../../setup/services/post.service";
import { useNavigate } from "react-router-dom";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography} from '@mui/material';
import { Box } from "@mui/system";

const PostsOfShop = ({posts, idShop}) => {

    const navigate = useNavigate();

    const handleDelete = async (id) => {
        try {
            const response = await postService.deletePost(id);
            console.log(response);

        } catch (error) {
            console.log(error);
        }
    }

    const handleCreate = async (shop) => {
        console.log(shop);
        navigate(`/createpost/${idShop}/`);
    }

    const handleEdit = async (id) => {
        console.log(id);
        navigate(`/editpost/${id}/`);
    }

    return (
        <Box sx={{marginTop: 5}}>
            <Box sx={{display: "flex", justifyContent: "space-between", m: 2}}>
                <Typography variant="h6">
                    Posts
                </Typography>
                <Button onClick={() => handleCreate(idShop)} variant="contained">
                    Create Post
                </Button>
            </Box>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                    <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Titre</TableCell>
                        <TableCell align="right">Prix</TableCell>
                        <TableCell align="right">Taille</TableCell>
                        <TableCell align="right">Style</TableCell>
                        <TableCell align="right">Poids</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {posts && posts.map((post) => (
                        <TableRow key={post._id}>
                            <TableCell>
                                {post._id}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {post.title}
                            </TableCell>
                            <TableCell align="right">{post.price}</TableCell>
                            <TableCell align="right">{post.size}</TableCell>
                            <TableCell align="right">{post.style}</TableCell>
                            <TableCell align="right">{post.weight}</TableCell>
                            <TableCell align="right">
                                <Button color="primary" variant="contained" onClick={()=> handleEdit(post._id)}>
                                    Edit
                                </Button>
                                <Button color="error" variant="contained" onClick={()=> handleDelete(post._id)}>
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
 
export default PostsOfShop;