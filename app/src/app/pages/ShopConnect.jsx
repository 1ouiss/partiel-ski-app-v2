import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import shopFunctions from "../functions/shop.functions";
import { Box, Button, TextField } from "@mui/material";

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
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <Box sx={{maxWidth: 345, maxHeight: 345, m: 3}}>
                <img src={shop.imageUrl} alt={shop.name}/>
            </Box>
            <Box component="form" onSubmit={(e) => handleSubmit(e)} sx={{display: "flex", flexDirection: "column", maxWidth: 345}}>
                <TextField type="text" label="Password" onChange={(e) => setPassword(e.target.value)}/>
                <Button type="submit">Connect</Button>
            </Box>
        </Box>
    );
}
 
export default ShopConnect;