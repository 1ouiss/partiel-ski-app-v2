import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import WeightFilter from "../components/WeightFilter";
import { Box, Button, TextField } from "@mui/material";
import SizeFilter from "../components/SizeFilter";
import StyleFilter from "../components/StyleFilter";
import postService from "../../setup/services/post.service";

const PostForm = () => {
    const [weight, setWeight] =useState('');
    const {postId, shopId} = useParams();

    const [post, setPost] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        console.log("post id : ",postId);
        console.log("shop id : ",shopId);

        if (postId) {
            getPost(postId);
        }

    }, [])

    const getPost = async (postId) => {
        try {
            const response = await postService.getOnePostById(postId);
            console.log(response);
            setPost(response);
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setPost({
            ...post,
            [name]: value
        })
    }

    const handleEdit = async() => {
        console.log("edit");
        try {
            const response = await postService.editPost(postId, post);
            console.log(response);
            navigate(`/shop/${post.shop}/details`);
        } catch (error) {
            console.log(error);
        }
    }

    const handleCreate = async() => {
        console.log("create");
        post.shop = shopId
        try {
            const response = await postService.createPost(post);
            console.log(response);
            navigate(`/shop/${shopId}/details`);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (postId) {
            handleEdit();
        } else {
            handleCreate();
        }
    }


    return (
        <>
            <Box component="form" onSubmit={(e)=> handleSubmit(e)}>
                <TextField type="text" name="title" label="Titre du post" value={post?.title || ""} onChange={(e)=>handleChange(e)}/>
                <TextField type="text" name="description" label="description du poste" value={post?.description || ""} onChange={(e)=>handleChange(e)}/>
                <TextField type="text" name="imageUrl" label="url de l'image" value={post?.imageUrl || ""} onChange={(e)=>handleChange(e)}/>
                <TextField type="text" name="price" label="prix" value={post?.price || ""} onChange={(e)=>handleChange(e)}/>
                <WeightFilter weight={post?.weight || ""} setWeight={handleChange}/>
                <SizeFilter size={post?.size || ""} setSize={handleChange}/>
                <StyleFilter style={post?.style || ""} setStyle={handleChange} />
                <Button type="submit">
                    {
                        postId ? "Edit" : "Create"
                    }
                </Button>
            </Box>
        </>
    );
}
 
export default PostForm;