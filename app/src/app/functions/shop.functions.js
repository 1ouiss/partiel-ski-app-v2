import shopService from "../../setup/services/shop.service";

const fetchShop = async (id, setShop) => {
    try {
        const response = await shopService.getOneShopById(id);
        setShop(response);
    } catch (error) {
        console.log(error);
    }
}

const shopFunctions = {
    fetchShop,

}

export default shopFunctions;