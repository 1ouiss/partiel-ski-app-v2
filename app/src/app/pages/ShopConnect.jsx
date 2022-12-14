import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import shopService from "../../setup/services/shop.service";

const ShopConnect = () => {
    const { id } = useParams();

    const [shop, setShop] = useState({});
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const fetchShop = async () => {
        try {
            const response = await shopService.getOneShopById(id);
            console.log(response);
            setShop(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchShop();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(password);
        if (password === shop.password) {
            navigate(`/shop/${id}/details`);
        }
    }
    return (
        <>
            <h2>Connect to see the shop details</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Connect</button>
            </form>
        </>
    );
}
 
export default ShopConnect;