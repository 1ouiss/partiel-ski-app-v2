import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import shopFunctions from "../functions/shop.functions";

const ShopConnect = () => {
    const { id } = useParams();

    const [shop, setShop] = useState({});
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        shopFunctions.fetchShop(id, setShop);
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