import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import WeightFilter from "../components/WeightFilter";

const PostForm = () => {
    const [weight, setWeight] =useState('')
    const {postId, shopId} = useParams();

    useEffect(() => {
        console.log("post id : ",postId);
        console.log("shop id : ",shopId);
    }, [])


    return (
        <div>
            <form>
                <input type="text" name="title" placeholder="Titre du post"/>
                <input type="text" name="description" placeholder="description du poste"/>
                <input type="text" name="imageUrl" placeholder="url de l'image"/>
                <input type="text" name="imageUrl" placeholder="url de l'image"/>
                <input type="text" name="price" placeholder="prix"/>
                <WeightFilter weight={weight} setWeight={setWeight}/>
            </form>
        </div>
    );
}
 
export default PostForm;