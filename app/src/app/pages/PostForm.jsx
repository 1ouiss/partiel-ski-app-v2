import { useEffect } from "react";
import { useParams } from "react-router-dom";


const PostForm = () => {
    const {postId, shopId} = useParams();

    useEffect(() => {
        console.log("post id : ",postId);
        console.log("shop id : ",shopId);
    }, [])
    return (
        <div>
            <h1>Post Form</h1>
        </div>
    );
}
 
export default PostForm;