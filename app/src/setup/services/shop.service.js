import instance from "./api.service";

const endPoint = '/shop';

const getAllShops = async () => {
    const response = await instance.get(`${endPoint}`)
    return response.data;
}

const getOneShopById = async (id) => {
    const response = await instance.get(`${endPoint}/${id}`)
    return response.data;
}

const updateShop = async (id, shop) => {
    const response = await instance.put(`${endPoint}/${id}`, shop)
    return response.data;
}

const shopService = {
    getAllShops,
    getOneShopById,
    updateShop
}

export default shopService;