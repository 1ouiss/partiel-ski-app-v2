import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import postService from "../../setup/services/post.service";
import FormComment from "../components/FormComment";
import FormBooking from "../components/FormBooking";
import { Button, Typography } from "@mui/material";


const DetailPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [noteMoyenne, setNoteMoyenne] = useState(0)

    const [post, setPost] = useState({});



    const fetchPost = async () => {
        try {
            const response = await postService.getOnePostById(id);
            console.log(response);
            setPost(response);
        } catch (error) {
            console.log(error);
        } 
    }

    const calculNoteMoyenne = () => {
        let note = 0;
        let nb = 0; 
        post.comments && post.comments.map((comment) => {
            note += comment.starts
            nb += 1
        })
        let moyenne = note/nb
        setNoteMoyenne(moyenne)
    }

    useEffect(() => {
        fetchPost();
    }, [])

    useEffect(() => {
        calculNoteMoyenne();
    }, [post])

    return ( 
        <>
            <Button onClick={()=> navigate('/')}>
                Retour
            </Button>
            <Typography variant="h5">Detail Post</Typography>

            <FormComment id={id} fetchPost={fetchPost}/>

            <FormBooking id={id} fetchPost={fetchPost} shop={post.shop}/>

            <div>
                {
                    post && post.comments && post.comments.map((comment) => {
                        return (
                            <div key={comment._id}>
                                <p>{comment.username}</p>
                                <p>{comment.description}</p>
                                {
                                    comment.starts === 1 && <p>⭐ ☆ ☆ ☆ ☆</p>
                                }
                                {
                                    comment.starts === 2 && <p>⭐ ⭐ ☆ ☆ ☆</p>
                                }
                                {
                                    comment.starts === 3 && <p>⭐ ⭐ ⭐ ☆ ☆</p>
                                }
                                {
                                    comment.starts === 4 && <p>⭐ ⭐ ⭐ ⭐ ☆</p>
                                }
                                {
                                    comment.starts === 5 && <p>⭐ ⭐ ⭐ ⭐ ⭐</p>
                                }
                            </div>
                        )
                    }
                    )
                }
            </div>

            <div>
                {
                    noteMoyenne === 1 && <p>⭐ ☆ ☆ ☆ ☆</p>
                }
                {
                    noteMoyenne === 2 && <p>⭐ ⭐ ☆ ☆ ☆</p>
                }
                {
                    noteMoyenne === 3 && <p>⭐ ⭐ ⭐ ☆ ☆</p>
                }
                {
                    noteMoyenne === 4 && <p>⭐ ⭐ ⭐ ⭐ ☆</p>
                }
                {
                    noteMoyenne === 5 && <p>⭐ ⭐ ⭐ ⭐ ⭐</p>
                }
            </div>
        </>
    );
}
 
export default DetailPost;