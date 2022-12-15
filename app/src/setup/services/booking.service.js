import instance from "./api.service";

const endPoint = '/booking';

const createBooking = async (booking) => {
    const response = await instance.post(`${endPoint}`, booking)
    return response.data;
}

const getOneById = async (id) => {
    const response = await instance.get(`${endPoint}/${id}`);
    return response.data;
}

const bookingService = {
    createBooking,
    getOneById,
}

export default bookingService;