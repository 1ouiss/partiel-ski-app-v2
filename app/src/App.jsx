import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './app/layouts/MainLayout';
import postService from './setup/services/post.service';
import PostList from './app/pages/PostList';
import DetailPost from './app/pages/DetailPost';
import { useEffect, useState } from 'react';
import Shop from './app/pages/Shop';
import ShopDetails from './app/pages/ShopDetails';
import ShopConnect from './app/pages/ShopConnect';
import PostForm from './app/pages/PostForm';
import UpdateShop from './app/pages/UpdateShop';


function App() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
      try {
        const response = await postService.getPosts();
        console.log(response);
        setPosts(response)
      } catch (error) {
        console.log(error);
      }
  }

  useEffect(() => {
      fetchPosts();
  }, [])

  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<PostList posts={posts} />} />
          <Route path='/:id' element={<DetailPost />} />
          <Route path='/shop' element={<Shop />}/>
          <Route path='/shop/:id' element={<ShopConnect/>}/>
          <Route path='/shop/:id/details' element={<ShopDetails/>}/>
          <Route path='/createpost/:shopId' element={<PostForm/>}/>
          <Route path='/editpost/:postId' element={<PostForm/>}/>
          <Route path='/updateshop/:id' element={<UpdateShop/>}/>
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
