import { useEffect } from "react";
import postService from "../../setup/services/post.service";
import { useNavigate } from "react-router-dom";

const PostsOfShop = ({posts, idShop}) => {

    const navigate = useNavigate();
    
    useEffect(() => {
        console.log(posts);
    }, [])

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
        <div>
            <h1>Posts of shop</h1>
            <button onClick={() => handleCreate(idShop)}>
                CreatePost
            </button>
            <button onClick={() => handleEdit(idShop)}>
                EditPost
            </button>
            <ul>
                {posts && posts.map((post) => (
                    <li key={post._id}>
                        {post.title}
                        <button onClick={() => handleDelete(post._id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
 
export default PostsOfShop;