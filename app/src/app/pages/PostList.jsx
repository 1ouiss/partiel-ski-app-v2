import { useState } from "react";
import WeightFilter from "../components/WeightFilter";
import StyleFilter from "../components/StyleFilter";
import HeightFilter from "../components/HeightFilter";
import PostCard from "../components/PostCard";

const PostList = ({posts}) => {

    const [postsSearch, setPostsSearch] = useState([]);
    const [isSearch, setIsSearch] = useState(false)
    const [weight, setWeight] = useState('')
    const [style, setStyle] = useState('')
    const [height, setHeight] = useState('')

    const handleSearch = (e) => {
        const search = e.target.value;
        if (search.length > 0) {   
            setIsSearch(true);
            const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()));
            setPostsSearch(filteredPosts);
        }else{
            setIsSearch(false);
            setPostsSearch([]);
        }

    }

    const handleChangeWeight = (weight) => {
        setWeight(weight);
        if (weight === 45) {
            const filteredPosts = posts.filter(post => post.weight <= 45)
            setPostsSearch(filteredPosts);
        }else if (weight === 46) {
            const filteredPosts = posts.filter(post => post.weight >= 45 && post.weight < 65)
            setPostsSearch(filteredPosts);
        }else{
            const filteredPosts = posts.filter(post => post.weight > 65)
            setPostsSearch(filteredPosts);
        }
        setIsSearch(true);
    }

    const handleChangeStyle = (style) => {
        setStyle(style);
        const filteredPosts = posts.filter(post => post.style === style)
        setPostsSearch(filteredPosts);
        setIsSearch(true);
    }
    const handleChangeHeight = (height) => {
        setHeight(height);
        const filteredPosts = posts.filter(post => post.height === height)
        setPostsSearch(filteredPosts);
        setIsSearch(true);
    }

    

    return ( 
        <div>
            <h1>Post List</h1>

            <input type="text" onChange={(e) => handleSearch(e)} />

            <WeightFilter weight={weight} setWeight={handleChangeWeight}/>
            <StyleFilter style={style} setStyle={handleChangeStyle}/>
            <HeightFilter height={height} setHeight={handleChangeHeight}/>

            <div>
                {
                    isSearch ? postsSearch.map(post => (
                        <PostCard post={post}/>
                    )) :
                    posts.map(post => (
                        <PostCard post={post}/>
                    ))
                }
            </div>
        </div>
    );
}
 
export default PostList;