import instance from "./api.service";

const endPoint = '/post';

const getPosts = async () => {
    const response = await instance.get(`${endPoint}`)
    return response.data;
}

const getOnePostById = async (id) => {
    const response = await instance.get(`${endPoint}/${id}`)
    return response.data;
}

const deletePost = async (id) => {
    const response = await instance.delete(`${endPoint}/${id}`)
    return response.data;
}

const createPost = async (data) => {
    const response = await instance.post(`${endPoint}`, data)
    return response.data;
}

const editPost = async (id, data) => {
    const response = await instance.put(`${endPoint}/${id}`, data)
    return response.data;
}

const postService = {
    getPosts,
    getOnePostById,
    deletePost,
    createPost,
    editPost
}

export default postService;