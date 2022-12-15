import { useParams, useNavigate } from "react-router-dom";
import shopFunctions from "../functions/shop.functions";
import { useState, useEffect } from "react";
import { Box, Button, TextField } from "@mui/material";
import shopService from "../../setup/services/shop.service";

const UpdateShop = () => {
    const { id } = useParams();
    const [shop, setShop] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        shopFunctions.fetchShop(id, setShop);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await shopService.updateShop(id, shop);
            console.log(response);
            navigate(`/shop/${id}/details`);
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e) => {
        setShop({
            ...shop,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <Box component="form" onSubmit={(e) => handleSubmit(e)}>
                <TextField
                    label="Name"
                    variant="outlined"
                    value={shop?.name}
                    name="name"
                    onChange={(e) => handleChange(e)}
                />
                <TextField
                    label="Adresse"
                    variant="outlined"
                    value={shop?.addresse}
                    name="addresse"
                    onChange={(e) => handleChange(e)}
                />
                <TextField
                    label="Logo"
                    variant="outlined"
                    value={shop?.imageUrl}
                    name="imageUrl"
                    onChange={(e) => handleChange(e)}
                />
                <Button type="submit">
                    Update
                </Button>

            </Box>
        </>
    );
}
 
export default UpdateShop;